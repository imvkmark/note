# [译] dotenv - PHP 版本的 .env
原文地址:[PHP dotenv](https://github.com/vlucas/phpdotenv)

通过 `.env` 加载环境变量并且能够自动的通过 `getenv()`, `$_ENV` 和 `$_SERVER` 自动调用.

这是一个PHP版本 [Ruby dotenv](https://github.com/bkeepers/dotenv).

## 为什么是 .env?

**你不能在代码中存储任何的 敏感/账号 数据**. 存储 [在环境中存储配置](http://12factor.net/zh_cn/config) 是 [12-factors](http://12factor.net/zh_cn/)的一项规则. 在部署中可能变化的所有的内容 – 诸如数据库认证或者第三方服务的认证应该从代码中剥离出来.也就是环境变量的概念.

广义上来说, 一个 `.env` 文件是加载自定义配置的一个简单的方法, 这样你的应用不需要修改 `.htaccess` 文件或者 `Apache/nginx` 虚拟主机. 这意味着你不需要编辑项目之外的任何文件,并且所有的环境变量都配置完整了, 无论你运行在 Apache, Nginx, CLI 还是 PHP 5.4 上内建的web服务器上. 这是一个所知的设置环境变量最简单的方法, 你会喜欢上它的.

- 无需在 `Apache` 或者 `Nginx`上额外配置虚拟主机配置
- 无需在 `.htaccess` 中添加 `php_value` 值
- 方便移植和共享 ENV 环境变量值
- 兼容服务器内置的服务器和 `CLI` 运行器

## 使用 composer 安装

```shell
curl -s http://getcomposer.org/installer | php
php composer.phar require vlucas/phpdotenv
```

## 使用方法

---

`.env` 文件通常不包含在版本控制内, 它可能包含敏感的 `API Key` 或者 `密码`. 所有需要环境变量定义(不敏感的定义)的项目都需要创建一个 `.env.example` 文件, 这个环境变量包含他们自己定义的环境变量或者联合开发包含的环境变量. 项目合作开发者可以独立的复制 `.env.example` 并且重命名为 `.env` , 并且修改为正确的本地环境配置, 存储密码key或者提供他们必要的值. 在这个使用方法中 `.env` 文件应该添加到 `.gitignore` 文件中并且永远不会被项目的合作者签入/签出. 这个方法确保里边没有敏感的 `API Key` 或者 `密码`在版本控制中出现从而减少了安全风险. 并且开发环境中的配置永远不会告知合作开发者.

添加配置到根目录下的 `.env` 文件, **确保 `.env` 文件添加到 `.gitignore` 从而不会签入到 `CVS` **

```shell
S3_BUCKET=dotenv
SECRET_KEY=souper_seekret_key
```

现在创建一个 `.env.example` 文件, 并且签入到项目中. 这里配置和环境变量你需要设置的可以留空或者设置一些无关紧要的数据. 这个方法告知人们这些数据是必须的, 但是不会提供真正环境中的数据.

```shell
S3_BUCKET=devbucket
SECRET_KEY=abc123
```

你可以使用以下一行代码加载应用中的 `.env` 文件:

```php
Dotenv::load(__DIR__);
```

所有定义的变量都可以通过 `getenv` 方法访问到, 并且也可以使用超全局变量`$_ENV` 和 `$_SERVER`访问到.

```php
$s3_bucket = getenv('S3_BUCKET');
$s3_bucket = $_ENV['S3_BUCKET'];
$s3_bucket = $_SERVER['S3_BUCKET'];
```

你同样可以使用框架的 Request 类来访问这些变量(如果你使用框架)

```php
$s3_bucket = $request->env('S3_BUCKET');
$s3_bucket = $request->getEnv('S3_BUCKET');
$s3_bucket = $request->server->get('S3_BUCKET');
```

### 嵌入变量

在一个变量中嵌入一个环境变量是可以的, 这样对于减少重复很有用.

使用 `{$…}` 来包裹环境变量 e.g.

```shell
BASE_DIR=/var/webroot/project-root
CACHE_DIR={$BASE_DIR}/cache
TMP_DIR={$BASE_DIR}/tmp
```

### 不可变

默认来说, Dotenv 认为环境变量是不变的. 这就是说一旦设置就不能变更.

你可以用以下函数将环境变量设置为可变的

```php
Dotenv::makeMutable();
```

… 同样你也可以使用以下函数让其不再可变

```php
Dotenv::makeImmutable();
```

## 要求变量必须设置

使用 Dotenv, 你可以指定这个 `ENV` 变量必须设置, 如没有设置则会抛出异常. 这对于人们是非常有用的, 如果程序缺少这个变量就不能运行.

使用以下语法:

```php
Dotenv::required('DATABASE_DSN');
```

或者数组来定义:

```php
Dotenv::required(array('DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASS'));
```

如果 ENV 变量缺少, Dotenv 将抛出一个 `RuntimeException` :

```
Required environment variable missing or value not allowed: 'DB_USER', 'DB_PASS'
```

### 允许的值

你可能看到了上边的异常信息, 你可以设定一个可能范围值, 让你的环境变量遵守这个规则

```php
Dotenv::required('SESSION_STORE', array('Filesystem', 'Memcached'));
```

同样的, 如果环境变量不在这个列表里, 你会收到一个相似的异常信息:

```
Required environment variable missing or value not allowed: 'SESSION_STORE'
```

### 注释

可以使用 `#` 来注释字符. E.g.

```shell
# this is a comment
VAR="value" # comment
VAR=value # comment
```

## 使用注释

当一个开发者克隆你的代码库. 他们会收到一个额外的手册 **一次性步骤** 来手动的复制 `.env.example` 并且重命名为 `.env` 并且追加上他们自己的值(或者从其他开发者哪里获取到其他敏感值).

phpdotenv 被用来建立开发者环境但是不应该用在生产环境下. 在生产环境下, 需要设置真实的变量而不必每次使用请求的时候都使用 `.env` 文件进行重载.

这个可以通过自动化部署工具来实现, 例如: Vagrant, chef, Puppet, 或者手动的通过云主机来实现, 例如: Pagodabox, Heroku.

## 贡献

1. Fork it
2. 创建分支(`git checkout -b my-new-feature`)
3. 改动
4. 运行测试, 如果需要, 添加新配置 (`phpunit`)
5. 提交 (`git commit -am 'Added some feature'`)
6. 推送到分支 (`git push origin my-new-feature`)
7. 创建新的拉取请求
