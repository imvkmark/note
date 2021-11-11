# PHPUnit简介以及如何在项目中使用
官方文档：[https://phpunit.readthedocs.io/zh_CN/latest/](https://phpunit.readthedocs.io/zh_CN/latest/)

### 单元测试

单元测试是分别对程式的单元，例如：函式 (function)、方法 (method)，进行测试，测试时会判断单元的执行结果是不是有符合预期

### 单元测试能协助开发者什么？

1.确保单元的执行结果   

2.尽早发现程式中的错误

3.修改程式，更加有信心

### PHPUnit简介

PHPUnit 是 PHP 程式语言中最常见的单元测试 (unit testing) 框架，PHPUnit 是参考 xUnit 架构利用 PHP 实作出来。

### 安装PHPUnit

```
composer require --dev phpunit/phpunit ^7
```

### 配置autoload

添加下面的代码到composer.json PackageName是项目的名称，src是包含PHP class文件的文件夹地址，项目根目录下的子文件夹。

```
...
    "autoload": {
       "psr-4": {
            "PackageName\\": "src/",
            "PackageName\\Tests": "tests/"
        }
     },
...
```

### 设置PHPUnit

在phpstorm中 `Languages & Frameworks >PHP >Test Frameworks` 设置PHPUnit library 为 Use Composer autoloader

### 编写PHPUnit测试

1.针对类Class的测试写在类"ClassTest"中

2.ClassTest继承自\Poppy\Framework\Application\TestCase::class

3.测试都是命名为 `test*` 的公用方法

也可以在方法的文档注释块(docblock)中使用 `@test` 标注将其标记为测试方法

4.在测试方法内，类似于"assertEquals()"这样的断言方法用来对实际值和预期值的匹配做出断言

Example  用PHPUnit测试数组操作

```
<?php
use System\Tests\Base\SystemTestCase;

class StackTest extends SystemTestCase
{
    public function testPushAndPop()
    {
        $stack = [];
        $this->assertEquals(0, count($stack));

        array_push($stack, 'foo');
        $this->assertEquals('foo', $stack[count($stack)-1]);
        $this->assertEquals(1, count($stack));

        $this->assertEquals('foo', array_pop($stack));
        $this->assertEquals(0, count($stack));
    }
}
?>
```

### PHPUnit 断言

laravel中除了标准的 PHPUnit 断言(`assertEquals()`, `assertContains()`, `assertInstanceOf()`, ...更多断言请看[https://phpunit.readthedocs.io/zh_CN/latest/assertions.html?highlight=assertTrue#](https://phpunit.readthedocs.io/zh_CN/latest/assertions.html?highlight=assertTrue#))之外, 还存在很多允许测试 web 应用的检测项目

`assertPageLoaded($uri, $message = null)`

检测最近的页面是否被加载, 如果不存在 url / message 时候会报错

`assertResponseOk()`

是否页面相应OK

`assertReponseStatus($code)`

是否响应指定的code

`assertViewHas($key, $value = null)`

视图中是否存在指定的数据

`assertViewHasAll($bindings)`

视图中是否存在指定的一系列数据

`assertViewMissing($key)`

指定视图中是否不存在这个数据

`assertRedirectedTo($uri, $with = [])`

检测是否重定向到指定的uri

`assertRedirectedToRoute($name, $parameters = [], $with = [])`

是否客户端重定向到指定的路由

`assertRedirectedToAction($name, $parameters = [], $with = [])`

是否重定向到 action

`assertSessionHas($key, $value = null)`

session 中是否存在 key/ value

`assertSessionHasAll($bindings)`

session 中是否存在指定的 kv

`assertSessionHasErrors($bindings = [])`

session 是否存在错误

`assertHasOldInput()`

session 中是否存在以前的数据

### 在当前项目中如何使用

需要在composer.json中添加

```
"autoload" : {
		"classmap" : [
		],
		"psr-4" : {
			"System\\" : "modules/system/src/",
			"System\\Tests\\" : "modules/system/tests/",
			"User\\Tests\\" : "modules/user/tests/",
			"User\\" : "modules/user/src/",
			"Site\\Tests\\" : "modules/site/tests/",
			"Site\\" : "modules/site/src/"
		}
	},
```

并且需要在psr-4文件中添加相关映射

```
'System\\' => array($baseDir . '/modules/system/src'),
'System\\Tests' => array($baseDir . '/modules/system/tests'),
'User\\'=>array($baseDir.'/modules/user/src'),
'User\\Tests\\'=>array($baseDir.'/modules/user/tests'),
'Site\\'=>array($baseDir.'/modules/site/src'),
'Site\\Tests'=>array($baseDir.'/modules/site/tests'),
```

src和tests文件位于各个modules下,例如User模块的测试就位于Modules/User下

继承关系：下面的类继承上面的类

```
TestCase::class;
\Illuminate\Foundation\Testing\TestCase::class;
\Poppy\Framework\Application\TestCase::class;
SystemTestCase::class;
```

项目中的测试文件继承poppy框架测试文件;

poppy测试文件继承laravel测试文件;

laravel测试文件继承PHPUnit测试文件；
