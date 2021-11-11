# Php (Code Review) - 01

## 1. 计算 1 次

```php
<?php
# before
if (strlen($nickname) < 6 || strlen($nickname) > 18) {
	return $this->setError('昵称长度必须在两到六个个汉字,六到十八个英文之间');
}

# after
$length = strlen($nickname);
if ($length < 6 || $length > 18) {
	return $this->setError('昵称长度必须在两到六个个汉字,六到十八个英文之间');
}
```

## 2. divide by zero 的问题

优化点:

-   totalCount 是 数值
-   需要考虑除数为 0 的情况

```
# bad
$totalCount  = (clone $SDb)->count();
$overNewRate = (new Number($overCount))->divide((new Number($totalCount)));
$overNewRate = round($overNewRate->multiply(100)->getValue(), 2);

# good
try {
	$overNewRate = (new Number($overCount))->divide($totalCount);
	$overNewRate = round($overNewRate->multiply(100)->getValue(), 2);
} catch (\Exception $e) {
	$overNewRate = 0;
}
```

## 3. 使用 (string) 替代 strval

> Analyzes if PHP4 functions (intval, floatval, doubleval, strval) are used for type casting and generates hints to use PHP5's type casting construction (i.e. '(type) parameter').

```php
// bad
$input = strval($_POST['name']);

// good
$input = (string) $_POST['name'];
```

## 4. 合并 isset 的多重判定

> The inspection is advising when multiple 'isset(...)' statements can be merged into one

```php
// bad
if (isset($dir['origin']) && isset($dir['doc'])) {
   // ...
}

// good
if (isset($dir['origin'], $dir['doc'])) {
   // ...
}
```

## 5. If 多条件语法的合并

```php
// bad
if ($profile->chid_status === UserProfile::STATUS_FAIL) {
	if ($profile->chid_failed_at) {
		// ...
	}
}

// good
if ($profile->chid_status === UserProfile::STATUS_FAIL && $profile->chid_failed_at) {
    // ...
}
```

## 6. 引号的使用

> 对于单纯字符串使用 `'`, 对于变量和文本进行混排的, 使用 `"`

```php
// bad
$domain     = "domain.com";
$random     = str_random(7);
$randomMail = 'prefix_'.$random.'@'.$domain;

// good
$domain     = 'domain.com';
$random     = str_random(7);
$randomMail = "prefix_{$random}@{$domain}";
```

```
    0 => '',
```

## 7. empty 使用的时机

```php
// bad
// 来源于订单取消过期
$orders = OrderHunter::
    // ...
    ->where('created_at', '<', Carbon::now()->subMinutes($minutes))
    ->get();
if (!empty($orders)) {
	$Play = new Play();
	$orders->each(function (OrderHunter $item) use ($Play) {
		// ...
	});
}

// good
// 因为这里返回的是一个对象. empty 对象会返回的是 true, 当然这种对于实现了 countable 的来说又是另外一种概念
// todo 这里也需要测试
if ($orders->count()) {
	$Play = new Play();
	$orders->each(function (OrderHunter $item) use ($Play) {
		// ...
	});
}
```

## 8. 数组箭头后不允许换行

```
   'hunter' => [
  		0 => 'lol',
  	],
```

## 9. If 后的 ; 需要去掉

```
if (!$info = $Order->info('003200330087', 62, 1)) {
 	\Log::error($Order->getError());
}
```

## 10. 参数等号对齐

```
$hunter_type    = OrderHunter::ORDER_NORMAL;
$subtotal_price = (new Number($price_id ?? 0))->multiply($num)->getValue();
```

## 11. 命名空间和 php 开始 `<?php ` 存在于一行内

```
 <?php namespace Order\Tests\Configuration;
```

## 12. 删除文件尾部的 `?>`

