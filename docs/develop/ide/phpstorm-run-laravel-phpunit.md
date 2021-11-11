# [原] 在 PhpStorm 中运行 Laravel 的 phpunit 单元测试

## 项目中安装 phpunit 依赖

### 配置

-   `Ctrl+Alt+S` 打开配置面板
-   搜索 `phpunit`
-   在右侧配置 Path to Script

![](https://file.wulicode.com/note/2021/11-11/15-48-00349.png)

配置值为源码根目录下的 `./vendor/autoload.php`

### 运行

右键需要运行的文件

![](https://file.wulicode.com/note/2021/11-11/15-48-09751.png)

## 项目中不安装 phpunit

将 phpunit.phar 放置到外部, 以外部文件来加载
配置 :

![](https://file.wulicode.com/note/2021/11-11/15-48-25850.png)

如果这样配置需要把 phpunit 所在的文件夹作为 library 加入项目, 便于代码提示 `Preferences | Languages & Frameworks | PHP` , 加入 phpunit 文件夹

![](https://file.wulicode.com/note/2021/11-11/15-48-41959.png)

优点: 减少项目加载
