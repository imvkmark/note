# Laravel 6.0 升级到 6.x 记录

## composer 2.0

> composer 2.0 版本和 laravel 6.0 版本不兼容

这个是 laravel 6.0 lts 版本的问题, 由于更改了加载方式, 这个方式在 6.0 版本中没有被修复导致的问题, 可以查看 : [https://github.com/composer/composer/issues/9340](https://github.com/composer/composer/issues/9340)

对于 laravel 版本的支持程度可以查看

![](https://file.wulicode.com/note/2021/11-11/14-50-04315.png)

这里的解决问题的办法是强制使用 composer 1.x 版本

```
$ composer self-update --1
```

## 相关组件

为了使用 composer 2.x, 我把 laravel 6.0 升级到 6.x , 因为 laravel 自 6.18 之后才支持 composer 2, 同时升级的组件还有

```
    "require": {
        tucker-eric/eloquentfilter : "~2" => "3"
    },
    "require-dev": {
        "itsgoingd/clockwork": "~4.0"  => "~5.0"
        "barryvdh/laravel-ide-helper": "~2.7" => "~2.*"
        "doctrine/dbal": "^2.5" => "^3"
    },
```

## Method Monolog\Logger::addDebug() does not exist

重新命名一下之前的 `ide-helper.php` 重新发布一下配置

```
$ php artisan vendor:publish --provider="Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider" --tag=config
```

移除 Log 部分

```diff
	'magic' => [
-		'Log' => [
-			'debug'     => 'Monolog\Logger::addDebug',
-			'info'      => 'Monolog\Logger::addInfo',
-			'notice'    => 'Monolog\Logger::addNotice',
-			'warning'   => 'Monolog\Logger::addWarning',
-			'error'     => 'Monolog\Logger::addError',
-			'critical'  => 'Monolog\Logger::addCritical',
-			'alert'     => 'Monolog\Logger::addAlert',
-			'emergency' => 'Monolog\Logger::addEmergency',
-		],
	],
```