php 文件的典型标记是以 `<?php` 开头， `?>` 结尾。但是在 Zend Framework 中却不推荐在 php 文件末尾加 `?>`
因为在`<?php ?>`之外的任何字符都会被输出到网页上，而之中的却不会。所以在末尾不加 `?>` 可以预防 php 文件被恶意加入字符输出到网页。

## 13. 数组的键名

在 PHP 中, 使用不经单引号包含的字符串作为数组键名是合法的, 但是我们不希望如此 -- 键名应该总是由单引号包含而避免引起混淆. 注意这是使用一个字符串, 而不是使用变量做键名的情况

```
// 错误
$foo = $assoc_array[blah];
// 正确
$foo = $assoc_array['blah'];
// 错误
$foo = $assoc_array["$var"];
// 正确
$foo = $assoc_array[$var];
```

避免在大数组上使用 in_array

避免在大的数组上使用 `in_array()`, 同时避免在循环中对包含 200 个以上元素的数组使用这个函数. `in_array()` 会非常消耗资源. 对于小的数组这种影响可能很小, 但是在一个循环中检查大数组可能会需要好几秒钟的时间. 如果您确实需要这个功能, 请使用 isset()来查找数组元素. 实际上是使用键名来查询键值. 调用 `isset($array[$var])` 会比 `in_array($var, array_keys($array))` 要快得多.

SQL 脚本格式

SQL 代码常常会变得很长, 如果不作一定的格式规范, 将很难读懂. SQL 代码一般按照以下的格式书写, 以关键字换行:

```php
$sql = 'SELECT *
<-one tab->FROM ' . SOME_TABLE . '
<-one tab->WHERE a = 1
<-two  tabs->AND (b = 2
<-three tabs->OR b = 3)
<-one tab->ORDER BY b';
```

这里是应用了制表符后的例子:

```
$sql = 'SELECT *
    FROM ' . SOME_TABLE . '
    WHERE a = 1
        AND (b = 2
            OR b = 3)
    ORDER BY b';
```

禁止使用单字母开头的变量(无意义的变量)

```
$tKey, $tVal
```

## 14. 使用 `(int) code` 替代 `intval(code)`

```
// deprecated
$is_apply = intval(input('is_apply'));
// succcess
$is_apply = (int) input('is_apply');
```

## 15. 去除多余的 `else`

```
// deprecated
$id = (int) input('id');
if ($id) {
	$item = PluginHelp::find($id, ['id', 'help_title as title', 'updated_at', 'content']);
	return Resp::web(Resp::SUCCESS, '获取文章内容成功', $item);
}
else {
	return Resp::web(Resp::SUCCESS, '列表为空');
}

// suggest
$id = (int) input('id');
if ($id) {
	$item = PluginHelp::find($id, ['id', 'help_title as title', 'updated_at', 'content']);
	return Resp::web(Resp::SUCCESS, '获取文章内容成功', $item);
}
return Resp::web(Resp::SUCCESS, '列表为空');
```

## 16. 对象和数组的不同

```
// Json 中对象返回 {}
// Json 中数组返回 []
// PHP 中空数组和对象均为 []
```

## 17. 使用临时变量以避免复合条件语句

```php
# good
$itemValid = $itemMoney > 800 && $level > 3 && $valid > 0;
if($itemValid && isReady()) {
    display();
}

# bad
if($itemMoney > 800 && $level > 3 && $valid > 0 && isReady()) {
    display();
}
```

## 18. Switches 语句应该套用以下格式,并且每个分支必须注释清楚

```
switch (condition) {
    case 0 :
    // show something
        break;
    default :
    // this is some code
        break;
}
```

## 19. 数字变量转换

```php
// bad
$ids = !is_array($id) ? [$id] : $id;

// good
$ids = (array) $id;
```

## 20. 不要使用硬编码

```php
// 写常量是属于硬编码, 这里不要使用硬编码
// Bad
if ($owner->pub_is_good != 1) {
    return $this->setError('您并非优质商人, 无法发布优质订单');
}

// Good
if ($owner->pub_is_good != Front::PUB_GOOD) {
    return $this->setError('您并非优质商人, 无法发布优质订单');
}
```

