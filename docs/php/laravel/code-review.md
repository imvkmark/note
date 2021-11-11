# Laravel (Code Review) - 01

## 1. 带标签的缓存是无法不带标签删除的

```php
#laravel 5.5
// 标签内部的数据外部是获取不到的
\Cache::tags('test')->remember('abc', SysConfig::HALF_DAY_MIN, function () {
	return 5;
});
$a = \Cache::get('abc');
\Cache::forget('abc');
$b = \Cache::get('abc');
$this->assertEquals($a, $b);
```

## 2. 创建的数据和保存的数据不符合

```php
# 创建前
$input = [
  "mobile" => "17081297193"
  "password" => ""
  "type" => "user"
  "is_enable" => 1
];
$user = PamAccount::create($input);
$user = [
    "mobile" => "18056346460"
    "password" => ""
    "type" => "user"
    "is_enable" => 1
    "updated_at" => "2018-07-26 22:07:30"
    "created_at" => "2018-07-26 22:07:30"
    "id" => 96
];

# 从数据库查询
$user = \User::find($user->id);
$user = [
   "id" => 96
    "mobile" => "18056346460"
    "parent_id" => 0
    "password" => ""
    "type" => "user"
    "is_enable" => 1
    "login_times" => 0
    "reg_platform" => "ios"
    "created_at" => "2018-07-26 22:07:30"
    "updated_at" => "2018-07-26 22:07:30"
]

```

> I believe this is designed this way to limit number of SQL queries. If you need to get actual data saved in the database, you need to obtain this record explicitely, just the way you did :)

> INSERT query doesn't return actual row.

## 3. 事件中绝对不要返回 fasle

因为在 PHP 5.5 中 这样说明

> Stopping The Propagation Of An Event
> Sometimes, you may wish to stop the propagation of an event to other listeners. You may do so by returning `false` from your listener's `handle` method.
> 

## 4. 控制器方法

```
index()                  # 列表
establish($id = null)    # 创建 / 编辑
update()                 # 更新 / 批量更新
delete()                 # 删除, 存在的订单不是彻底删除使用 delete
destroy()                # 销毁(彻底删除)
```

## 5. 路由写法

路由器第二个参数不可以传 `key`

```
# 传值 bad
route('dsk_base_area.establish', ['parent_id' => $item['areaid']])

# 不传值 good
route('dsk_base_area.establish', [$item->areaid]])
```

这两个哪个写起来更简洁呢?
因为使用 route 的时候接收到的参数在控制器传参数进行获取
`public function establish($parent_id)` 这种方法才能够接收到数据的.
ps: 使用 `$request->input('parent_id')` 根本获取不到东西

## 6. 使用对象和对象的错误提示

```
# 使用对象的好处
route('dsk_base_area.create', [$item['areaid']])   # 如果不存在字段, 则报 undefined index 错误
route('dsk_base_area.create', [$item->area_id])    # 这里不报错的.

# 使用映射过的对象的好处是容易识记
route('dsk_base_area.create', [$item->areaid])    # 这里不报错的.
route('dsk_base_area.create', [$item->area_id])   # 使用映射过的字段更便于记忆, 减少浏览器的 `typo` 错误
```

## 7. 合理使用模型提供的方法

```
# 取一条
UserMessage::where('item_id', $item_id)->select("*")->first();
UserMessage::where('item_id', $item_id)->first();
UserMessage::find($item_id);

# 取单个
UserMessage::where('item_id', $item_id)->lists('username')->first();
UserMessage::where('item_id', $item_id)->value('username');

# 模型方法
$item = UserMessage::find($item_id);
$item->num += 1;
$item->save();
```

## 8. Form 使用 post 方法提交可以不填写 'method'

```
# 这里来自于表单提交
@if (isset($item))
    {!! Form::model($item,['route' => ['dsk_adv_item.edit', $item->id], 'id' => 'form_ad_place','method' => 'post']) !!}
@else
    {!! Form::open(['route' => 'dsk_adv_item.create','id' => 'form_ad_place','enctype'=>'multipart/form-data']) !!}
@endif
```

优化后

```
@if (isset($item))
    {!! Form::model($item,['route' => ['dsk_adv_item.edit', $item->id], 'id' => 'form_ad_place']) !!}
@else
    {!! Form::open(['route' => 'dsk_adv_item.create','id' => 'form_ad_place']) !!}
@endif
```

## 9. 对于编辑/创建使用同一个模版

编辑和创建来说, 我们使用同一个模版, 模板的名字应该命名为 `establish.blade.php`

## 10. [批量]更新使用 update

因为这里的更新就是批量的, 并且使用的方式不是更新一个, 所以这里不使用 `batchUpdate`

```php
class AdPlaceController{
    # bad
    public function batchUpdate() {
        // ...
    }


    # good
    public function update() {
        $update = \Input::input('update');
        foreach ($update as $id => $item) {
            AdvPlace::where('id', $id)->update($item);
        }
        return site_end('success', '更新成功');
    }
}
```

## 11. 取消不需要的导入

```
 use Order\Action\Hunter;
 use Order\Models\Filters\OrderHunterFilter;
 use Order\Models\OrderHunter;
 use Order\Models\Resources\EarnResource;
 use Site\Tests\Base\SiteTestCase;
 use System\Models\PamAccount;
```

## 12. 类内部调用使用 self (self_accessor)

