# [译] php 中更简洁的三元运算符 ?:

原文地址 [Even shorter ternary operators in PHP using ?:](https://mattstauffer.co/blog/even-shorter-ternary-operators-in-php-using)

今天我发现了 PHP 三元运算符的一个小小的用法. 这给我干涸的大脑一点乐趣!

PHP 三元运算符是对参数赋值时候的一个简洁的主要用法. 一个主要的用法: PHP 三元运算符能够让你在一行代码中描述判定代码, 从而替换掉类似以下的代码:

```php
if (isset($value)) {
    $output = $value;
} else {
    $output = 'No value set.';
}
```

使用以下代码替代:

```php
$output = isset($value) ? $value : 'No value set.';
```

第二个代码例子是非常简洁的用法, 在多种情况下(并非所有), 这是一个非常实用的用法. 有许多关于是否应该使用三元运算符的争辩;让我说, 这就是一个工具, 向其他工具一样, 只是用的正确与否.

常用的语法是 (expression) ? value if truthy : value if falsy.这个表达式可以是一个变量, 测试这个变量是真还是假:

```php
$output = $value ? $value : 'No value set.';
```

问题是: 以上的例子很常用同时也重复的有些烦人: 写两次 $value 就像是感到错误一样.

好在是, 我今天发现在 PHP 5.3 中介绍了一个更简洁的使用三元运算符的语法. 你可以从手册中学到, 但是这里我们怎么样让上边的例子更简洁呢:

```php
$output = $value ?: 'No value set.';
```

这个看起来很熟悉, 这个是因为很像其他的简写运算符:

```php
$value = $value . $other_value;
```

转换成:

```php
$value .= $other_value;
```

为了更简洁, 这个意味着我们可以这样简写并不意味着我们就**应该**这么写. 但是, 当我们写简洁代码的时候, 这种方式会看起来更清楚, 我们**应该**这么写, _(并且这个特性允许我们在多种情况下使用这个运算符[this feature allows us to DRY up the ternary operator in many cases])_
