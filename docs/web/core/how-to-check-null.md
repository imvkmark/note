# [WIP] 怎样在 JavaScript 中检测 `null`

原文地址 : https://javascript.plainenglish.io/how-to-check-for-null-in-javascript-dffab64d8ed5

因为一些历史 bug, `typeof null` 在 JavaScript 中返回 `object` -- 那么我们怎么检测 `null` 呢?

## 什么是 `null` ?

> “The value `null` represents the intentional absence of any object value. It is one of JavaScript's primitive values.” — MDN Docs

The JavaScript primitive type `null` represents an intentional absence of a value — it is usually set on purpose to indicate that a variable has been declared but not yet assigned any value.

This contrasts `null` from the similar primitive value `undefined` , which is an unintentional absence of any object value.

That is because a variable that has been declared but not assigned any value is `undefined`, not `null`.

Unfortunately, `typeof` returns `"object"` when called on a `null` value, because of [a historical bug in JavaScript](https://alexanderell.is/posts/typeof-null/) that will never be fixed.

That means checking for null cannt be performed using `typeof`.

# `null` is falsy

> “`null` is a falsy value (i.e. it evaluates to `false` if coerced to a boolean)” — [Josh Clanton](http://adripofjavascript.com/about/default.htm) at [A Drip of JavaScript](http://adripofjavascript.com/blog/drips/equals-equals-null-in-javascript.html)

The simplest way to check for `null` is to know that `null` evaluates to `false` in conditionals or if coerced to a `[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)` value:

Of course, that does not differentiate `null` from [the other falsy values](https://medium.com/coding-at-dawn/what-are-falsy-values-in-javascript-ca0faa34feb4).

Next, I explore using the `==` or `===` equality operators to [check for null](https://medium.com/javascript-in-plain-english/how-to-check-for-null-in-javascript-dffab64d8ed5).

# Falsy equality using `==`

> “Despite the fact that `null` is [falsy], it isn't considered loosely equal to any of the other falsy values in JavaScript. In fact, the only values that `null` is loosely equal to are `undefined` and itself.” —[Josh Clanton](http://adripofjavascript.com/about/default.htm) at [A Drip of JavaScript](http://adripofjavascript.com/blog/drips/equals-equals-null-in-javascript.html)

One way to check for `null` in JavaScript is to check if a value is loosely equal to `null` using the [double equality ](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3)`[==](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3)`[ operator](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3):

As shown above, `null` is only loosely equal to itself and `undefined`, not to the other falsy values shown.

This can be useful for checking for the absence of value — `null` and `undefined` both indicate an absence of value, thus they are loosely equal (they have the same value even though they are different types).

So, when programming to check if a variable has any value at all before trying to process it, you can use `== null` to check for either `null` or `undefined`.

# Strict equality using `===`

Tomake sure we have exactly a `null` value, excluding any `undefined` values, using the [triple equality ](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3)`[===](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3)`[ operator](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3) will do the trick:

Generally, it is a good idea to catch both `null` and `undefined` values, as both represent an absence of a value.

That means checking for `null` is one of the few times in JavaScript that using `==` is recommended, while [otherwise ](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3)`[===](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3)`[ is generally recommended](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3).

# Comparing == vs === when checking for null

Some JavaScript programmers prefer everything to be explicit for clarity, and there is nothing wrong with that.

Indeed, the code linter JSLint [explicitly disallows ](https://jslint.com/help.html)`[==](https://jslint.com/help.html)` to prevent accidental bugs resulting from type coercion.

Another popular code linter, ESLint, has [similar but more-configurable behavior ](https://eslint.org/docs/rules/eqeqeq)around the use of `==` vs. `===`.

That means that if you (or your linter) are in the habit of always using the strict equality operator `===`, then you can check whether a value strictly equals null OR (`||`) strictly equals undefined instead of using `==`:

It is more verbose than the `==` operator, but everyone who reads your code will clearly know that both `null` and `undefined` are being checked for.

# A real world example of when to check for null

> “One way this error [‘null is not an object’] might occur in a real world example is if you try using a DOM element in your JavaScript before the element is loaded. That’s because the DOM API returns `null` for object references that are blank.” —[ Rollbar](https://rollbar.com/blog/top-10-javascript-errors/) on the Top 10 JavaScript errors

This [TypeError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) (“`null` is not an object”) can occur if the DOM elements have not been created before loading the script, such as if the script higher than the HTML on the page, which is interpreted from top-to-bottom.

The solution would be using an event listener that will notify us when the page is ready, and then running the script.

But still, it might be prudent to check if the DOM element is `null` before trying to access it.

# Use typeof anyway with falsy power

> “Thankfully since `null` isn’t really an object, it’s the only ‘object’ that is a falsy value, empty objects are truthy.” — [Casey Morris](https://medium.com/u/c194ff39a976?source=post_page-----dffab64d8ed5----------------------) in [Daily JS](https://medium.com/dailyjs/rant-js-undefined-vs-null-7f90f203063b)

Another method of checking for `null` is based on the fact that `null` is [falsy](https://medium.com/coding-at-dawn/what-are-falsy-values-in-javascript-ca0faa34feb4), but empty objects are [truthy](https://medium.com/coding-in-simple-english/what-are-truthy-values-in-javascript-e037bdfa76f8), so `null` is the only falsy object.

This can be conveniently checked using the [logical NOT ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Description)`[!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Description)`[ operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Description):

Using `typeof` can be a helpful trick, because if a variable is undeclared, then trying to reference it will throw a `[ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)`.

But, the `typeof` an undeclared value is `undefined`, so using `typeof` can be a good way to check for `null`, `undefined`, and undeclared variables.

# Using `Object.is()`

The [ES6 function ](https://medium.com/coding-at-dawn/es6-object-is-vs-in-javascript-7ce873064719)`[Object.is()](https://medium.com/coding-at-dawn/es6-object-is-vs-in-javascript-7ce873064719)` differs from [the strict ](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3)`[===](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3)`[ and loose ](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3)`[==](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3)`[ equality operators](https://medium.com/better-programming/making-sense-of-vs-in-javascript-f9dbbc6352e3) in how it [checks for ](https://medium.com/coding-in-simple-english/how-to-check-for-nan-in-javascript-4294e555b447)`[NaN](https://medium.com/coding-in-simple-english/how-to-check-for-nan-in-javascript-4294e555b447)` and [negative zero ](https://medium.com/coding-at-dawn/is-negative-zero-0-a-number-in-javascript-c62739f80114)`[-0](https://medium.com/coding-at-dawn/is-negative-zero-0-a-number-in-javascript-c62739f80114)`.

For null, the behavior of `Object.is()` is the same as `===`:

That means that you will need to explicitly check for both `null` and `undefined` if you are using `Object.is()`, which is the helper method checking for changes in state [under the hood in React](https://medium.com/coding-at-dawn/es6-object-is-vs-in-javascript-7ce873064719).

# Conclusion

Checking for null is a common task that every JavaScript developer has to perform at some point or another.

The `typeof` keyword returns `"object"` for `null`, so that means a little bit more effort is required.

Comparisons can be made: `null === null` to check strictly for null or `null == undefined` to check loosely for either null or undefined.

The value `null` is falsy, but empty objects are truthy, so `typeof maybeNull === "object" && !maybeNull` is an easy way to check that a value is not `null`.

Finally, to check if a value has been declared and assigned a value that is neither `null` nor `undefined`, use `typeof`:

Now go out there and check for `null` with confidence!