```
/**
 * @param int $account_id 用户ID
 * @return StatisticsRangeFilter
 */
public function account($account_id): self
{
    return $this->where('account_id', $account_id);
}
```

## 13. Laravel 中 Carbon 对象可以直接进行时间传递

```php
// deprecated
$rePublishTimer = Carbon::now()->subMinutes($interval)->toDateTimeString();
$accountIds = CustomHunter::where('updated_at', '<', $rePublishTimer)
    distinct()->pluck('account_id');

// suggest
$accountIds = CustomHunter::where('updated_at', '<',  Carbon::now()->subMinutes($interval))
    distinct()->pluck('account_id');
```

## 14. 数据获取

获取数据应当采用最简单的形式

```php
// bad : new 模型, 没有考虑逻辑
if ((new \System\Models\PamBind)->where('qq_key', $openId)->exists()) {
    return $this->setError('已经绑定过');
}

PamBind::create([
    'account_id' => $this->pam->id,
    'qq_key'     => $openId,
]);

// good : 优化后的代码
if (PamBind::where('qq_key', $openId)->exists()) {
    return $this->setError('已经被绑定过');
}

PamBind::updateOrCreate([
    'account_id' => $this->pam->id,
], [
    'qq_key'     => $openId,
]);
```

## 15.初始化异常处理

获取数据需要做异常处理, 否则会出现无查询结果

```php
// bad : 错误信息
public function init($id)
{
   $this->appVersion = AppVersion::findOrFail($id);
   $this->id         = $this->appVersion->id;
   return $this;
}

// good : 正确代码
public function init($id)
{
   try {
       $this->appVersion   = AppVersion::findOrFail($id);
       $this->id = $this->appVersion->id;
       return true;
   } catch (\Exception $e) {
       return $this->setError($e->getMessage());
   }
}
```

## 16. 队列中运行延迟时候需要确保存在 `delay()` 方法

使用 `Illuminate\Bus\Queueable` 这个 Trait,
`.env` 中的 `QUEUE_DRIVER` 能够是 sync

## 17. `empty()` 和 `Collection::empty()` 方法不同

这段代码来自于清除未支付的中间订单

```
# 原始代码
$list = FinancePayTransfer::where('status', FinancePayTransfer::STATUS_UNPAY)
    ->where('updated_at','<', Carbon::now()->subWeek()->subMinutes(30)->toDateTimeString())->select(['id'])->take(100)->get();
if ($list) {
   foreach ($list as $k => $rs) {
       FinancePayTransfer::where('id', $rs->id)->delete();
   }
}


# 优化后代码
# [优化] Laravel 中可以直接传入对象进行操作返回, 所以这里不必再进行转换
$dayEnd = Carbon::now()->subWeek();
/** @var Collection $list */
$list = FinancePayTransfer::where('status', FinancePayTransfer::STATUS_UNPAY)
    ->where('updated_at','<', $dayEnd)
    ->take(100)->lists('id');

# [bug] 如果 $list 为空, 条目值为空, 因为$list 是对象, 所以 if ($list) 会一直是 true
# [优化] 减少数据库请求次数,使用 whereIn 方法替代数据库的循环删除方法.
if (!$list->isEmpty()) {
    FinancePayTransfer::whereIn('id', $list)->delete();
}
```

## 18. 类名和文件名大小写匹配

如果不匹配会造成类在 unix 平台中无法匹配

![](https://file.wulicode.com/note/2021/11-11/15-55-31887.png)

## 19. 类方法名使用正确的方法名称

`orderBy` 是正确写法, 不是 `OrderBy`

```
# bad
AdvPlace::OrderBy('list_order', 'asc')->lists('title', 'id');

$DB->orderby('id', 'desc');

# good
AdvPlace::orderBy('list_order', 'asc')->lists('title', 'id');

$DB->orderBy('id', 'desc');
```

## 20. 生成 Laravel ide-helper 用来提示函数

使用以下命令可以生成代码提示

```
php artisan ide-helper:generate
```

## 21 使用 Map 会掉 el### 3.1 使用 Map 会坑

```php
$items   = [
    [
        'id'   => 'a',
        'type' => 'pc',
    ],
    [
        'id'   => 'b',
        'type' => 'web',
    ],
    [
        'id'   => 'c',
        'type' => 'pc',
    ],
];
$collect = collect($items)
    ->where('type', 'pc')
    ->map(function ($item) {
        return $item;
    });
/**
这里使用 where 之后是存在 Key 的
0 => array:2 [
  "id" => "a"
  "type" => "pc"
]
2 => array:2 [
  "id" => "c"
  "type" => "pc"
]
*/

// 解决方案
$data    = collect();
$collect = collect($items)
    ->where('type', 'pc')
    ->each(function ($item) use ($data) {
        $data->push($item);
    });
/*
0 => array:2 [
  "id" => "a"
  "type" => "pc"
]
1 => array:2 [
  "id" => "c"
  "type" => "pc"
]
*/
```

## 22 使用 collect 转换成数组

toArray 递归转换成数组, 支持 `toArray` 方法的可以递归转换成数组

```php
// collect 内部可以转换成数组
$collect    = collect([1, 2, 3, 4]);
$colCollect = collect([$collect, $collect, $collect]);
$this->assertIsArray($colCollect->toArray()[0]);

// collect 不支持 toArray 模式的以数组展示
$std    = new stdClass();
$colStd = collect([$std, $std, $std]);
$this->assertIsObject($colStd->toArray()[0]);
```
