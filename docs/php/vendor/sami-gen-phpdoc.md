# [译] 使用 Sami 生成 PHP 文档

原文地址: [Generating PHP Documentation with Sami](http://www.sitepoint.com/generating-php-documentation-sami/)

为方法, 类, 函数生成文档已经成为了程序员的习惯, 所以需要知道通过源代码生成独立的文档. 本文中我会介绍 [Sami](https://github.com/FriendsOfPHP/Sami), 一款 新的 API 文档生成工具.


![](https://file.wulicode.com/note/2021/11-11/16-24-25653.png)


## 什么是 DocBlock?

DocBlock 是插入到 类, 接口, 方法, 属性顶部的多行注释, 为了阐明这个, 我们看下 Laravel 中的代码片段

```
abstract class Manager
{
  /**
   * The application instance.
   *
   * @var \Illuminate\Foundation\Application
   */
  protected $app;


  /**
   * Create a new manager instance.
   *
   * @param \Illuminate\Foundation\Application $app
   * @return void
   */
  public function __construct($app)
  {
    $this->app = $app;
  }
}
```

DocBlock   开始于  `/**`, 结束于 `*/`, 每行之间使用 `*`.   当定义一个类属性或者方法的时候, 我们会写一个描述或者多个注释来描述这个功能. 在这些示例中 [@param](http://phpdoc.org/docs/latest/references/phpdoc/tags/param.html) 和[@var](http://phpdoc.org/docs/latest/references/phpdoc/tags/var.html) 会被用到. 你可以访问 phpDocumentor 官方网站来熟悉每个标签的用法.

## API 文档生成器

世界上充满许多文档生成器, 但是最好的一个是 phpDocumentor, 我喜欢 [Sami](https://github.com/FriendsOfPHP/Sami)   的主要原因是能够使用 github 上版本控制的文档, 并且可以使用  [Twig](http://twig.sensiolabs.org/) 来生成模版

## 安装 Sami

有两种方式来安装 Sami. 第一个是 [下载](http://get.sensiolabs.org/sami.phar) Phar 压缩包并且使用 php 来运行

```
php sami.phar
```

第二个方式是通过  [Composer](https://getcomposer.org). 你可以运行 `composer require sami/sami:3.0.*` 命令来添加 sami 包到你的项目中.

```
php vendor/sami/sami/sami.php
```

![](https://file.wulicode.com/note/2021/11-11/16-24-49823.png)


## 复制 Laravel’s 文档

本示例中, 我会生成  [Laravel Illuminate package](https://github.com/laravel/framework) 的文档

```
git clone git@github.com:laravel/framework.git docs
```

现在我们的文件结构如下所示:

```
docs/
vendor/
composer.json
```

`update` 命令用来更新文档, 下面是使用方法:

```
php vendor/sami/sami/sami.php update config/config.php
```

`config.php` 文件来描述你的文档结构并且告知如何渲染输出.

## Configuration / 配置

配置文件必须返回 `Sami\Sami` 实例, 他接受 `Symfony\Component\Finder\Finder`   实例和一系列的选择项.

```
// config/config.php

$dir = __DIR__ . '/../docs';

$iterator = Symfony\Component\Finder\Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('build')
    ->exclude('tests')
    ->in($dir);

$options = [
    'theme'                => 'default',
    'title'                => 'Laravel API Documentation',
    'build_dir'            => __DIR__ . '/../build/laravel',
    'cache_dir'            => __DIR__ . '/../cache/laravel',
];

$sami = new Sami\Sami($iterator, $options);

return $sami;
```

`$dir` 变量保存源代码的路径.  `$iterator` 获取所有文件并且选择 `*.php` 并且排除 `build` 和`test` 目录. `$options` 变量里边的内容比较显而易见. `theme`设置成 default , 我们稍后讲如何建立自己的主题. `build_dir` 保存输出文件. `cache_dir` 放置 Twig 缓存, `title` 是生成文档的标题

现在, 打开命令行并运行如下命令

```
php vendor/sami/sami/sami.php update config/config.php
```

![](https://file.wulicode.com/note/topic/sami-gen-doc/sami_update.gif)

命令执行完之后, 你可以运行内置的 PHP 服务器来查看文档, 运行 `php -S localhost:8000 -t build/`, 并且访问  `http://localhost:8000/laravel/` 来查看运行结果

### 使用 Git 版本控制

我提到了使用 Sami 的一个重要原因就是他的版本控制. `options['versions']` 参数接受一个  `Sami\Version\GitVersionCollection` 实例来保存你的 Git 库配置. 如下, 让我们创建  `5.0` 和`4.2`   分支的文档.

```
$dir = __DIR__ . '/../docs/src';

$iterator = Symfony\Component\Finder\Finder::create()
    ->files()
    ->name('*.php')
    ->in($dir);

$versions = Sami\Version\GitVersionCollection::create($dir)
    ->add('5.0', 'Master')
    ->add('4.2', '4.2');


$options = [
    'theme'                => 'default',
    'versions'             => $versions,
    'title'                => 'Laravel API Documentation',
    'build_dir'            => __DIR__ . '/../build/laravel/%version%',
    'cache_dir'            => __DIR__ . '/../cache/laravel/%version%',
];

$sami = new Sami\Sami($iterator, $options);

return $sami;
```

当使用版本的时候, 你的 `build_dir` 和 `cache_dir` 必须包含 `%version%` 标签, `add` 方法的第二个参数是显示在下拉选项中的标签. 你可以使用 `addFromTags`, `setFilter` 方法来过滤版本号

```
php vendor/sami/sami/sami.php update config/config.php
```

现在你生成的文档目录将会包含每个版本的说明文档. 用户也能够选择去阅读他想要的版本.

### 创建主题

现在, 我们仅仅使用了 `default` 主题, 但是 Sami 是可以扩展的, 让我们能够创建自己的主题.

这个  `vendor/sami/sami/Sami/Resources/themes` 文件夹存储了默认主题. 然而你并不能够把你的主题文件放到这里. Sami 提供了一个方法来添加自定义主题

```
// config/config.php

$templates = $sami['template_dirs'];
$templates[] = __DIR__ . '/../themes/';

$sami['template_dirs'] = $templates;
```

现在, 我们在应用程序的根目录存在 `themes` 文件夹, 创建一个新主题, 我们需要创建一个文件夹, 并且在文件夹中放置一个 `manifest.yml`

```
// themes/laravel/manifest.yml

name: laravel
parent: default
```

我们的新主题的文件名是 `laravel` , 他继承于 `default` 主题属性. 作为示例, 我们添加一些资源文件, 并且覆盖掉默认模版的一些样式.

## 添加资源

我们在创建的主题文件夹中创建一个 `css` 文件夹, 并且在 `css` 文件夹中创建一个  `laravel.css`   文件.

```
// themes/laravel/css/laravel.css
...
#api-tree a {
    color: #F4645F;
}
```

```
// themes/laravel/manifest.yml
...
static:
    'css/laravel.css': 'css/laravel.css'
```

这个静态文件配置块, 告诉 Sami , 复制文件到指定的目录, 新的构建目录中会包含新的文件 `build/laravel/%version%/css/laravel.css`.

```
// themes/laravel/manifest.yml
...
global:
    'layout/base.twig': 'layout/base.twig'


// themes/laravel/layout/base.twig
...
{% extends 'default/layout/base.twig' %}

{% block head %}
    {{ parent()  }}
    <link rel="stylesheet" href="css/laravel.css" />
{% endblock %}
```

每次 Sami 想加载 `base` 布局, 他会使用你主题中定义的文件. 我们扩展默认的基本布局来保持默认的外观. 然后我们插入自定义样式到 `head` 部分. 调用 `parent()` 函数将保持已经存在的内容在 `head` 区块中, 并且在 `link` 标签前输出.

```
// config/config.php

$options = [
    'theme'  => 'laravel',
    //...
];
```

```
php vendor/sami/sami/sami.php render config/config.php --force
```

默认 , Sami 不会在文档未发生任何变化的时候重载. 然而使用 `--force` 标记会强制输出文件. 在浏览器查看文档页面, 注意下左侧导航的颜色是不是已经改变.

## 变更标记

```
// themes/laravel/manifest.yml

global:
    'namespaces.twig': 'namespaces.twig'
```

作为推荐名称, `namespaces` 文件定义了我们的命名空间内容是怎么被渲染的.

```
// themes/laravel/namespaces.twig

{% extends 'default/namespaces.twig' %}
{% from "macros.twig" %}
```

如果你打开 `default/namespaces.twig` 页面, 你会发现 Sami 正在使用 [macros](http://twig.sensiolabs.org/doc/tags/macro.html) 来简化扩展模版的进度. 我们会创建我们自己的  `macros.twig` 文件来覆盖默认的标记.

因为 Twig 不支持在 macro 中继承和覆盖重写, 我们将复制并且粘贴默认的主题 macros 并开始编辑他们

```
// themes/laravel/macros.twig

{% macro render_classes(classes) -%}
    <div class="container-fluid underlined">
        {% for class in classes %}
            <div class="row">
                <div class="col-md-6">
                    {% if class.isInterface %}
                        <span class="label label-primary">I</span>
                    {% else %}
                        <span class="label label-info">C</span>
                    {% endif %}

                    {{ _self.class_link(class, true) }}
                </div>
                <div class="col-md-6">
                    {{ class.shortdesc|desc(class) }}
                </div>
            </div>
        {% endfor %}
    </div>
{%- endmacro %}
```

我们仅仅在这个 `macro` 中改变了一件事, 就是区分了 `Class` 和 `Interface` . Sami 用来重点标识接口但是我们在每一个条目前都标识了一个带颜色的标签.
我们没有在这个页面改变很多东西. 但是你可能会在你的页面中使用 bootstrap 样式, 让菜单更加响应化或者其他的.
现在, 在重新生成文档之后你会发现你列出了一个 namespace, class 和 interface 都使用标签标识出来了.


![](https://file.wulicode.com/note/2021/11-11/16-25-38684.png)


## 概述

在这个文档中, 我们介绍了一个新的 Symfony 工具来帮助你管理包文档. 你同样可以创建一个独一无二的主题. 你可以找到我们文档的最终例子 -> [Github](https://github.com/sitepoint-editors/SamiDemo).如果有什么问题可以给我们留言. 谢谢
