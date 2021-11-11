# Css - 编码规范 v2.0

## 1. 项目文件规范

-   文件规范
    使用 Tab 进行缩进, 使用正确的缩进来表明嵌套层次, tab 的大小为 4 空格
-   左大括号放置在类的末尾
-   文件编码为 utf-8(无 bom)
-   修改的重要的注释使用以下来进行注释, 其余采用简洁注释

## 2. 命名

**文件命名**

-   文件使用小写命名
-   less/scss/sass 文件使用下划线作为前缀 `_profile.scss`, 防止编译
-   css 文件根据模块的名称来进行命名
-   禁止使用拼音

**类命名/模块嵌套**

-   禁止使用拼音
    命名格式是为了规范网站中样式命名混乱的问题

```
// 大区域命名
{$project}--{$component} {
    // 小区域命名
    {$component}-{$block}
}

$project(项目), $component(部件), $block(区块)
    样式均不能包含 '--'(双中杠线), '-'(单中杠线)
    样式建议使用小写字母标识, 尽量不要包含数字
--  作为大区块分割线
-   作为小区块分割线


例如 fe 作为整个前端项目的标识

fe--editor  : 为编辑器的命名
    editor-top    : 编辑器顶部命名
    editor-footer : 编辑器底部命名
这里的
    $project   : fe
    $component : editor
    $block     : [top, footer, ...]
```

html 代码

```
<div class="fe--editor">
    <div class="editor-top"></div>
    ...
    <div class="editor-footer"></div>
</div>
```

**资源命名**

文件夹中的资源图片名称和 `文件` 名称对应起来
例如是个人资料文件是 `_profile.scss`, 这个资源应该放到指定资源目录的 `profile` 文件夹中.

```
┝ _profile.scss
┕ profile       # 公共文件文件
    ┝ ...
    ┕ header.png
```

**常用的标示符**

```
# 大小
-xs     # extreme small
-sm     # small
-lg     # large
-xl     # extreme large
```

## 3. 注释

**简约注释**

```
/* 个人资料
 -------------------------------------------- */
 .my--profile{
     ...
 }
```

**复杂注释**

```
/*
|--------------------------------------------------------------------------
| 重要说明
|--------------------------------------------------------------------------
|
| 这里的内容是属于重要说明的项目
| 这里是对上面重要说明的解释, 上下需要空两个空行
|
*/
```

## 4. 写法技巧

### IE 系列框架技巧

对于不同的 IE 浏览器. 使用 `lt-ie9`, `lt-ie8` 作为兼容性写法

```html
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="zh_CN"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="zh_CN"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="zh_CN"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="zh-CN">
	<!--<![endif]-->
</html>
```

```
.lt-ie7 .header{}
.lt-ie8 .header{}
.lt-ie9 .header{}
```

### 样式定义可以覆盖公共样式

```
# a 是公共样式, 这里写的样式会覆盖掉公共样式
.my--profile a{
    ...;
}
```

### 元素嵌套级别不超过 6 级

由于元素嵌套越多会是的浏览器解析速度出现问题, 所以规定元素嵌套不要超过六级

-   js 调用的样式 `J_xxxx` 字母 `J` 加下滑线 `_` ,并且不要将这些 class 包含到 CSS 文件中。

### id 不能写 css 样式

由于 `id` 属性作为仅仅作为 js 来调用, 所以使用到 JS 调用 class 的时候使用 `J_` 作为调用的句柄

```
<script>
$('.J_tabs').hover(function(){
    ...;
})
</script>
```

### logo 最好和 h1 标题使用一个

logo 用背景图标来显示， 必须用“h1"来标识。 `.head h1{}`

### 空行

成组的 css 规则使用空行来分隔. 多分组使用多空行来分隔

### love/hate 写法

a 标签采用 `LOVEHATE` 写法

> l(link)ov(visited)e h(hover)a(active)te

```
a:link{}
a:visited{}
a:hover{}
a:active{}
```

### 混排时候的字体定义

中英文混排时，我们尽可能的将英文和数字定义为 verdana 和 arial 两种字体

> 这样为了避免字符使用宋体时候出现的各种问题
> 会将人民币符号(两横)表现成日元的符号(一横)等问题
> 宋体表现数字和字母不协调

### 字体字号

一般使用中文宋体 12px 和 14.7px 这是经过优化的字号，黑体字或者宋体字加粗时，一般选用 11pt 和 14.7px 的字号比较合适

### 尽量使用简写属性

这里 `0` 不需要单位, 对属性值为 0 的情况省略单位

```
.col-main .content{
    padding: 0 1em 2em
}
```

### 元素的隐藏

-   `display:none`隐藏对象浏览器不作渲染，不占用内存。而`visibility:hidden`则会

> 对于隐藏元素使用 `display:none`

### 颜色使用 16 进制表示

颜色使用 16 进制的值表示

### 引号

尽可能不使用引号, 迫不得已使用单引号 `'`

### css 精灵

合理使用 CSS Sprite, 并控制质量和文件大小

> 对图片大小进行优化
> [RIOT](http://luci.criosweb.ro/riot/) : 图片压缩工具

### 公共样式

宽度分组, 宽度用 `w` 前缀表示, 尽量不要定宽

> 从 w120 开始, 一直写到 12px - 720px 宽度使用 12px 作为步进

```
.w12{width:12px;}
...
.w720{width:720px;}
```

### 位置及监听

css 文件不需要自己去手动创建， 而是使用 compass， sass 来生成并且维护 css 样式，scss 的文件位置是在 `assets/scss` 文件夹下。 监听文件的名称是 `style.sh` 或者 `style.bat` 在安装上 compass 的环境下直接运行文件进行监听。

## 附录

### v2.0(2017-08-26)

修改命名规范
整理文档结构和目录
