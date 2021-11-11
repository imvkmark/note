# Forms & HTML 组件 (laravelcollective/html)

原文地址: [Laravel Collective Forms & HTML](http://laravelcollective.com/docs/5.1/html)

## 安装

首先通过 composer 来安装这个 包, 编辑项目的 `composer.json` 文件. 在 `require` 部分 加入 `laravelcollective/html` :

```
"require": {
    "laravelcollective/html": "5.1.*"
}
```

接下来从命令行更新 composer  :

```
composer update -vvv
```

接下来添加 provider 到 `config/app.php` 的 `providers` 数组:

```
'providers' => [
    // ...
    Collective\Html\HtmlServiceProvider::class,
    // ...
],
```

最后 添加两个类链接到 `config/app.php` 的 `aliases` 数组:

```
'aliases' => [
    // ...
    'Form' => Collective\Html\FormFacade::class,
    'Html' => Collective\Html\HtmlFacade::class,
    // ...
],
```

##创建表单

#### 打开表单

```
{!! Form::open(array('url' => 'foo/bar')) !!}
    //
{!! Form::close() !!}
```

默认是 `POST` 方法, 你可以随意指定其他接收方法

```
echo Form::open(array('url' => 'foo/bar', 'method' => 'put'))
```

> **Note:** HTML 表单仅仅支持 `POST` 和 `GET`方法, `PUT` 和`DELETE` 方法将会使用一个隐藏域`_method` 添加到 form 表单中来欺骗实现

你可以使用指定的`控制器@动作` 或者命名的路由来创建表单

```
echo Form::open(array('route' => 'route.name'))

echo Form::open(array('action' => 'Controller@method'))
```

同样也可以向路由中传入参数.

```
echo Form::open(array('route' => array('route.name', $user->id)))

echo Form::open(array('action' => array('Controller@method', $user->id)))
```

如果你的表单需要支持文件上传, 在数组中添加 一个 `files` 配置项.

```
echo Form::open(array('url' => 'foo/bar', 'files' => true))
```

## CSRF 保护

#### 向表单中添加 CSRF Token

Laravel 提供了一个简单的方法来防止你的应用遭受跨站攻击. 首先会在你的 session 中生成一个随机的 token, 如果你使用 `Form::open` 方法并且提交方法是 `POST`, `PUT`或者是 `DELETE`,  CSRF token 将会自动的添加到你的 form 表单的隐藏域中. 换种方法 如果你像自己生成  CSRF token 字段, 你可以使用 `token` 方法.

```
echo Form::token();
```

#### 给路由添加  CSRF 过滤器

```
Route::post('profile', array('before' => 'csrf', function()
{
    //
}));
```

## 表单模型绑定

#### 给表单绑定模型

通常, 你需要想表单中填入来自数据库模型的数据. 想这样做你可以使用 `Form::model` 方法.

```
echo Form::model($user, array('route' => array('user.update', $user->id)))
```

现在当你自动生成一个表单元素, 例如文本输入框. `Model` 的值将会自动匹配并且填写到相关的表单字段中.例如. 一个文本输入框的 name 是 `email`这个字段将会用 用户 `Model` 的 `email` 属性来填充并且设置. 当然, 还有其他用法. 如果一个字段在 session 闪存数据中 也存在这个名字, 这个将会覆盖模型中的这个字段值. 优先级是这个样子的:

1. Session Flash Data (Old Input) [session 闪存 / 老的输入数据 ]
2. Explicitly Passed Value [输入值]
3. Model Attribute Data [模型属性值]

这个可以让你快速的使用模型数据来创建表单, 也能轻松的在服务器校验错误之后重新发布表单.

> **Note:** 使用 `Form::model`方法的时候一定要使用 `Form::close`来关闭表单!

## 标签

#### 生成标签元素

```
echo Form::label('email', 'E-Mail Address');
```

#### 指定额外的 html 属性

```
echo Form::label('email', 'E-Mail Address', array('class' => 'awesome'));
```

> **Note:** 在创建了一个标签之后, 如果有创建的表单元素的 name 值和 label 的 name 值相符的话, 将会自动在 表单元素 中自动匹配增加 id 属性. id 的值就是 label 的 name 值.

## 文本框, 文本域, 密码 & 隐藏域

#### 创建文本框

```
echo Form::text('username');
```

#### 指定默认值

```
echo Form::text('email', 'example@gmail.com');
```

> **Note:**  *hidden* 和 _textarea_ 方法的参数和 text 相同.

#### 生成密码输入框

```
echo Form::password('password', array('class' => 'awesome'));
```

#### 生成其他输入框

```
echo Form::email($name, $value = null, $attributes = array());
echo Form::file($name, $attributes = array());
```

## 多选和单选

#### 生成单选和多选

```
echo Form::checkbox('name', 'value');
echo Form::radio('name', 'value');
```

#### 生成带有选中状态的表单元素

```
echo Form::checkbox('name', 'value', true);
echo Form::radio('name', 'value', true);
```

## 数字

#### 生成数字输入框

```
echo Form::number('name', 'value');
```

## 日期

#### 生成日期输入框

```
echo Form::date('name', \Carbon\Carbon::now());
```

## 文件选择器

#### 生成文件选择器

```
echo Form::file('image');
```

> **Note:** 表单中必须设置 `files` 参数的值为 `true`

## 下拉列表

#### 生成下拉列表

```
echo Form::select('size', array('L' => 'Large', 'S' => 'Small'));
```

#### 生成有默认值的下拉列表

```
echo Form::select('size', array('L' => 'Large', 'S' => 'Small'), 'S');
```

#### 生成空占位符的 下拉列表

这回创建一个没有任何值的 `<option>` 元素作为下拉列表的第一个选择值.

```
echo Form::select('size', array('L' => 'Large', 'S' => 'Small'), null, ['placeholder' => 'Pick a size...']);
```

#### 生成分组的列表

```
echo Form::select('animal', array(
        'Cats' => array('leopard' => 'Leopard'),
        'Dogs' => array('spaniel' => 'Spaniel'),
    ));
```

#### 生成范围选择值的下拉列表

```
echo Form::selectRange('number', 10, 20);
```

#### 生成有月份名称的选择值

```
echo Form::selectMonth('month');
```

## 按钮

#### 生成提交按钮

```
echo Form::submit('Click Me!');
```

> **Note:** 想创建一个按钮元素? 试用 _button_ 方法. 他和 _submit_ 方法有相同的参数.

## 自定义表单元素

#### 注册一个新的表单元素

用来很方便的来自定义一个表单元素的方法叫做 `macros` . 合理是怎样使用它. 首先简单的使用名称和闭包函数来注册一个 :

```
Form::macro('myField', function()
{
    return '<input type="awesome">';
});
```

现在你可以使用自定义的名字来调用这个 `macro`

#### 调用自定义的 Form Macro

```
echo Form::myField();
```

## 生成 URL

#### link_to

根据给定的 URL 生成 html 链接

```
echo link_to('foo/bar', $title = null, $attributes = array(), $secure = null);
```

#### link_to_asset

生成一个链接到指定资源的 html

```
echo link_to_asset('foo/bar.zip', $title = null, $attributes = array(), $secure = null);
```

#### link_to_route

生成一个根据给定路由的 html 链接

```
echo link_to_route('route.name', $title = null, $parameters = array(), $attributes = array());
```

#### link_to_action

根据指定的控制器/方法来生成 html 链接

```
echo link_to_action('HomeController@getIndex', $title = null, $parameters = array(), $attributes = array());
```
