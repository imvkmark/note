# Web 编码规范 v3.0

本文规范合并 html/css 规范

## 文件及格式化

**文件编码为 utf-8**

更多 UTF-8 内容: [http://zh.wikipedia.org/zh/UTF-8](http://zh.wikipedia.org/zh/UTF-8)

**使用 空格 进行缩进**

使用 4 空格缩进来表明嵌套层次

**网页大小**

“网页大小”定义为网页的所有文件大小的总和，包括 HTML 文件和所有的嵌入的对象。用户喜欢快的而不是新奇的站点。网页主体加载速度控制在 `3S` 以内

**注释**

注释适用部分参考 [公共约定](./default.md)

## Html 部分

### 全局定义

**DOCTYPE**

页面文档类型统一使用 HTML5 DOCTYPE, 为每个 HTML 页面添加标准模式（standard mode）的声明，确保在每个浏览器中拥有一致的展现

```
<!doctype html>
```

**字符集设置**

声明方法遵循 HTML5 的规范, Meta 文件使用 "UTF-8" 浏览器显示编码指定, 通过声明一个明确的字符编码，让浏览器轻松、快速的确定网页内容渲染方式，通常指定为'UTF-8'

```html
<html>
	<head>
		<meta charset="UTF-8" />
	</head>
	...
</html>
```

**语言属性**

为每个 HTML 页面根元素添加 [lang 属性](http://w3c.github.io/html/semantics.html#the-html-element)

根据 HTML5 规范：

> 强烈建议为 html 根元素指定 lang 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。

```html
<html lang="zh-CN">
	<!-- ... -->
</html>
```

**引入 CSS 和 JavaScript 文件**

根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时不需要指定 `type` 属性，因为 `text/css` 和 `text/javascript` 分别是它们的默认值

```html
<!-- External CSS -->
<link rel="stylesheet" href="code_guide.css" />

<!-- In-document CSS -->
<style>
	...;
</style>

<!-- External JS -->
<script src="code_guide.js"></script>

<!-- In-document JS -->
<script>
	...
</script>
```

### 语法

**特殊符号使用 [HTML 字符实体](http://www.w3school.com.cn/html/html_entities.asp)（实体名称对大小写敏感）**

常用如下：

| 符号 | 实体编码 |
| :--: | :------: |
| 空格 | \&nbsp;  |
|  ©   | \&copy;  |
|  ¥   |  \&yen;  |
|  ®   |  \&reg;  |
|  >   |  \&gt;   |
|  <   |  \&lt;   |
|  &   |  \&amp;  |

**td / th 要在 tr 里面，li 要在 ul / ol 里面**

```html
<!-- not good -->
<table>
	<td>test</td>
</table>

<!-- good -->
<table>
	<tr>
		<td>test</td>
	</tr>
</table>
```

**ul / ol 的直接子元素只能是 li，不能包含其他元素**

```html
<!-- not good -->
<ul>
	<span>123</span>
	<li>a</li>
	<li>b</li>
</ul>
```

**行内元素里面不可使用块级元素**

a 标签是一个行内元素，行内元素里面套了一个 div 的标签，这样可能会导致 a 标签无法正常点击

```html
<!-- not good -->
<a href="../test">
	<div></div>
</a>
```

可以使用如下代码进行修复：

```html
<a href="../test" style="display: block">
	<div></div>
</a>
```

**不使用重复属性，重复的属性只会取第一个**

```html
<!-- error -->
<input class="a" type="text" class="b" />

<!-- good -->
<input class="a b" type="text" />
```

**不要在 https 的链接里写 http 的图片**

_只要 https 的网页请求了一张 http 的图片，就会导致浏览器地址栏左边的小锁没有了，一般不要写死，写成根据当前域名的协议去加载，用//开头：_

```html
<img src="//static.chimeroi.com/hello-world.jpg" />
```

**不要在自闭合（self-closing）元素的尾部添加斜线**

（ [HTML5 规范](http://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag)中说明这是可选的）

```html
<!-- not good -->
<img src="logo.png" alt />

<!-- good -->
<img src="logo.png" alt />
```

**不使用属性设置样式（`img`, `table`等元素）**

```html
<!-- not good -->
<img src="test.jpg" alt width="400" height="300" />

<!-- good -->
<img src="test.jpg" style="width:400px;height:300px;" />
```

**自定义属性要以 data-开头**

自己添加的非标准的属性要以 data-开头，否则[w3c validator](https://link.juejin.im/?target=https%3A%2F%2Fvalidator.w3.org%2F)会认为是不规范的

```html
<!-- not good -->
<div count="5"></div>

<!-- good -->
<div data-count="5"></div>
```

**使用尽可能少的元素/嵌套**

由于元素嵌套越多会是的浏览器解析速度出现问题, 所以规定元素嵌套不要超过六级, 尽量遵循 HTML 标准和语义，但是不要以牺牲实用性为代价；任何时候都要尽量使用最少的标签并保持最小的复杂度。

尽量避免多余的层级

```html
<!-- not good -->
<span class="avatar">
	<img src="..." />
</span>

<!-- good -->
<img class="avatar" src="..." />
```

**兼容性**

代码使用 html5 标准代码编写文档, 并且 ie8+, firefox, chrome 做到兼容, 禁止使用不兼容的标签,附录中包含了 html5 不支持的代码和新增的代码,这些标签禁止使用.
禁止使用特殊的标签

**协议**

如果链接和当前页面一致则忽略链接的协议部分, 建议在指向图片或其他媒体文件、样式表和脚本的 URL 地址中省略 http:, https:协议部分

```
<script src="//www.taobao.com/fp.js">
```

**语义**

使用符合语义的标签书写 HTML 文档, 选择恰当的元素表达所需的含义;

```
<a href="recommendations/">
    All recommendations
</a>
```

**大小写**

元素的标签和属性名必须小写, 属性值必须加双引号;

```
<a href="/">Home</a>
```

**属性应该按照特定的顺序出现以保证易读性**

1. `class`
2. `id`
3. `name`
4. `data-*`
5. `src`, `for`, `type`, `href`, `value` , `max-length`, `max`, `min`, `pattern`
6. `placeholder`, `title`, `alt`
7. `aria-*`, `role`
8. `required`, `readonly`, `disabled`

**空格**

去除不必要的空格

```
# Bad
<p>test                  </p>
# Good
<p>test</p>
```

**嵌套和闭合**

元素嵌套遵循 (X)HTML Strict 嵌套规则, 推荐使用 Firefox 插件 HTML Validator 进行检查;
正确区分自闭合元素和非自闭合元素.
非法闭合包括：`<br>..</br>、<script />、<iframe />`, 非法闭合会导致页面嵌套错误问题
自闭和标签: 以下元素不要求闭合, 原因见: HTML(5) 不要求标签自闭合
非闭合标签:`area, base, br, col, command, embed, hr, img, input, keygen, link, meta, param, source, track, wbr`

**引号**

使用双引号来标识 html 的属性

```
# Bad
<a class='maia-button maia-button-secondary'>
Sign in
</a>

# Good
<a class="maia-button maia-button-secondary">
Sign in
</a>
```

**自定义 javascript 属性**

通过给元素设置自定义属性来存放与 JavaScript 交互的数据, 属性名格式为 data-xx (例如：data-lazyload-url)

```
<div class="bg bg-4"  data-load="false"></div>
```

目的是使用 js 调用时候对元素进行识别使用.

**TODO**

使用 TODO 来标记待做事情，便于后期搜索.
在 TODO 后添加 (姓名或邮件) 来表示分类

```
<!-- TODO(Mark Zhao): remove duplicate tag -->
<p><span>2</span></p>
```

**焦点分离**

将表现，行为和结构分离：不要在 html 和模板中加入除了结构以外的东西.例如内联样式, center 等标记.
在文档中引入尽可能少的样式和脚本

```
# Bad
<h1 style="font-size: 1em;">HTML sucks</h1>
<p>I've read about this on a few sites but now I'm sure:<u>HTML is stupid!!1</u><center>I can't believe there's no way to control the styling of  my website without doing everything all over again!</center><p>

# Good
<h1>My first CSS-only redesign</h1>
<p>I've read about this on a few sites but today I'm actually
  doing it: separating concerns and avoiding anything in the HTML of
  my website that is presentational.
<p>
```

**block,list 或 table 元素**

针对每个 block,list 或 table 元素另起一行，并在每个子元素前缩进。这样可读性好

```
<ul>
    <li>some list file</li>
    ...
</ul>
# ~
<table></table>
```

**Table 的写法**

-   `</td>` 结束标记应该与 `<td>` 处于同一行，不要换行, 如果换行,浏览器将会解析内容为内容+半角空格.
-   不允许任何没有内容的空单元格存在,空单元格中必须存在
-   表格高度和宽度的控制, 不出现多于一个的控制同一个单元格大小的 height 和 width, 保证任何一个 width 和 height 都是有效的，也就是你改动代码中任何一个 width 和 height 的数值，都应该在浏览器中看到变化
-   一般情况下只有一列的表格，width 写在 `<table>` 的标签内
-   只有一行的表格，height 写在 `<table>` 的标签内
-   多行多列的表格，width 和 height 写在第一行或者第一列的 `<td>` 标签内
-   尽量避免 colspan, rowspan 两个属性

**实体字符**

html 标签`<`, `>`、空格、特殊符号需要使用 html 实体

**SEO 优化**

-   `a` 元素必须加 `title=""`
-   `img`元素必须加 `alt = ""`
-   [ie7] button 参数必须带有 type="submit" , 否则表单不会提交

### 注释

建议对超过一屏的代码页面模块进行注释, 以降低开发人员的嵌套成本和后期的维护成本.

```
<div id="sample">
    <div class="someCategory">
        ...
</div><!--  .someCategory End -->
</div><!--  #sample End -->
```

## Js 协作

**Js 调用的 html 数据**

使用 `data-` 作为前缀

**事件驱动**

使用事件驱动 js 事件, 不需要写 `onclick="function"` 而是采用 `require` 方式调用

**id**

`html` 中的 `id` 仅仅作为`js`句柄调用, 仅仅用于调用事件驱动, 不作为样式定义使用

## Css 部分

此部分的约定包含 less, sass 等预编译的约定

**项目文件规范**

-   左大括号放置在类的末尾
-   修改的重要的注释使用以下来进行注释, 其余采用简洁注释

### 命名

**文件命名**

-   文件使用小写/中杠线命名
-   文件根据模块的名称来进行命名
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
例如是个人资料文件是 `user.less`, 这个资源应该放到指定资源目录的 `user` 文件夹中.

```
┝ user.less
┕ user       # 文件夹
    ┝ ...
    ┕ header.png
```

**less 中的变量、函数、mixin 等采用驼峰式命名**

对于变量的命名采用(定义/模块) 来进行命名, 使用中尽量不要直接调用颜色, 而是调用模块的定义

```less
@mainFontColor: #444;

:root {
	--mod-border-color: @mainFontColor;
}

.mod {
	color: var(--mode-border-color);
}
```

**常用的标示符**

```
# 大小
-xs     # extreme small
-sm     # small
-lg     # large
-xl     # extreme large
```

### 语法

**所有声明语句都应当以分号结尾**

_最后一条声明语句后面的分号是可选的，但是，如果省略这个分号，你的代码可能更易出错_

```css
/* error */
.selector {
    font-size: 15px
    color: red
}

/* not good */
.selector {
    font-size: 15px;
    color: red
}

/* good */
.selector {
    font-size: 15px;
    color: red;
}
```

**<font color=#f5222d>【强制】</font>为选择器分组时，将单独的选择器单独放在一行**

```css
/* good */
.selector,
.selector-secondary,
.selector[type="text"] {
	/* ... */
}
```

**避免为 0 值指定单位**

例如，用 `margin: 0;` 代替 `margin: 0px;`

3. <font color=#f5222d>【强制】</font>为选择器中的属性添加双引号，例如，`input[type="text"]`；
   [某些情况下是可选的](http://mathiasbynens.be/notes/unquoted-attribute-values#css)，但是，为了代码的一致性，建议都加上双引号

    ```css
    /* not good */
    .selector[type="text"] {
    	/* ... */
    }

    /* good */
    .selector[type="text"] {
    	/* ... */
    }
    ```

4. <font color=#f5222d>【强制】</font>十六进制值应该全部小写，例如，`#f3f6fa`

5. <font color=#f5222d>【强制】</font>不出现空的规则（声明块中没有声明语句）

6. <font color=#f5222d>【强制】</font>不要设置太大的 z-index（一个正常的系统的层级关系在 10 以内就能完成）

7. <font color=#f5222d>【强制】</font>多写注释，且多使用句子进行描述而不是词语

    ```css
    /* 为了去除输入框和表单点击时的灰色背景 */
    input,
    form {
    	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }
    ```

8. <font color=#52c41a>【推荐】</font>不要使用`*`选择器

9. <font color=#52c41a>【推荐】</font>适当使用`:before`和`:after`来画页面的一些视觉上的辅助性元素，如三角形、短的分隔线、短竖线等，可以减少页面上没有用的标签

10. <font color=#52c41a>【推荐】</font>选择器不要超过 4 层（在 Less 中避免嵌套超过 4 层）

11. <font color=#52c41a>【推荐】</font>用 `border: 0;` 代替 `border: none;`

12. <font color=#52c41a>【推荐】</font>使用简写形式的十六进制值，例如，用 `#fff` 代替 `#ffffff`

13. <font color=#52c41a>【推荐】</font>对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，`.5` 代替 `0.5`；`-.5px` 代替 `-0.5px`）

### 写法技巧

**样式定义可以覆盖公共样式**

```
# a 是公共样式, 这里写的样式会覆盖掉公共样式
.my--profile a{
    ...;
}
```

**元素嵌套级别不超过 6 级**

-   js 调用的样式 `J_xxxx` 字母 `J` 加下滑线 `_` ,并且不要将这些 class 包含到 CSS 文件中。

**id 不能写 css 样式**

由于 `id` 属性作为仅仅作为 js 来调用, 所以使用到 JS 调用 class 的时候使用 `J_` 作为调用的句柄

```
<script>
$('.J_tabs').hover(function(){
    ...;
})
</script>
```

**logo 最好和 h1 标题使用一个**

logo 用背景图标来显示， 必须用“h1"来标识。 `.head h1{}`

**空行**

成组的 css 规则使用空行来分隔. 多分组使用多空行来分隔

**love/hate 写法**

a 标签采用 `LOVEHATE` 写法

> l(link)ov(visited)e h(hover)a(active)te

```
a:link{}
a:visited{}
a:hover{}
a:active{}
```

**混排时候的字体定义**

中英文混排时，我们尽可能的将英文和数字定义为 verdana 和 arial 两种字体

> 这样为了避免字符使用宋体时候出现的各种问题
> 会将人民币符号(两横)表现成日元的符号(一横)等问题
> 宋体表现数字和字母不协调

**字体字号**

一般使用中文宋体 12px 和 14.7px 这是经过优化的字号，黑体字或者宋体字加粗时，一般选用 11pt 和 14.7px 的字号比较合适

**尽量使用简写属性**

这里 `0` 不需要单位, 对属性值为 0 的情况省略单位

```
.col-main .content{
    padding: 0 1em 2em
}
```

**元素的隐藏**

-   `display:none`隐藏对象浏览器不作渲染，不占用内存。而`visibility:hidden`则会

> 对于隐藏元素使用 `display:none`

**颜色使用 16 进制表示**

颜色使用 16 进制的值表示

**引号**

尽可能不使用引号, 迫不得已使用单引号 `'`

**css 精灵**

合理使用 CSS Sprite, 并控制质量和文件大小

> 对图片大小进行优化
> [RIOT](http://luci.criosweb.ro/riot/) : 图片压缩工具

**公共样式**

宽度分组, 宽度用 `w` 前缀表示, 尽量不要定宽

> 从 w120 开始, 一直写到 12px - 720px 宽度使用 12px 作为步进

```
.w12{width:12px;}
...
.w720{width:720px;}
```

**位置及监听**

css 文件不需要自己去手动创建， 而是使用 compass， sass 来生成并且维护 css 样式

3. <font color=#f5222d>【强制】</font>声明块的左花括号前添加一个空格

4. <font color=#f5222d>【强制】</font>声明块的右花括号应当单独成行

5. <font color=#f5222d>【强制】</font>每条声明语句的 `:` 后应该插入一个空格

6. <font color=#f5222d>【强制】</font>每条样式声明应该独占一行

    ```css
    /* not good */
    .selector {
    	font-size: 15px;
    	color: red;
    }

    /* good */
    .selector {
    	font-size: 15px;
    	color: red;
    }
    ```

7. <font color=#f5222d>【强制】</font>对于以逗号分隔的属性值，每个逗号后面都应该插入一个空格（例如，`box-shadow`，`transition`）

    ```css
    /* not good */
    .selector {
    	transition: border 0.2s, color 0.3s, padding 0.4s;
    }

    /* good */
    .selector {
    	transition: border 0.2s, color 0.3s, padding 0.4s;
    }
    ```

8. <font color=#f5222d>【强制】</font>`!important`前插入一个空格

9. <font color=#f5222d>【强制】</font>注释：`//`后插入一个空格，`/*`后插入一个空格，`*/`前插入一个空格

10. <font color=#f5222d>【强制】</font>Less 的操作符，在圆括号中的数学计算表达式的数值、变量和操作符之间均添加一个空格

11. <font color=#52c41a>【推荐】</font>注释统一用`/* */`（ Less 中也不要用`//`）

#### 样式兼容性

1. <font color=#f5222d>【强制】</font>当使用一些较新的 CSS3 语法时，应注意添加浏览器前缀（ FAIS 2 打包工具包含 CSS 预处理，固无需考虑此条）

2. <font color=#52c41a>【推荐】</font>不要使用 input 的 `line-height` 来做垂直居中
   设置 `line-height` 为一个很高的值会导致 Safari 浏览器的输入光标变得巨大 (与 `line-height` 等高)

    ```css
    /* not good */
    input {
    	height: 40px;
    	line-height: 40px;
    }

    /* good */
    input {
    	height: 20px;
    	line-height: 20px;
    	padding: 10px 0;
    }
    ```

#### 选择器权重（样式覆盖）

> 权重的基本规则：
>
> 1. 相同的权重：以后面出现的选择器为最后规则
> 2. 不同的权重，权重值高则生效
>
> [详细了解](https://www.w3cplus.com/css/css-specificity-things-you-should-know.html)权重计算方法

1. <font color=#f5222d>【强制】</font>非通用样式使用嵌套方式进行编写，避免影响其他自己不了解样式，造成样式覆盖
2. <font color=#52c41a>【推荐】</font>Vue 中样式谨慎使用 scoped，会影响样式选择器性能，请使用第一点进行特有样式编写
3. <font color=#52c41a>【推荐】</font>样式需要修改时，尽量找到原样式声明进行修改
4. <font color=#f5222d>【强制】</font>无法修改原样式声明时，应通过权重关系，编写权重更高的样式进行覆盖
5. <font color=#f5222d>【强制】</font>不使用`!important`，除非原样式使用内联样式或`!important`且无法直接修改

#### 声明简写

1. <font color=#52c41a>【推荐】</font>当你不确定自己写的属性会否影响到其他属性时，应避免使用简写

    ```css
    /* error */
    .element {
    	margin: 0 0 10px;
    	background: red;
    	background: url("image.jpg");
    	border-radius: 3px 3px 0 0;
    }

    /* good */
    .element {
    	margin-bottom: 10px;
    	background-color: red;
    	background-image: url("image.jpg");
    	border-top-left-radius: 3px;
    	border-top-right-radius: 3px;
    }
    ```

2. <font color=#52c41a>【推荐】</font>当你确定自己的声明不会影响到其他属性时，请使用简写提升代码简洁性

    ```css
    /* not good */
    .element {
    	padding-top: 10px;
    	padding-right: 20px;
    	padding-bottom: 15px;
    	padding-left: 20px;
    }

    /* good */
    .element {
    	padding: 10px 20px 15px;
    }
    ```

#### CSS 动画

1. <font color=#52c41a>【推荐】</font>不要使用 all 属性做动画

使用 transition 做动画的时候不要使用 all 所有属性，在有一些浏览器上面可能会有一些问题，如下：

```css
transition: all 2s linear;
```

在 Safari 上面可能会有一些奇怪的抖动，正确的做法是要用哪个属性做动画就写哪个，如果有多个就用隔开，如下代码所示：

```css
transition: transform 2s linear, opacity 2s linear;
```

1. <font color=#52c41a>【推荐】</font>位移动画使用 transform 替代 position （提升动画性能）
2. <font color=#52c41a>【推荐】</font>使用 CSS 动画替代 JS 动画

#### 声明顺序

<font color=#1890ff>【参考】</font>相关的属性声明按以下顺序做分组处理，组之间需要有一个空行

1. **Positioning**（影响其他元素和自身位置相关声明）

2. **Box model**（自身盒模型相关声明）

3. **Typographic**（文本相关声明）

4. **Visual**（自身样式）

5. **Misc**（其他声明）

    ```css
    .declaration-order {
    	/* Positioning */
    	position: absolute;
    	top: 0;
    	right: 0;
    	bottom: 0;
    	left: 0;
    	z-index: 100;

    	/* Box-model */
    	display: block;
    	float: right;
    	width: 100px;
    	height: 100px;

    	/* Typography */
    	font: normal 13px "Helvetica Neue", sans-serif;
    	line-height: 1.5;
    	color: #333;
    	text-align: center;

    	/* Visual */
    	background-color: #f5f5f5;
    	border: 1px solid #e5e5e5;
    	border-radius: 3px;

    	/* Misc */
    	opacity: 1;
    }
    ```

## 附录

**v3.0(2021-11-12)**

-   合并 html / css 规范
-   移除对 IE 的支持

**v2.0(2017-08-26)**

-   修改命名规范
-   整理文档结构和目录

-   [前端开发规范](https://github.com/CyberFei/standard)
