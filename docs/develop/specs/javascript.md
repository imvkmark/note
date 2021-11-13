# JavaScript - 编码规范 v1.0

## 1. 命名规则

### 使用含义丰富的名字

杜绝使用无意义的单字母命名

```
if (currentYear > 2009) ...
```

### 组成

命名应该由 26 个大小写字母(A .. Z, a .. z)，10 个数字(0 .. 9), `$(美元符号)` 和 `_(下划线)` 组成。不要使用国际字符(例如中文, emoji 表情)，因为它们可能不易读或者不能在任何地方都能容易理解。不要使用 `\`(反斜线符号), `$` 符号仅仅作为被选择的 dom 进行使用

### 下划线

不要使用 `_(下划线)` 作为变量名称的首字母。它被用来表示私有，但是它实际上不提供私有性。
文件或类中的 私有 属性, 变量和方法名应该以下划线 "\_" 开头.

### 首字母小写

大多数变量和方法名应该以小写字母开始。[变量/函数]杜绝使用拼音命名

### 类首字母使用大写

必须使用 `new` 前缀的构造函数应该以大写字母开始。JavaScript 不会在省略 new 时报编译期警告或运行时警告。
不使用 `new` 时会发生坏事情，所以大写首字母规范是我们拥有的唯一的防御。

### 常量使用大写

常量的形式如: NAMES_LIKE_THIS, 即使用大写字符, 并用下划线分隔. 你也可用 [@const ](/const) 标记来指明它是一个常量. 但请永远不要使用 const 关键词,关键词 const, 因为 IE 不能识别, 所以不要使用

### 变量声明

声明变量必须加上 var 关键字 . JavaScript 不强求这点，但是这样做会让程序更易读，并且会让探测未声明的可能变成隐式的 globals 的 变量更容易。
var 语句应该为方法体内的第一个语句。
每个变量声明应该自己占一行并有注释。它们应该按字母顺序排列。

```
var currentEntry; // currentyly selected table entry
var level;        // indentation level
var size;         // size of table
```

JavaScript 没有块作用域，所以在块里定义变量可能会让有其它 C 家族语言经验的程序员迷惑。在方法顶端定义所有变量。 尽量少使用全局变量。隐式的全局变量应该从来不使用。

### 方法声明

所有的方法应该在它们使用前声明。内部方法应该位于 var 语句后面。这让哪些变量包含在它的 scope 里更清楚。
方法体本身缩进 Tab。`}` (右大括号)应该和方法声明处对齐。

```
function outer(c, d) {
    var e = c * d;
    function inner(a, b) {
        return (e * a) + b;
    }
    return inner(0, 1);
}
```

这个规范可以和 JavaScript 很好的工作，因为在 JavaScript 里方法和对象字面量可以放在允许表达式的任何位置。它使用内部方法和复杂结构提供最好的可读性。

```javascript
function getElementsByClassName(class_name) {
	var results = [];
	walkTheDOM(document.body, function (node) {
		var a; // array of class names
		var c = node.className; // the node's classname
		var i; // loop counter
		// If the node has a class name, then split it into a list of simple names.
		// If any of them match the requested name, then append the node to the set of results.
		if (c) {
			a = c.split(" ");
			for (i = 0; i < a.length; i += 1) {
				if (a[i] === class_name) {
					results.push(node);
					break;
				}
			}
		}
	});
	return results;
}
```

如果一个方法字面量为匿名的，则在“function”和“(”(左圆括号)之间应该有一个空格。如果省略空格，则它可能看起来方法名是 function”，而这是错误的。

```
div.onclick = function (e) {
    return false;
};
that = {
    method: function () {
        return this.datum;
    },
    datum: 0;
};
```

尽量少用全局方法。

### 方法参数/入参

方法中的参数使用 蛇形写法, 这里的方法包含回调函数, 定义函数, 类方法

```javascript
function getElementsByClassName(class_name) {
	var results = [];
	// ...
}
```

## 2. 文件及格式化

### JavaScript 文件

JavaScript 程序应该作为一个.js 文件存储和发布。
JavaScript 代码不应该嵌入在 HTML 文件里，除非那些代码是一个单独的会话特有的。HTML 里的 JavaScript 代码大大增加了页面的大小，并且 很难通过缓存和压缩来缓解
`<script src="filename.js">` 标签应该在 body 里越靠后的位置越好。这减少了由于加载 script 而导致的其它页面组件的延迟。没有必要使 language 或者 type 属性。由服务器而不是 script 标签来决定 MIME 类型。
文件名应该使用小写字符, 以避免在有些系统平台上不识别大小写的命名方式. 文件名以.js 结尾, 不要包含除 - 和 _ 外的标点符号(使用 - 优于 _).

### 继续缩进

当一条语句不能在单独一行写完时，可能有必要拆分它。在操作符后进行拆分，最好是在逗号后面拆分。
操作符后面进行拆分减少了通过插入分号伪装 copy-paste 错误的可能性。下一行应该缩进 `+ 4空格`。

### 注释

慷慨的写注释。留下一些供需要理解你做了什么的人们(可能是你自己)下次阅读的信息是有用的。注释应该书写良好和清晰，就像它们 标注的代码一样。偶尔小幽默一把也是可以的。挫折和怨恨就别写了。
更新注释非常重要。错误的注释让程序更难读懂和理解。
让注释有意义。更多的关注于不能马上可见的东西。不要用如下内容浪费读者的时间:

```
i = 0; // Set i to zero.
```

一般使用行注释。把块注释用于正式文档或外部注释。
修改的重要的注释使用 `/* Comment (User)[2014-05-06] */` 来进行注释, 其余采用简洁注释

### 空格缩进

使用 空格 进行缩进, 使用正确的缩进来表明嵌套层次, 4 个空格作为一个缩进

### 文件编码为 `utf-8`

### 空行

空行通过将逻辑相关的代码放到一起来增加可读性。

### 空格

空格应该用于如下情况:

-   关键字后面跟“(”(左圆括号)时应该用一个空格隔开。
-   方法名和方法的“(”(左圆括号)之间不要有空格。这利于区分关键字和方法调用。
-   所有的二元操作符，除了“.”(圆点)、“(”(左圆括号)和“[”(左中括号)，都应该使用一个空格来和操作数隔开。
-   一元操作符和操作数之间不应该使用空格隔开，除了操作符是一个单词时，如 typeof。
-   for 语句控制部分的每个“;”(分号)应该在后面跟一个空格。
-   每个“,”(逗号)后面应该跟一个空格。

### 分号

总是使用分号.
如果仅依靠语句间的隐式分隔, 有时会很麻烦. 你自己更能清楚哪里是语句的起止.
而且有些情况下, 漏掉分号会很危险

### 数组和对象的初始化

如果初始值不是很长, 就保持写在单行上:

```
var arr = [1, 2, 3];  // No space after [ or before ].
var obj = {a: 1, b: 2, c: 3};  // No space after { or before }.
```

初始值占用多行时, 缩进 2 个空格.

```
// Object initializer.
var inset = {
  top: 10,
  right: 20,
  bottom: 15,
  left: 12
};
// Array initializer.
this.rows_ = [
  '"Slartibartfast" <fjordmaster@magrathea.com>',
  '"Zaphod Beeblebrox" <theprez@universe.gov>',
  '"Ford Prefect" <ford@theguide.com>',
  '"Arthur Dent" <has.no.tea@gmail.com>',
  '"Marvin the Paranoid Android" <marv@googlemail.com>',
  'the.mice@magrathea.com'
];
```

比较长的标识符或者数值, 不要为了让代码好看些而手工对齐. 如:

```
WRONG_Object.prototype = {
  a          : 0,
  b          : 1,
  lengthyName: 2
};
```

### 函数参数

尽量让函数参数在同一行上. 如果一行超过 80 字符, 每个参数独占一行, 并以 Tab 缩进, 或者与括号对齐, 以提高可读性. 尽可能不要让每行超过 80 个字符. 比如下面这样:

```
// renaming without reindenting, low on space.
goog.foo.bar.doThingThatIsVeryDifficultToExplain = function(
    veryDescriptiveArgumentNumberOne, veryDescriptiveArgumentTwo,
    tableModelEventHandlerProxy, artichokeDescriptorAdapterIterator) {
  // ...
};
// survives renaming, and emphasizes each argument.
goog.foo.bar.doThingThatIsVeryDifficultToExplain = function(
    veryDescriptiveArgumentNumberOne,
    veryDescriptiveArgumentTwo,
    tableModelEventHandlerProxy,
    artichokeDescriptorAdapterIterator) {
};
```

### 二元和三元操作符

操作符始终跟随着前行, 这样就不用顾虑分号的隐式插入问题. 如果一行实在放不下, 还是按照上述的缩进风格来换行.

```
var x = a ? b : c;  // All on one line if it will fit.
// Indentation +4 is OK.
var y = a ?
    longButSimpleOperandB : longButSimpleOperandC;
