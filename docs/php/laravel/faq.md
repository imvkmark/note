# Faq

## Laravel 错误 Class log does not exist ...

> Fatal error: Uncaught exception 'ReflectionException' with message 'Class log does not exist' in /Users/freek/dev/laravel/vendor/laravel/framework/src/Illuminate/Container/Container.php:776

出现这种问题的原因是不能够加载 log 方法. 原因是在加载的时候会加载 config 文件的数据, 而 config 文件中的配置是批量加载的, 所以在自己加载的时候 config 文件的写法不支持自定义的函数变量/ 常量/ 自定义方法.

所以从配置文件入手, 删除未加载的配置文件, 删除未导入包的配置文件.

这种问题一般出现在 复制项目, 并且删除了包的情况下.

## 参考文章:

-   [Class log does not exist](https://laracasts.com/discuss/channels/general-discussion/class-log-does-not-exist)