```
// bad
$db->query("Update xd_company ...");

// good
$db->query("Update {$db_prefix}company ...");
```

## 21. 文件命名导致的冲突

```php
// 文件名称
// TransToaccountTransfer.php
// 这里会出现文件类不存在的情况
// Found by Lipengtao

// 类名称
class TransToAccountTransfer {
    ...
}
```

## 22. 不正确的 Switch 使用

```php
// bad : 目标值和匹配值不同
switch ($win_dot) {    // 0
case ($win_dot == 0):  // true
    $result = $one_number->multiply($coefficient)->getValue();
    break;
case ($win_dot >= 1 && $win_dot < 100):  // false
    $dis_price = $one_number->multiply($this->discount($win_dot))->multiply($coefficient)->getValue();
    $result    = $one_number->subtract($dis_price)->multiply($coefficient)->getValue();
    break;
case ($win_dot > 99):
    $result = $up_number->multiply($coefficient)->getValue();
    break;
}

// good : 应该使用 if - else
if ($win_dot == 0):
$result = $one_number->multiply($coefficient)->getValue();
elseif ($win_dot >= 1 && $win_dot < 100):
$dis_price = $one_number->multiply($this->discount($win_dot))->multiply($coefficient)->getValue();
$result    = $one_number->subtract($dis_price)->multiply($coefficient)->getValue();
else ($win_dot > 99):
$result = $up_number->multiply($coefficient)->getValue();
endif
```

## 23. 负数的写法

负数使用 ‘-‘ 来进行拼凑感觉会比较容易出问题

```php
# bad : 这里是减去的总金额
$price = '-' . $order->total_price;

# good : 这里是我认为标准的写法
$price = (new Number($order->total_price))->negate()->getValue();
```

## 24. 注意 数组 + 和 array_merge 的不同

两个数组相加 如果前面的数组和后面数组 key 相同,前面的 key 值会覆盖后面的 key 值,array_merge() 后面的数组相同的 key 会覆盖前面的

## 25. 检测存在数据, 先进行检测, 然后再检测数据的值

```php
// 修复前 : 发放会员折扣券
$setting = sys_setting(DiscountCoupon::settingKey());
if ($setting['week'] && $setting['send_at'] && isset($setting['week'], $setting['send_at'])) {
    ......
}

// 修复后, 先检测是否设定, 然后再检测值
$setting = sys_setting(DiscountCoupon::settingKey());
if (isset($setting['week'], $setting['send_at']) && $setting['week'] && $setting['send_at']) {
    ......
}
```

## 26. 数据库的 clone

```
// clone
 $Db = OrderUserCoupon::where('account_id', $account_id)
 	->where('status', OrderUserCoupon::STATUS_UNUSED)
 	->where('start_at', '<=', Carbon::now()->toDateString());
 if (!(clone $Db)->exists()) {
 	return $this->setError('暂无可用优惠券');
 }
```

## 27. 同一个函数中存在多个不同类型的变量采用匈牙利命名法

```
// 匈牙利命名法
$arrCoupon = $coupon->toArray();
$objCoupon = $coupon;
```

## 28. 空数组约束

```
// 空数组
$array = null;
$array = (array) $array;
```

## 29. 注释的写法

需要支持代码提示

```php
/**
 * 系统推荐优惠券
 * @param array|OrderUserCoupon[] $coupons 可用优惠券列表
 * @param float                   $price   订单价格
 * @return array|mixed
 */
```

## 30. 三元运算符的简写[?:/??]

> Using null coalescing operator in PHP 7 simplifies code structure.

```php
// bad
Form::model(isset($data['params']) ? $data['params'] : null)

// good
Form::model($data['params'] ?? null)
```

下面这种情况使用与 `value` 已经定义的情况

```php
// bad
$output = $value ? $value : 'No value set.';

// good
$output = $value ?: 'No value set.';
```