// Indenting to the line position of the first operand is also OK.
var z = a ?
        moreComplicatedB :
        moreComplicatedC;
```

### 需要时候使用括号

不要滥用括号, 只在必要的时候使用它.
对于一元操作符(如 delete, typeof 和 void ), 或是在某些关键词(如 return, throw, case, new )之后, 不要使用括号.

### 字符串

使用 `'` 优于 `"`
单引号 `'` 优于双引号 `"`. 当你创建一个包含 HTML 代码的字符串时就知道它的好处了.

## 3. 语句

### 简单语句

每行应该包含至少一个语句。在每个简单语句末尾添加一个“;”(分号)。注意一个给方法字面量或对象字面量赋值的赋值语句仍然是一个赋值语句，所以也必须以分号结尾。
JavaScript 允许任何表达式作为语句使用。这可能产生一些错误，特别是在插入分号时。唯一可以当作语句使用的表达式是赋值表达式和调用表达式。

### 复合语句

复合语句是包含一个用“{}”(大括号)包围语句列表的的语句。

-   包围的语句应该缩进 Tab。
-   “{”(左大括号)应该位于开始复合语句的行的末尾。
-   “}”(右大括号)应该新起一行并且和相匹配的“{”所在那行的起始位置对齐
-   当语句是控制结构的一部分时，所有语句都应该用括号包围，即使是单行语句，例如 if 或 for 语句。这让添加语句更容易而且不会引起 Bug。

## 4. 标签

语句标签是可选的。只有如下语句需要被标签标识: while，do，for，switch。

### return 语句

具有值的 return 语句不应该使用“()”(圆括号)包围值。返回值表达式必须和 return 关键字在同一行从而避免插入分号。

### if 语句

if 语句应该使用如下格式:

```
# single
if (condition) {
    statements;
}
#
if (condition) {
    statements;
} else {
    statements;
}
#
if (condition) {
    statements;
} else if (condition) {
    statements;
} else {
    statements;
}
```

### for 语句

for 语句应该使用如下格式:

```
# 和数组使用
for (initialization; condition; update) {
    statements;
}
# 和对象使用
for (variable in object) {
    statements;
}
```

第一种格式应该和数组使用。
第二种格式应该和对象使用。注意添加到对象的 prototype 中的成员将被包含在遍历中。通过使用 hasOwnProperty 方法来区分对象的成员是明智的:

```
for (variable in object) {
    if (object.hasOwnProperty()) {
        statements;
    }
}
```

### while 语句

while 语句应该使用如下格式:

```
while (condition) {
    statements;
}
```

### do 语句

do 语句应该使用如下格式:

```
do {
    statements;
} while (condition);
```

不像其它复合语句，do 语句始终使用“;”(分号)结尾。

### switch 语句

switch 语句应该有如下格式:

```
switch (expression) {
    case expression:
        statements;
        break;
    default:
        statements;
}
```

每组语句(除了 default)应该以 break，return 或者 throw 结束。不要 fall through。

### try 语句

try 语句应该使用如下格式:

```
try {
    statements;
} catch (variable) {
    statements;
}
#
try {
    statements;
} catch (variable) {
    statements;
} finally {
    statements;
}
```

### continue some 语句

不要使用 continue some;语句。它会让方法的控制流程模糊。

### with 语句

不要使用 with 语句。

### this

仅在对象构造器, 方法, 闭包中使用.
this 的语义很特别. 有时它引用一个全局对象(大多数情况下), 调用者的作用域(使用 eval 时), DOM 树中的节点(添加事件处理函数时), 新创建的对象(使用一个构造器), 或者其他对象(如果函数被 call() 或 apply()).
使用时很容易出错, 所以只有在下面两个情况时才能使用:

-   在构造器中
-   对象的方法(包括创建的闭包)中
-   toString() 方法
    应该总是成功调用且不要抛异常.
    可自定义 toString() 方法, 但确保你的实现方法满足: (1) 总是成功 (2) 没有其他负面影响. 如果不满足这两个条件, 那么可能会导致严重的问题, 比如, 如果 toString() 调用了包含 assert 的函数, assert 输出导致失败的对象, 这在 toString() 也会被调用.

## 5. 函数

### 属性和方法

-   文件或类中的 私有 属性, 变量和方法名应该以下划线 "\_" 开头.
-   保护 属性, 变量和方法名不需要下划线开头, 和公共变量名一样.
    更多有关 私有 和 保护的信息见, visibility.

### 方法和函数参数

可选参数以 opt\_ 开头.
函数的参数个数不固定时, 应该添加最后一个参数 var_args 为参数的个数. 你也可以不设置 var_args 而取代使用 arguments.
可选和可变参数应该在 [@param ](/param) 标记中说明清楚. 虽然这两个规定对编译器没有任何影响, 但还是请尽量遵守

### Getters 和 Setters

Getters 和 setters 并不是必要的. 但只要使用它们了, 就请将 getters 命名成 getFoo() 形式, 将 setters 命名成 setFoo(value) 形式. (对于布尔类型的 getters, 使用 isFoo() 也可.)

### 命名空间

-   JavaScript 不支持包和命名空间.
    不容易发现和调试全局命名的冲突, 多个系统集成时还可能因为命名冲突导致很严重的问题. 为了提高 JavaScript 代码复用率, 我们遵循下面的约定以避免冲突.
-   为全局代码使用命名空间
    在全局作用域上, 使用一个唯一的, 与工程/库相关的名字作为前缀标识. 比如, 你的工程是 "Project ixdcw", 那么命名空间前缀可取为 ixdcw.\*.

```
var ixdcw = {};
ixdcw.sleep = function() {
    ...
};
```

明确命名空间所有权
当选择了一个子命名空间, 请确保父命名空间的负责人知道你在用哪个子命名空间, 比如说, 你为工程 'sloths' 创建一个 'hats' 子命名空间, 那确保 Sloth 团队人员知道你在使用 sloth.hats. 外部代码和内部代码使用不同的命名空间
"外部代码" 是指来自于你代码体系的外部, 可以独立编译. 内外部命名应该严格保持独立. 如果你使用了外部库, 他的所有对象都在 foo.hats.* 下, 那么你自己的代码不能在 foo.hats.*下命名, 因为很有可能其他团队也在其中命名.

## 6. 额外的建议

### {}和[]

使用{}替代 new Object()。使用[]替代 new Array()。
当成员名字为连续的整数时使用数组。当成员名字为任意的字符串或名字时使用对象。
使用 Array 和 Object 语法, 而不使用 Array 和 Object 构造器.

```
var a  = [x1, x2, x3];
var a2 = [x1, x2];
var a3 = [x1];
var a4 = [];
var o = {};
var o2 = {
  a: 0,
  b: 1,
  c: 2,
  'strange key': 3
};
```

### 逗号操作符

不要使用逗号操作符，除了 for 语句的控制部分的严格使用。(这不适合逗号操作符，它应该用于对象字面量，数组字面量，var 语句和参数列表。

### 块作用域

在 JavaScript 里块没有作用域，只有方法有作用域。不要使用块，除了复合语句一定需要用到外。

### 赋值表达式

不要在 if 和 while 语句的条件部分做赋值。不要写不易懂的代码。

### ===和!==操作符

始终使用===和!==操作符会更好。和!=操作符会做类型强制转换。特别是，不要使用来和“假”值做比较。

### 令人混淆的加和减

注意不要在“+”后面跟“+”或“++”。这种模式令人混淆。在它们之间插入圆括号来让你的意图更清晰。

```
total = subtotal + +myInput.value;
// is better written as
total = subtotal + (+myInput.value);
```

这样“+ +”就不会被读错成“++”。

### 只用于解析序列化串 (如: 解析 RPC 响应)

eval 方法是 JavaScript 里最滥用的特性。不要使用它。
解析序列化串是指将字节流转换成内存中的数据结构. 比如, 你可能会将一个对象输出成文件形式:

```
users = [
  {
    name: 'Eric',
    id: 37824,
    email: 'jellyvore@myway.com'
  },
  {
    name: 'xtof',
    id: 31337,
    email: 'b4d455h4x0r@google.com'
  },
  ...
];
```

很简单地调用 eval 后, 把表示成文件的数据读取回内存中.
类似的, eval() 对 RPC 响应值进行解码. 例如, 你在使用 XMLHttpRequest 发出一个 RPC 请求后, 通过 eval () 将服务端的响应文本转成 JavaScript 对象:

```
var userOnline = false;
var user = 'nusrat';
var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', 'http://chat.google.com/isUserOnline?user=' + user, false);
xmlhttp.send('');
// Server returns:
// userOnline = true;
if (xmlhttp.status == 200) {
  eval(xmlhttp.responseText);
}
// userOnline is now true.
```

### 其他

不要使用 Function 构造函数。
不要传递字符串给 setTimeout 或者 setInterval。

### JSDoc

-   普通类型 `{boolean}, {Window}, {goog.ui.Menu}`

普通类型的描述方法.

-   复杂类型

参数化类型, 即指定了该类型中包含的一系列"类型参数". 类似于 Java 中的泛型.

> -   字符串数组`{Array.<string>}`
> -   键为字符串, 值为整数的对象类型 `{Object.<string, number>}`

-   联合类型 `{(number|boolean)}`

一个整数或者布尔值. 表示其值可能是 A 类型, 也可能是 B 类型

-   记录类型 `{{myNum: number, myObject}}`

由现有类型组成的类型. 表示包含指定成员及类型的值. 这个例子中, myNum 为 number 类型, myObject 为任意类型.
注意大括号为类型语法的一部分. 比如, `Array.<{length}>`, 表示一具有 length 属性的 Array 对象.

-   可为空类型 `{?number}`

一个整型数或者为 NULL 表示一个值可能是 A 类型或者 null. 默认, 每个对象都是可为空的. 注意: 函数类型不可为空.

-   非空类型 `{!Object}`

一个对象, 但绝不会是 null 值. 说明一个值是类型 A 且肯定不是 null. 默认情况下, 所有值类型 (boolean, number, string, 和 undefined) 不可为空.

-   函数类型 `{function(string, boolean)}`

具有两个参数 ( string 和 boolean) 的函数类型, 返回值未知. 说明一个函数.

-   函数返回类型 `{function(): number}`

函数返回一个整数. 说明函数的返回类型.

-   函数的 this 类型 `{function(this:goog.ui.Menu, string)}`

函数只带一个参数 (string), 并且在上下文 goog.ui.Menu 中执行. 说明函数类型的上下文类型.

-   可变参数 `{function(string, ...[number]): number}`

带一个参数 (字符类型) 的函数类型, 并且函数的参数个数可变, 但参数类型必须为 number. 说明函数的可变长参数.
可变长的参数 (使用 [@param ] 标记) [@param ] {...number} var_args
函数参数个数可变. 使用标记, 说明函数具有不定长参数.

-   函数的 缺省参数 `{function(?string=, number=)}`

函数带一个可空且可选的字符串型参数, 一个可选整型参数. = 语法只针对 function 类型有效. 说明函数的可选参数.
函数 可选参数(使用 [@param ] 标记) [@param ] {number=} opt_argument
number 类型的可选参数. 使用标记, 说明函数具有可选参数.

-   所有类型 `{*}`

表示变量可以是任何类型.

### JS 类型

-   number

Number new Number(true) Number 对象

```
1
1.0
-5
1e5
Math.PI
```

-   string

字符串对象

```
'Hello'
"World"
String(42)    # 字符串值
String    new String('Hello')
new String(42)
```

-   boolean

布尔对象

```
true
false
Boolean(0)    布尔值
Boolean
new Boolean(true)
```

-   RegExp

```
new RegExp('hello')
/world/g
```

-   Date

```
new Date
new Date()
```

-   null

```
null
```

-   undefined

```
undefined
```

-   void

```
function f() {
  return;
}
```

-   Array

```
['foo', 0.3, null]
# 类型不明确的数组
[]
# Array.<number>
[11, 22, 33]   # 整型数组
# Array.<Array.<string>>
[['one', 'two', 'three'], ['foo', 'bar']]    #字符串数组的数组
```

-   Object
    注意, JavaScript 中, 键总是被转换成字符串, 所以 obj['1'] == obj[1]. 也所以, 键在 for...in 循环中是字符串类型. 但在编译器中会明确根据键的类型来查找对象.

```
{}
{foo: 'abc', bar: 123, baz: null}
Object.<string>    {'foo': 'bar'}    值为字符串的对象.
Object.<number, string>    var obj = {};
obj[1] = 'bar';    键为整数, 值为字符串的对象.
```

-   Function

```
function(x, y) {
  return x * y;
}    函数对象
function(number, number): number    function(x, y) {
  return x * y;
}    函数值
SomeClass    /** @constructor */
function SomeClass() {}
#
new SomeClass();
SomeInterface    /** @interface */
function SomeInterface() {}
#
SomeInterface.prototype.draw = function() {};
project.MyClass    /** @constructor */
project.MyClass = function () {}
#
new project.MyClass()
project.MyEnum    /** @enum {string} */
project.MyEnum = {
  BLUE: '#0000dd',
  RED: '#dd0000'
};
```

-   Element
    DOM 中的元素

```
document.createElement('div')
```

-   Node
    DOM 中的节点

```
document.body.firstChild
```

-   HTMLInputElement
    DOM 中, 特定类型的元素.

```
htmlDocument.getElementsByTagName('input')[0]
```

### 函数定义规范及说明

-   内置函数采用下划线前缀命名
-   函数传入的参数使用下划线命名
-   内部定义的参数使用驼峰方式命名
-   jQuery 选择器调用元素的获取使用 `$` 作为前缀

```javascript
// 参数是下划线分隔
exports.countdown = function (btn_selector, str, time, end_str) {
	// 按钮jquery 选择器使用 `$`
	var $btn = $(btn_selector);
	// 这里是驼峰命名
	var countdownHandler = setInterval(_countdown, 1000);
	// ...
	function _countdown() {
		var count_str = str.replace(/\{time\}/, count);
		$btn.text(count_str);
		if (count == 0) {
			$btn.text(displayStr).removeAttr("disabled");
			clearInterval(handlerCountdown);
		}
		count--;
	}
	// ...
};
```

-   代码完成之后不得留有调试代码。
-   js 编写注意性能优化，如获取两次，调用两次可更正为获取一次，调用两次。
-   插件中展示的内容尽量不用 table 标签（ table 标签存在局限性），应用 ul 代替.
-   功能函数前必须添加注释，注释函数功能。
-   语句结束必须有‘;’。
-   if,else 执行语句用花括号‘{}’包裹起来。
-   自编插件注意配置项的必选配置，需判断是否传入。
