# Laravel 6.0 升级到 6.x 记录

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
