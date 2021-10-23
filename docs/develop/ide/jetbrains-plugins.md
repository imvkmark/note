# [原] JetBrains 系列 IDE 常用插件

## 通用插件

### 1. 代码地图 CodeGlance

下载地址:

-   [github](https://github.com/vektah/CodeGlance)
-   [intelij plugin](https://plugins.jetbrains.com/plugin/7275-codeglance)

Intelij 插件，显示一个缩小概述或代码地图，类似于 Sublime 进入编辑器导航, 代码地图允许快速滚动，让你直接跳转到代码部分。

-   使用自定义的颜色进行语法高亮显示，可以同时处理明暗主题
-   使用 intelij's tokenizer 进行显色
-   可滚动!
-   嵌入到编辑器窗口
-   完全替换支持新 Intellij 构建的代码大纲

![](https://file.wulicode.com/note/2021/10-23/15-32-55060.png)

### 2. 大小写切换(CamelCase)

Switch easily between CamelCase, camelCase, snake_case and SNAKE_CASE. 使用 `SHIFT + ALT + U` 来进行快捷方式切换

### 3. String Manipulation - 字串处理

提供字符的便捷操作

[String Manipulation](https://plugins.jetbrains.com/plugin/2162-string-manipulation)

提供强大的文本转换操作：

切换样式（camelCase, hyphen-lowercase, HYPHEN-UPPERCASE, snake_case, SCREAMING_SNAKE_CASE, dot.case, words lowercase, Words Capitalized, PascalCase）
转换为 SCREAMING_SNAKE_CASE (或转换为 camelCase)
转换为 snake_case (或转换为 camelCase)
转换为 dot.case (或转换为 camelCase)
转换为 hyphen-case (或转换为 camelCase)
转换为 hyphen-case (或转换为 snake_case)
转换为 camelCase (或转换为 Words)
转换为 camelCase (或转换为 lowercase words)
转换为 PascalCase (或转换为 camelCase)
选定文本大写
样式反转
Un/Escape:

....

更多文档查看官方: [这里](https://plugins.jetbrains.com/plugin/2162-string-manipulation/)

### 4. .ignore 忽略文件

[.ignore](https://plugins.jetbrains.com/plugin/7495--ignore), 可以在编辑器忽略文件显示的组件

[.ignore 示例文件](https://gist.github.com/imvkmark/15198641b214b35916cf54414516caf0)

### 5. CamelCase 大小写转换

[CamelCase](https://plugins.jetbrains.com/plugin/7160-camelcase)

> 提供大小写转换

快捷键 : `Shift+Alt+U`

## For Php

### 1. Php Inspections - PHP 静态代码分析工具

[php inspection](https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-)

开启之后需要需要在写 PHP 的时候注意项目, [相关的文档点击](https://github.com/kalessil/phpinspectionsea/tree/master/docs)

![](https://file.wulicode.com/note/2021/10-23/15-34-23418.png)

地址:

-   [intelij plugin](https://plugins.jetbrains.com/plugin/7622?pr=phpStorm)
-   [github](https://github.com/kalessil/phpinspectionsea)

这个项目是一个 OSS 静态代码分析工具, 在 PhpStorm(2016.2+)和 Idea Ultimate 上可用。
它包含:

-   架构相关问题
-   弱类型控制和可能的代码构造优化
-   性能问题
-   非最佳、重复和可疑的“如果”条件
-   验证魔术方法的使用
-   正则表达式
-   异常处理工作流的验证
-   兼容性问题
-   各种耗时的 bug
-   PhpUnit API 的使用
-   安全问题

`Alt + Shift + I`   来进行验证

### 2. Laravel - Laravel 开发工具

[Laravel](https://plugins.jetbrains.com/plugin/7532-laravel)

**启用 插件**

找到 `Preferences | Languages & Frameworks | PHP | Laravel`, 然后开启 `Enable Plugin for this project`

**配置 view 的映射**

例如 `system` 模块的映射地址应该是 `modules/system/resources/views`

这样在点击的时候才能够跳转到这个页面

**启用控制器的命名空间检测**

在 `Router Namespace` 中添加相关的命名空间, 多个使用 `,` 分隔.

-   控制器补全和跳转
-   路由资源引用
-   检测路由
-   view 跳转和 view 跳转到控制器
-   配置显示
-   翻译显示

![](https://file.wulicode.com/note/2021/10-23/15-34-52936.png)

## 参考 & 相关阅读

-   [phpStorm 的常用插件收集](http://yzone.net/blog/140)
-   [[译] 常用 Phpstorm tips](https://www.yuque.com/duoli/php/jetbrains-tips)
