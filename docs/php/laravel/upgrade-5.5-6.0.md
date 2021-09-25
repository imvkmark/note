# Laravel 5.5 升级到 6.0 记录

## 1. 可以选择缓存使用 phpredis/predis

phpredis : 指的是使用 pecl 安装的 php 扩展 redis

predis   : 指的是 github 上的 predis/predis 的包

Laravel 推荐使用 `phpredis` 来代替 `predis`。原因是 predis 包很长时间没有更新

所以要记得先安装 `phpredis`, 然后在 `config/app.php` 中去掉 `Redis` 别名

**Mac 安装**

```sh
# 这里需要将当前版本设置为主版本才可以, 如果不是主版本则安装会太费劲
$ brew link --force php@{version}
$ pecl install igbinary
$ pecl install redis
$ brew services restart php@7.2
```

**其他平台**

应该是直接安装即可(未测试)

项目中在考虑兼容的情况下, 使用 predis, 暂时不启用 phpredis.

## 2. Unable to create configured logger. Using emergency logger

在 5.6 之后已经将配置文件独立 [config/logging.php](https://github.com/laravel/laravel/blob/master/config/logging.php), 将这个文件放置到指定目录, 然后 `app.php` 移除日志的配置 `Logging Configuration`

## 3. Call to undefined method Illuminate\Events\Dispatcher::fire()

在 (5.8 升级指南)([https://laravel.com/docs/5.8/upgrade](https://laravel.com/docs/5.8/upgrade)) 指出,

_Likelihood Of Impact: Low_

```
deprecated and removed
Events The fire Method
```

使用 dispatch 方法替代 `You should use the dispatch method instead.`

## 4. Class 'Illuminate\Support\Facades\Input' not found

使用 Request 替代 Input

`Input` no longer exists. Either use the `Request` facade or alias that instead of `Input`.

## 5. str_contains 等 helper 函数

这些函数均需要替换成静态函数方法 `Str::contains`

下面是 辅助函数列表

[5.1 辅助函数列表](https://learnku.com/docs/laravel/5.1/helpers/1068)
