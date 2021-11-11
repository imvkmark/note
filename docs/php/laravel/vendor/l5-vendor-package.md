# [转] Laravel5 插件包 vendor 开发


原文地址: [laravel5.2插件包vendor开发](https://phperzh.com/articles/2275)


#### 准备工作

```
1)拥有git账户密码,熟悉git常用命令
2)拥有packagist账户密码
3)本地安装了composer
4)必须laravel5.2版本且有一定的基础,了解服务提供者/门面概念
```

* * *

#### 1)新建文件夹

在新建的laravel项目中建立如下目录:

```
packages/yuansir/toastr/src
```

packages 目录和 app 目录同级。
我们开发包的代码都放在这个src目录中,yuansir和toastr完全自定义。

* * *

#### 2)修改项目根目录的composer.json

修改项目的composer.json,设定PSR-4命名空间:

```
"autoload": {
    "classmap": [
        "database"
    ],
    "psr-4": {
        "App\\": "app/",
        "Yuansir\\Toastr\\": "packages/yuansir/toastr/src/"
    }
},
```

* * *

#### 3)重新生成autoload文件

根目录下cmd执行

```
composer dump-autoload
```

* * *

#### 4)扩展包composer.json

cmd切换到插件目录:packages/yuansir/toastr 执行命令,根据提示填写

```
composer init
```

填写完基本信息之后 在packages/geekghc/laraflash目录下就会生成一个composer.json文件

* * *

#### 5)创建服务提供者Service Provider

```
php artisan make:provider ToastrServiceProvider
```

将生成的app/Providers/ToastrServiceProvider.php文件移动到我们的packages/yuansir/toastr/src 目录下面，并注册ToastrServiceProvider到config/app.php 的providers 中。

```
'providers' => [

    /*
     * Laravel Framework Service Providers...
     */
     ......

    /*
     * Application Service Providers...
     */
     ......
    Yuansir\Toastr\ToastrServiceProvider::class,
],
```

* * *

#### 6)创建配置文件

新建packages/yuansir/toastr/src/config/toastr.php 来保存toastr.js的options

```
<?php
return [
 'options' => []
];
```

* * *

#### 7)创建自定义类

新建Toastr类，来实现toastr 的info，success，error，warning的相关实现，代码还是很简单的，packages/yuansir/toastr/src/Toastr.php:

```
<?php namespace Yuansir\Toastr;
use Illuminate\Session\SessionManager;
use Illuminate\Config\Repository;
class Toastr
{
/**
 * @var SessionManager
 */
protected $session;

/**
 * @var Repository
 */
protected $config;

/**
 * @var array
 */
protected $notifications = [];

/**
 * Toastr constructor.
 * @param SessionManager $session
 * @param Repository $config
 */
public function __construct(SessionManager $session, Repository $config)
{
    $this->session = $session;
    $this->config = $config;
}

public function render()
{
    $notifications = $this->session->get('toastr:notifications');

    if(!$notifications) {
        return '';
    }

    foreach ($notifications as $notification) {
        $config = $this->config->get('toastr.options');
        $javascript = '';
        $options = [];
        if($config) {
            $options = array_merge($config, $notification['options']);
        }

        if($options) {
            $javascript = 'toastr.options = ' . json_encode($options) . ';';
        }

        $message = str_replace("'", "\\'", $notification['message']);
        $title = $notification['title'] ? str_replace("'", "\\'", $notification['title']) : null;
        $javascript .= " toastr.{$notification['type']}('$message','$title');";
    }

    return view('Toastr::toastr', compact('javascript'));
}

/**
 * Add notification
 * @param $type
 * @param $message
 * @param null $title
 * @param array $options
 * @return bool
 */
public function add($type, $message, $title = null, $options = [])
{
    $types = ['info', 'warning', 'success', 'error'];
    if(!in_array($type, $types)) {
        return false;
    }

    $this->notifications[] = [
        'type' => $type,
        'title' => $title,
        'message' => $message,
        'options' => $options
    ];
    $this->session->flash('toastr:notifications', $this->notifications);
}

/**
 * Add info notification
 * @param $message
 * @param null $title
 * @param array $options
 */
public function info($message, $title = null, $options = [])
{
    $this->add('info', $message, $title, $options);
}

/**
 * Add warning notification
 * @param $message
 * @param null $title
 * @param array $options
 */
public function warning($message, $title = null, $options = [])
{
    $this->add('warning', $message, $title, $options);
}

/**
 * Add success notification
 * @param $message
 * @param null $title
 * @param array $options
 */
public function success($message, $title = null, $options = [])
{
    $this->add('success', $message, $title, $options);
}

/**
 * Add error notification
 * @param $message
 * @param null $title
 * @param array $options
 */
public function error($message, $title = null, $options = [])
{
    $this->add('error', $message, $title, $options);
}

/**
 * Clear notifications
 */
public function clear()
{
    $this->notifications = [];
}
}
```

* * *

#### 8)创建视图文件

新建 packages/yuansir/toastr/src/views/toastr.blade.php 视图文件：

```
<link href="http://cdn.bootcss.com/toastr.js/latest/css/toastr.min.css" rel="stylesheet">
<script src="http://cdn.bootcss.com/toastr.js/latest/js/toastr.min.js"></script>
<script type="text/javascript">{!! $javascript !!}</script>
```

* * *

#### 9)创建门面Facade

建立Facade,新建packages/yuansir/toastr/src/Facades/Toastr.php 就是引入了tastr插件，输出我们render方法中的$javascript

```
<?php namespace Yuansir\Toastr\Facades;
use Illuminate\Support\Facades\Facade;
class Toastr extends Facade
{
    protected static function getFacadeAccessor()
    {
    return 'toastr';
    }
}
```

* * *

#### 10)修改服务提供者

```
    <?php namespace Yuansir\Toastr;

    use Illuminate\Support\ServiceProvider;

    class ToastrServiceProvider extends ServiceProvider
    {
        /**
         * Bootstrap the application services.
         *
         * @return void
         */
        public function boot()
        {
            $this->loadViewsFrom(__DIR__ . '/views', 'Toastr');

            $this->publishes([
                __DIR__.'/views' => base_path('resources/views/vendor/toastr'),
                __DIR__.'/config/toastr.php' => config_path('toastr.php'),
            ]);
        }

        /**
         * Register the application services.
         *
         * @return void
         */
        public function register()
        {
            $this->app['toastr'] = $this->app->share(function ($app) {
                return new Toastr($app['session'], $app['config']);
            });
        }

        /**
         * Get the services provided by the provider.
         *
         * @return array
         */
        public function provides()
        {
            return ['toastr'];
        }
    }
```

$this->loadViewsFrom( DIR . ‘/views’, ‘Toastr’); 就是表示Toastr命名空间的视图文件冲当前目录的views目录中渲染，所以我们上面用 return view(‘Toastr::toastr’, compact(‘javascript’));

$this->publishes 在执行`php artisan vendor:publish` 时会将对应的目录和文件复制到对应的位置

* * *

#### 11)本地测试

修改 config/app.php 添加服务提供者如下:

```
   'aliases' => [
        ......

        'Toastr' => Yuansir\Toastr\Facades\Toastr::class,

    ],
```

创建测试控制器

```
php artisan make:controller TestController

    <?php

    namespace App\Http\Controllers;

    use App\Http\Requests;
    use Illuminate\Http\Request;
    use Toastr;

    class HomeController extends Controller
    {
        /**
         * Create a new controller instance.
         *
         * @return void
         */
        public function __construct()
        {
            //略
        }

        /**
         * Show the application dashboard.
         *
         * @return \Illuminate\Http\Response
         */
        public function index(Request $request)
        {
            Toastr::error('你好啊','标题');
             dd(session('toastr:notifications'));
            return view('home');
        }
    }
```

到此结束，大功告成，这样一个Laravel 的 composer 包就开发完成了。

修改命名空间到包的composer.json,因为别人安装这个包的时候不可能也去改项目composer.json的PSR-4的autoload，所以我们把PSR-4的命名空间加到这个包的composer.json中去，修改packages/yuansir/toastr/src/composer.json 如下：

```
    {
        "name": "ryan/toastr-for-laravel",
        "description": "toastr.js for laravel5",
        "authors": [
            {
                "name": "Ryan",
                "email": "yuansir@live.cn"
            }
        ],
        "require": {},
        "autoload": {
            "psr-4": {
                "Yuansir\\Toastr\\": "src/"
            }
        }
    }
```

* * *

#### 12)发布到git上

发布到自己git上:例如Github项目 或者码云: git窗口中命令如下

```
    git add .
    git status
    git commit -m 'vendor'
    git push
```

切记创建版本号:

```
    $ git tag -a 1.0.0 -m "version 1.0.0"
    $ git push --tags
```

* * *

#### 13)发布到packagist上供大家composer安装

提交到Packagist,打开到 [packagist.org](https://packagist.org/),登陆后点击右边上角的 **submit**，并填入git的项目地址git@github.com:yuansir/toastr-for-laravel5.git 点击 **check** 就OK了


![](https://file.wulicode.com/note/2021/11-11/15-53-15739.png)


![](https://file.wulicode.com/note/2021/11-11/15-53-28959.png)

* * *

#### 14)别人安装使用

切记翻墙才能加载

```
composer require aaa/bbb (aaa/bbb是你composer.json中的name值)
```


![](https://file.wulicode.com/note/2021/11-11/15-53-50016.png)


```
    Run composer require ryan/toastr-for-laravel
    Add Yuansir\Toastr\ToastrServiceProvider::class, to providers in config/app.php
    Add 'Toastr' => Yuansir\Toastr\Facades\Toastr::class, to aliases in config/app.php
    Run php artisan vendor:publish
```


![](https://file.wulicode.com/note/2021/11-11/15-54-04319.png)


* * *

#### 15)Demo视图

```
    <!DOCTYPE html>
    <html>
        <head>
            <title>Laravel</title>
        </head>
        <body>
        <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
        {!! Toastr::render() !!}
        </body>
    </html>
```

![](https://file.wulicode.com/note/2021/11-11/15-54-24704.png)


* * *

#### 16)Demo

教程的源码和这个包的安装使用方法详见github [https://github.com/yuansir/toastr-for-laravel5](https://github.com/yuansir/toastr-for-laravel5)

* * *

[参考资料]
[Laravel Composer Package 开发简明教程](https://laravel-china.org/articles/1714/laravel-composer-package-development-concise-tutorial)
[Laravel Composer Package 开发简明教程2](http://jellybook.me/articles/2017/01/laravel-composer-package)



