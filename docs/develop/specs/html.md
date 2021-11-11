# Html - 编码规范 v1.0

## 文件及格式化

**文件编码为 utf-8**
更多 UTF-8 内容: [http://zh.wikipedia.org/zh/UTF-8](http://zh.wikipedia.org/zh/UTF-8)
**使用 空格 进行缩进**
使用 4 空格缩进来表明嵌套层次
**网页大小**
“网页大小”定义为网页的所有文件大小的总和，包括 HTML 文件和所有的嵌入的对象。用户喜欢快的而不是新奇的站点。网页主体加载速度控制在 `3S` 以内

## 命名规则

### DOCTYPE

页面文档类型统一使用 HTML5 DOCTYPE.

```
<!doctype html>
```

### 兼容性

代码使用 html5 标准代码编写文档, 并且 ie8+, firefox, chrome 做到兼容, 禁止使用不兼容的标签,附录中包含了 html5 不支持的代码和新增的代码,这些标签禁止使用.
禁止使用特殊的标签,禁止使用 JS 对 IE6 中不支持的标签进行兼容, 禁止使用 HTML5 Shiv 对浏览器进行兼容

### Meta 字符集设置

声明方法遵循 HTML5 的规范, Meta 文件使用 "UTF-8" 浏览器显示编码指定.

```html
<meta charset="utf-8">
```

### 注释

**逻辑注释**
为了能够和程序注释进行统一和文件的无差异性修改. 并且注释不会在前台代码实现, 这个也不会影响服务器对编译过的模版的解析, 注释示例:

```
<!--{* 这里是注释的内容, 这里在html源码项目中不会显示, 这里的注释仅仅用于数据逻辑调用 增加新模块 (User)[2014-05-06] *}-->
<div>
</div>
```

**模块注释**
建议对超过一屏的代码页面模块进行注释, 以降低开发人员的嵌套成本和后期的维护成本.

```
<div id="sample">
    <div class="someCategory">
        ...
</div><!--  .someCategory End -->
</div><!--  #sample End -->
```

### 协议

如果链接和当前页面一致则忽略链接的协议部分, 建议在指向图片或其他媒体文件、样式表和脚本的 URL 地址中省略 http:, https:协议部分

```
<script src="//www.taobao.com/fp.js">
```

### 语义

使用符合语义的标签书写 HTML 文档, 选择恰当的元素表达所需的含义;

```
<a href="recommendations/">
    All recommendations
</a>
```

### 大小写

元素的标签和属性名必须小写, 属性值必须加双引号;

```
<a href="/">Home</a>
```

### Tab 缩进

使用 tab 来表示缩进，不要使用空格;
在块状元素，列表，表格元素后面使用新行，并且对它的子元素进行缩进.

```
<ul>
    <li><a href="someCategory/" title="someTitle" >someTitle</a></li>
</ul>
```

### 空格

去除不必要的空格

```
# Bad
<p>test                  </p>
# Good
<p>test</p>
```

### 嵌套和闭合

元素嵌套遵循 (X)HTML Strict 嵌套规则, 推荐使用 Firefox 插件 HTML Validator 进行检查;
正确区分自闭合元素和非自闭合元素.
非法闭合包括：`<br>..</br>、<script />、<iframe />`, 非法闭合会导致页面嵌套错误问题
自闭和标签: 以下元素不要求闭合, 原因见: HTML(5) 不要求标签自闭合
非闭合标签:`area, base, br, col, command, embed, hr, img, input, keygen, link, meta, param, source, track, wbr`

### 引号

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

### 自定义 javascript 属性

通过给元素设置自定义属性来存放与 JavaScript 交互的数据, 属性名格式为 data-xx (例如：data-lazyload-url)

```
<div class="bg bg-4"  data-load="false"></div>
```

目的是使用 js 调用时候对元素进行识别使用.

### TODO

使用 TODO 来标记待做事情，便于后期搜索.
在 TODO 后添加 (姓名或邮件) 来表示分类

```
<!-- TODO(Mark Zhao): remove duplicate tag -->
<p><span>2</span></p>
```

### 焦点分离

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

### block,list 或 table 元素

针对每个 block,list 或 table 元素另起一行，并在每个子元素前缩进。这样可读性好

```
<ul>
    <li>some list file</li>
    ...
</ul>
# ~
<table></table>
```

### Table 的写法

-   `</td>` 结束标记应该与 `<td>` 处于同一行，不要换行, 如果换行,浏览器将会解析内容为内容+半角空格.
-   不允许任何没有内容的空单元格存在,空单元格中必须存在
-   表格高度和宽度的控制, 不出现多于一个的控制同一个单元格大小的 height 和 width, 保证任何一个 width 和 height 都是有效的，也就是你改动代码中任何一个 width 和 height 的数值，都应该在浏览器中看到变化
-   一般情况下只有一列的表格，width 写在 `<table>` 的标签内
-   只有一行的表格，height 写在 `<table>` 的标签内
-   多行多列的表格，width 和 height 写在第一行或者第一列的 `<td>` 标签内
-   尽量避免 colspan, rowspan 两个属性

### 实体字符

html 标签`<`, `>`、空格、特殊符号需要使用 html 实体

### SEO 优化

-   `a` 元素必须加 `title=""`
-   `img`元素必须加 `alt = ""`
-   [ie7] button 参数必须带有 type="submit" , 否则表单不会提交

## Js 协作

### Js 调用的 html 数据

使用 `data-` 作为前缀

### 事件驱动

使用事件驱动 js 事件, 不需要写 `onclick="function"` 而是采用 `require` 方式调用

### id

`html` 中的 `id` 仅仅作为`js`句柄调用, 仅仅用于调用事件驱动, 不作为样式定义使用
