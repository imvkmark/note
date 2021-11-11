# Laravel - 解析 - 加载机制

公共文件入口

```
% 入口: public/index.php
---
bootstrap/autoload.php
自动加载机制
    vendor/autoload.php
    加载 composer 扩展包的自动加载机制
    storage/framework/compiled.php
    如果存在编译文件则加载编译文件

bootstrap/app.php
	创建 `$app` = new Illuminate\Foundation\Application
		注册基础绑定 registerBaseBindings
			实例化 app
			实例化 Illuminate\Container\Container
		注册基础服务绑定	registerBaseServiceProviders
			注册 事件绑定
			注册 路由绑定
		注册核心容器 alias 关联	registerCoreContainerAliases
	App\Http\Kernel
	App\Console\Kernel
	App\Exceptions\Handler

kernel 的处理
- 创建 `kernel`
- 创建 `response`
- 发出 `response`
- 终止 `kernel`
```
