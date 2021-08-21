# [译+/WIP] Create React App ReadMe

本项目始于 [Create React App](https://github.com/facebookincubator/create-react-app).本文是其中文版本翻译

接下来你将知道怎样操作基础, 你可以在以下文章中找到最新版.

[here is new](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).这里的翻译版本不一定是最新的

## 更新到最新发布的版本

Create React App 的工具分为两个包 :

* `create-react-app` 是一个全局命令行工具，用于创建新的项目.
* `react-scripts` 是一个开发依赖, 用于产生项目(包含它自己).

基本上不需要升级 `create-react-app` : 它只是将所有的设置委托给 `react-scripts`.

当运行 `create-react-app` 的时候，总是使用最新版本的 `react-script` 创建项目，因此在新创建的应用中会自动获得最新特性和改进

要对原来项目升级新版的 `react-scripts`, [打开变更日志](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), 查看当前使用的版本 (检查 `package.json` , 如果你不确定的话), 然后为新版本应用迁移指令.

大多数情况下，直接修改 `package.json` 中 `react-scripts` 的版本号并且运行 `npm install` 就足够了, 但是最好还是查阅下 [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) 避免潜在的破坏性更新.

我们提交最小化改动, 所以你可以无痛升级 `react-scripts`.

## 发送回馈

打开 [your feedback](https://github.com/facebookincubator/create-react-app/issues) 来进行反馈.

## 目录结构

创建之后, 你的目录结构应该是这个样子
```
my-app/
    README.md
    node_modules/
    package.json
    public/
        index.html
        favicon.ico
    src/
        App.css
        App.js
        App.test.js
        index.css
        index.js
        logo.svg
```

项目创建的时候, **这些文件必须是以指定的文件名存在**:

* `public/index.html` 页面模版;
* `src/index.js` js 入口文件.

你可以删除或者重命名其他文件.

你可以在 `src` 中创建子目录. 为了快速构建, 只有在 `src` 目录下的才会被 Webpack 处理.
你需要 **把所有的 JS 和 CSS 放置到 `src` 目录下**, 否则 Webpack 会找不到的.

只有 `public` 目录下面的文件才能被 `public/index.html` 文件使用
阅读下面的用法说明直销如何在 JavaScript 和 HTML 中使用资源.

然而, 你可以创建更多顶级的目录。它们不会被包含在生产构建中，因此可以用作类似文档的东西

## 可用脚本

在项目根目录下，可以运行以下命令 :

### `npm start`

在开发模式下运行
打开 http://localhost:3000 在浏览器中查看.

当修改源代码之后，浏览器会重载新的资源。同时在控制台中可以看到所有的检查错误信息(jslint, csslint)

### `npm test`

以 `interactive watch` 模式启动 `test runner`。 后面运行测试章节有详细介绍

### `npm run build`

为生产环境构建应用，构建到构建目录中 `build` (默认)。它正确的在生产模式下打包React，并且以最优的性能优化构建。

构建出来的资源都是 `minified`并且文件名还带有 `hash`。经过构建，应用就准备发布了。

可以参考后面的 `部署` 一节，获取更多信息

### `npm run eject`

**注意: 这是不可逆操作. 一旦你 `eject`, 你就不能回头啦.**

如果对构建工具以及配置选择不很满意， 可以随时 `eject`, 这个命令会从项目中移除单个构建依赖.

相应的，它将所有的配置文件和转换依赖(Webpack, Babel, ESLint. 等)拷贝到项目中，这样你可以完全自定义它们。这样的话，除了 `eject` 命令外，所有的命令都依然能工作，但是它们指向的是拷贝脚本，因此你可以调整它们。也就是说你用的是你自己的一套配置的东西.

其实你不必使用 `eject`。默认的配置项目适合小型以及中型部署，你不应该随意的使用这个功能。然而我们知道如果你准备定制它而这个工具不支持，那么这个默认配置就没有什么用了。

## 支持的语言特性和 Polyfills

这个项目支持最新 JavaScript 标准的超集.
除了 [ES6](https://github.com/lukehoban/es6features) 语法特性外, 还支持如下特性:

* [Exponentiation Operator / 幂操作](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties(扩展属性)](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Dynamic import() / 动态导入](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (stage 2 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) 和 [Flow](https://flowtype.org/) 语法.

关于更多 [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-) 的信息.

我们推荐谨慎的使用实验提案，Facebook 在生产代码中大量的使用了这些特性，因此如果将来这些提案有改变的时候, 我们愿意提供 [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb)

> [ps:扩展阅读] : ['译'使用重构件（Codemod）加速 JavaScript 开发](http://www.tuicool.com/articles/faQZ7f6)

注意 **项目仅仅包含了一少部分 ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 通过 [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 通过 [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) 通过 [`whatwg-fetch`](https://github.com/github/fetch).

如果你使用其他 `ES6+` 特性需要 **runtime support(运行环境支持)** (例如 `Array.from()` 或 `Symbol`), 确保手动添加了恰当的 `polyfills`, 或者你所面向的浏览器已经支持了它们.

## 编辑器中的语法高亮

在你喜欢的文本编辑器中配置语法高亮, 参考 [relevant Babel documentation page](https://babeljs.io/docs/editors) 上面的说明. 里边涵盖了主流的编辑器.

## 在编辑器中显示Lint输出

> 注意: 这个特性在 `react-scripts@0.2.0` 或更高版本上可用.
> 他同样在 `npm 3` 或者更高版本可用.

一些编辑器, 包含 Sublime Text, Atom, 和 Visual Studio Code, 提供了 ESLint 插件.

他们不需要纠错. 你应该在终端(Terminal)和浏览器控制台中看到提示输出. 不过, 如果你喜欢在编辑器右侧显示 纠错 结果的话, 下面几步可以帮到你

首先: 你的编辑器需要安装 ESLint 插件. 然后, 添加文件 `.eslintrc` 到你项目的根目录:
```
{
  "extends": "react-app"
}
```

现在你的编辑器应该会显示错误提示信息了.

注意, 现在你编辑 `.eslintrc` 文件的时候, 这些改变 **只会在集成编辑器** 显示. 在这个不会影响到终端和浏览器的控制台输出. 这是因为 `Create React App` 有意的提供了一个提供了一个最小化的配置规则来找出常见的错误.

如果你想在项目中强制使用一款编码风格. 考虑使用 [Prettier](https://github.com/jlongster/prettier) 来替换掉 ESLint 风格规则.

## 在编辑器中 Debugging(VS Code Only)

**这一特性仅仅支持 [Visual Studio Code](https://code.visualstudio.com/)**

Visual Studio Code 支持 Create React App 开箱即用的调试的代码. 这使您可以作为开发人员在不离开编辑器的情况下编写和调试您的 React 代码, 最重要的是，它使您能够拥有一个持续的开发工作流程，在这种情况下，上下文切换是最小的，因为您不必在工具之间切换。

你需要 [VS Code](https://code.visualstudio.com/) 的最新版本和 VS Code [Chrome Debugger Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) 的安装.

然后添加一下的内容到 `launch.json` 文件, 然后吧这个文件放置到根目录的 `.vscode` 文件夹.
```
{
    "version": "0.2.0",
    "configurations": [{
        "name": "Chrome",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:3000",
        "webRoot": "${workspaceRoot}/src",
        "userDataDir": "${workspaceRoot}/.vscode/chrome",
        "sourceMapPathOverrides": {
            "webpack:///src/*": "${webRoot}/*"
        }
    }]
}
```

使用 `npm start` 运行 app, 并通过按F5或单击绿色调试图标开始在VS代码中进行调试. 现在，您可以编写代码、设置断点、对代码进行更改，并从编辑器中调试新修改的代码。

## 改变页面 `<title>`

您可以在生成的项目的 `public` 文件夹中找到 HTML 源文件。你可以编辑 `<title>` 标签，将标题从 “React App” 更改为其他任何内容。

请注意，在通常情况下，你不会经常编辑 `public` 文件夹中的文件。例如，在不接触 HTML 的情况下添加样式表。

如果你需要在文档中动态更新页面标题, 可以使用浏览器 [`document.title`](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) 的 API. 对于更复杂的场景中,当你想改变 `React` 组件的标题, 你可以使用 [React Helmet](https://github.com/nfl/react-helmet), 一个第三方库。

如果您在生产环境中使用自己定义的服务器，并且希望在发送到浏览器之前修改标题，那么您可以遵循 [在服务器中动态生成 meta 标记] 中的建议。或者，您可以将每个页面预先构建为一个静态 HTML 文件，然后加载 JavaScript bundle 文件，这里 [预宣传静态 Html 文件] 有详细介绍。

## 安装依赖 Dependency

生成的项目包括 React 和作为依赖项的 ReactDOM 。它还包括一组用于 Create React App 作为开发依赖的脚本。另外您可以使用 `npm` 安装其他依赖项(例如，React Router):
```
npm install --save <library-name>
```

## 导入组件

这个项目支持 ES6 模块要感谢 Babel 组件. 尽管你依然可以使用 `require()` 和 `module.exports`, 推荐你使用 [`import` and `export`](http://exploringjs.com/es6/ch_modules.html) 来替代.

示例:

### `Button.js`
```
import React, { Component } from 'react';

class Button extends Component {
  render() {
    // ...
  }
}

export default Button; // 不要忘记使用 export default!
```

### `DangerButton.js`
```
import React, { Component } from 'react';
import Button from './Button'; // 从另外一个文件导入一个组件

class DangerButton extends Component {
  render() {
    return <Button color="red" />;
  }
}

export default DangerButton;
```

意识到 [默认导出和命名导出的不同](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281). 这是个常见的错误来源.

当一个模块只导出一个东西(例如, 一个组件)时, 我们建议你使用默认的导入和导出. 这样导入和导出的东西就会一致. `export default Button` 和 `import Button from './Button'`.

命名导出对于导出几个函数的实用程序模块非常有用。一个模块最多可能有一个默认的导出，以及你喜欢的更多的命名导出。

学习更多关于 ES6 模块:

* [When to use the curly braces?](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
* [Exploring ES6: Modules](http://exploringjs.com/es6/ch_modules.html)
* [Understanding ES6: Modules](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)

## 代码拆解

在用户能够使用之前，先不要下载整个应用程序，而代码拆解则允许你将代码分成许多文件然后按需加载。

这个项目设置支持代码通过 [dynamic `import()`](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand) 拆分成多个文件. [proposal](https://github.com/tc39/proposal-dynamic-import) 在第三步. 函数形式的 `import()` 使用模块名称作为参数并且返回一个 [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 它用来解析模块名称的命名空间

例如:

### `moduleA.js`
```
const moduleA = 'Hello';

export { moduleA };
```

### `App.js`
```
import React, { Component } from 'react';

class App extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;
```

这将把 `moduleA.js` 及其所有独特的依赖项作为单独的块，只有在用户点击 'Load' 按钮后才会加载。

如果您愿意，也可以在 `async` / `await` 语法中使用

## 添加样式

这个项目配置使用 [Webpack](https://webpack.js.org/) 来处理所有的资源文件。Webpack提供了一种自定义的“扩展”概念，超越了JavaScript的 `import` 。为了表示 JavaScript 文件依赖于 CSS 文件，您需要**从 JavaScript 文件中导入 CSS** :

### `Button.css`
```
.Button {
  padding: 20px;
}
```

### `Button.js`
```
import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}
```

**这对于 React 来说不是必须的** 但是很多人觉得这个功能很方便。您可以阅读此方法的好处[点击这里](https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b)。然而，你应该认识到，这使得你的代码对于其他的构建工具和环境来讲不如 Webpack 更方便。

在开发中，通过这种方式表示依赖关系，在编辑它们时，可以让您的样式重新加载。在生产环境中，所有 CSS 文件都将被连接到一个单一的小文件中。在构建输出中使用 css 文件。

如果你关心的是使用 Webpack-specific 的语义，那么您可以将所有CSS放到 `src/index.css` 中。它仍然是从 `src/index.js`导入的，但是如果您以后迁移到不同的构建工具，您可以随时删除该导入。

## CSS 发布处理

这个项目配置压缩你的 CSS 和通过 [Autoprefixer](https://github.com/postcss/autoprefixer) 自动添加前缀,所以你不需要担心。

例如:
```
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

之后:
```
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
```

如果你出于某种原因需要禁用 autoprefixing [follow this section](https://github.com/postcss/autoprefixer#disabling)。

## 添加 Css 预处理器 (Sass, Less etc.)

一般来说，我们建议不要在不同的组件上重用相同的 CSS 类。例如，不在 `<AcceptButton>` 和 `<RejectButton>` 组件中使用 `.Button` 样式。我们推荐创建一个 `<Button>` 组件来使用 `.Button` 样式, 两个 `<AcceptButton>` 和 `<RejectButton>` 可以渲染(但[不继承](https://facebook.github.io/react/docs/composition-vs-inheritance.html))。

遵循这个规则通常会使 CSS 预处理器变得不那么有用，因为诸如 mixin 和嵌套之类的特性被组件组合所取代。但是，如果您觉得它很有价值，可以集成一个 CSS 预处理器。在这一过程中，我们将使用 Sass，但你也可以使用 Less ，或者另一种选择。

首先，我们在命令行安装 Sass:

```
npm install node-sass-chokidar --save-dev
```

然后在 `package.json` 中添加如下 `scripts`:
```
   "scripts": {
+    "build-css": "node-sass-chokidar src/ -o src/",
+    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test --env=jsdom",
```

> 注意: 使用不同的预处理器, 根据你的预处理器文档替换掉 `build-css` 和 `watch-css` 命令.

现在你可以把 `src/App.css` 命名为 `src/App.scss` 并且运行 `npm run watch-css`. 监听工具会在 `src` 的子目录中找到每个 `Sass` 文件，并在它旁边创建相应的 CSS 文件，这样会重新生成 `src/App.css`。然而 `src/App.js` 依然会导入 `src/App.css`, 文件变成了应用的一部分, 你现在可以编辑 `src/App.scss` 并且 `src/App.css` 会自动生成.

在 Sass 文件中共享变量, 你可以使用 Sass 导入. 例如 `src/App.scss` 和其他组件样式文件都可以调用定义了变量的文件 `@import "./shared.scss";`

不使用相对路径来导入文件, 你可以在 `package.json` 的命令中添加 `--include-path` 选项.
```
"build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
"watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
```

这允许你做如下的导入
```
@import 'styles/_colors.scss'; // assuming a styles directory under src/
@import 'nprogress/nprogress'; // importing a css file from the nprogress node module
```

这样你可能会想在代码版本控制中移除所有的 css 文件, 只需要添加 `src/**/*.css` 至 `.gitignore` 文件就可以. 一般来说，将构建生成的文件保持在源码控制之外是一种很好的做法。

作为最后一步，您可能会发现在 `npm start` 时自动运行 `watch-css` 很方便，并且把 `build-css` 作为 `npm run build` 构建打包的一部分也很方便。你可以使用 `&&` 操作符按顺序执行两个脚本。但是，没有一个跨平台的方法可以并行运行两个脚本，因此我们将为这个安装一个包:
```
npm install --save-dev npm-run-all
```

然后，我们可以更改 `start` 和 `build` 脚本，以包括 CSS 预处理器命令:
```
   "scripts": {
     "build-css": "node-sass-chokidar src/ -o src/",
     "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build": "npm run build-css && react-scripts build",
     "test": "react-scripts test --env=jsdom",
     "eject": "react-scripts eject"
   }
```

现在 `npm start` 和 `npm run build` 同样构建 Sass 文件.

**为什么选择 `node-sass-chokidar`?**

`node-sass` 根据报告存在以下问题:

* `node-sass --watch` 被指出在虚拟机/docker 中运行时候存在一定几率的 *性能问题* .

* 无限样式编辑 [#1939](https://github.com/facebookincubator/create-react-app/issues/1939)

* `node-sass` 在目录中检测新文件纯在问题 [#1891](https://github.com/sass/node-sass/issues/1891)

`node-sass-chokidar` 可以解决这些问题.

## 添加图片, 字体和文件

With Webpack, using static assets like images and fonts works similarly to CSS.

You can **`import` a file right in a JavaScript module**. This tells Webpack to include that file in the bundle. Unlike CSS imports, importing a file gives you a string value. This value is the final path you can reference in your code, e.g. as the `src` attribute of an image or the `href` of a link to a PDF.

To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a [data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. SVG files are excluded due to [#1153](https://github.com/facebookincubator/create-react-app/issues/1153).

Here is an example:
```
import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.

This works in CSS too:
```
.Logo {
  background-image: url(./logo.png);
}
```

Webpack finds all relative module references in CSS (they start with `./`) and replaces them with the final paths from the compiled bundle. If you make a typo or accidentally delete an important file, you will see a compilation error, just like when you import a non-existent JavaScript module. The final filenames in the compiled bundle are generated by Webpack from content hashes. If the file content changes in the future, Webpack will give it a different name in production so you don’t need to worry about long-term caching of assets.

Please be advised that this is also a custom feature of Webpack.

**It is not required for React** but many people enjoy it (and React Native uses a similar mechanism for images).An alternative way of handling static assets is described in the next section.

## 使用 `public` 文件夹

> Note: this feature is available with `react-scripts@0.5.0` and higher.

### Changing the HTML

The `public` folder contains the HTML file so you can tweak it, for example, to set the page title.
The `<script>` tag with the compiled code will be added to it automatically during the build process.

### Adding Assets Outside of the Module System

You can also add other assets to the `public` folder.

Note that we normally encourage you to `import` assets in JavaScript files instead.
For example, see the sections on adding a stylesheet and adding images and fonts.
This mechanism provides a number of benefits:

* Scripts and stylesheets get minified and bundled together to avoid extra network requests.
* Missing files cause compilation errors instead of 404 errors for your users.
* Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.

However there is an **escape hatch** that you can use to add an asset outside of the module system.

If you put a file into the `public` folder, it will **not** be processed by Webpack. Instead it will be copied into the build folder untouched. To reference assets in the `public` folder, you need to use a special variable called `PUBLIC_URL`.

Inside `index.html`, you can use it like this:
```
<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
```

Only files inside the `public` folder will be accessible by `%PUBLIC_URL%` prefix. If you need to use a file from `src`or `node_modules`, you’ll have to copy it there to explicitly specify your intention to make this file a part of the build.

When you run `npm run build`, Create React App will substitute `%PUBLIC_URL%` with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL.

In JavaScript code, you can use `process.env.PUBLIC_URL` for similar purposes:
```
render() {
  // Note: this is an escape hatch and should be used sparingly!
  // Normally we recommend using `import` for getting asset URLs
  // as described in “Adding Images and Fonts” above this section.
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
```

Keep in mind the downsides of this approach:

* None of the files in `public` folder get post-processed or minified.
* Missing files will not be called at compilation time, and will cause 404 errors for your users.
* Result filenames won’t include content hashes so you’ll need to add query arguments or rename them every time they change.

### When to Use the `public` Folder

Normally we recommend importing stylesheets, images, and fonts from JavaScript.
The `public` folder is useful as a workaround for a number of less common cases:

* You need a file with a specific name in the build output, such as [`manifest.webmanifest`](https://developer.mozilla.org/en-US/docs/Web/Manifest).
* You have thousands of images and need to dynamically reference their paths.
* You want to include a small script like [`pace.js`](http://github.hubspot.com/pace/docs/welcome/) outside of the bundled code.
* Some library may be incompatible with Webpack and you have no other option but to include it as a `<script>`tag.

Note that if you add a `<script>` that declares global variables, you also need to read the next section on using them.

## 使用全局变量

When you include a script in the HTML file that defines global variables and try to use one of these variables in the code, the linter will complain because it cannot see the definition of the variable.

You can avoid this by reading the global variable explicitly from the `window` object, for example:
```
const $ = window.$;
```

This makes it obvious you are using a global variable intentionally rather than because of a typo.

Alternatively, you can force the linter to ignore any line by adding `// eslint-disable-line` after it.

## 添加 Bootstrap

You don’t have to use [React Bootstrap](https://react-bootstrap.github.io/) together with React but it is a popular library for integrating Bootstrap with React apps. If you need it, you can integrate it with Create React App by following these steps:

Install React Bootstrap and Bootstrap from npm. React Bootstrap does not include Bootstrap CSS so this needs to be installed as well:
```
npm install react-bootstrap --save
npm install bootstrap@3 --save
```

Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of your `src/index.js` file:
```
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
```

Import required React Bootstrap components within `src/App.js` file or your custom component files:
```
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
```

Now you are ready to use the imported React Bootstrap components within your component hierarchy defined in the render method. Here is an example [`App.js`](https://gist.githubusercontent.com/gaearon/85d8c067f6af1e56277c82d19fd4da7b/raw/6158dd991b67284e9fc8d70b9d973efe87659d72/App.js) redone using React Bootstrap.

### Using a Custom Theme

Sometimes you might need to tweak the visual styles of Bootstrap (or equivalent package).We suggest the following approach:

* Create a new package that depends on the package you wish to customize, e.g. Bootstrap.
* Add the necessary build steps to tweak the theme, and publish your package on npm.
* Install your own theme npm package as a dependency of your app.

Here is an example of adding a [customized Bootstrap](https://medium.com/@tacomanator/customizing-create-react-app-aa9ffb88165) that follows these steps.

## 添加 Flow

Flow is a static type checker that helps you write code with fewer bugs. Check out this [introduction to using static types in JavaScript](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb) if you are new to this concept.

Recent versions of [Flow](http://flowtype.org/) work with Create React App projects out of the box.

To add Flow to a Create React App project, follow these steps:

1. Run `npm install --save-dev flow-bin` (or `yarn add --dev flow-bin`).
2. Add `"flow": "flow"` to the `scripts` section of your `package.json`.
3. Run `npm run flow -- init` (or `yarn flow -- init`) to create a [`.flowconfig` file](https://flowtype.org/docs/advanced-configuration.html) in the root directory.
4. Add `// @flow` to any files you want to type check (for example, to `src/App.js`).

Now you can run `npm run flow` (or `yarn flow`) to check the files for type errors.
You can optionally use an IDE like [Nuclide](https://nuclide.io/docs/languages/flow/) for a better integrated experience.
In the future we plan to integrate it into Create React App even more closely.

To learn more about Flow, check out [its documentation](https://flowtype.org/).

## 添加自定义环境变量

> Note: this feature is available with `react-scripts@0.2.3` and higher.

Your project can consume variables declared in your environment as if they were declared locally in your JS files. By
default you will have `NODE_ENV` defined for you, and any other environment variables starting with
`REACT_APP_`.

**The environment variables are embedded during the build time**. Since Create React App produces a static HTML/CSS/JS bundle, it can’t possibly read them at runtime. To read them at runtime, you would need to load HTML into memory on the server and replace placeholders in runtime, just like described here. Alternatively you can rebuild the app on the server anytime you change them.

> Note: You must create custom environment variables beginning with `REACT_APP_`. Any other variables except `NODE_ENV` will be ignored to avoid accidentally [exposing a private key on the machine that could have the same name](https://github.com/facebookincubator/create-react-app/issues/865#issuecomment-252199527). Changing any environment variables will require you to restart the development server if it is running.

These environment variables will be defined for you on `process.env`. For example, having an environment
variable named `REACT_APP_SECRET_CODE` will be exposed in your JS as `process.env.REACT_APP_SECRET_CODE`.

There is also a special built-in environment variable called `NODE_ENV`. You can read it from `process.env.NODE_ENV`. When you run `npm start`, it is always equal to `'development'`, when you run `npm test` it is always equal to `'test'`, and when you run `npm run build` to make a production bundle, it is always equal to `'production'`. **You cannot override `NODE_ENV` manually.** This prevents developers from accidentally deploying a slow development build to production.

These environment variables can be useful for displaying information conditionally based on where the project is
deployed or consuming sensitive data that lives outside of version control.

First, you need to have environment variables defined. For example, let’s say you wanted to consume a secret defined
in the environment inside a `<form>`:
```
render() {
  return (
    <div>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
      </form>
    </div>
  );
}
```

During the build, `process.env.REACT_APP_SECRET_CODE` will be replaced with the current value of the `REACT_APP_SECRET_CODE` environment variable. Remember that the `NODE_ENV` variable will be set for you automatically.

When you load the app in the browser and inspect the `<input>`, you will see its value set to `abcdef`, and the bold text will show the environment provided when using `npm start`:
```
<div>
  <small>You are running this application in <b>development</b> mode.</small>
  <form>
    <input type="hidden" value="abcdef" />
  </form>
</div>
```

The above form is looking for a variable called `REACT_APP_SECRET_CODE` from the environment. In order to consume this
value, we need to have it defined in the environment. This can be done using two ways: either in your shell or in
a `.env` file. Both of these ways are described in the next few sections.

Having access to the `NODE_ENV` is also useful for performing actions conditionally:
```
if (process.env.NODE_ENV !== 'production') {
  analytics.disable();
}
```

When you compile the app with `npm run build`, the minification step will strip out this condition, and the resulting bundle will be smaller.

### Referencing Environment Variables in the HTML

> Note: this feature is available with `react-scripts@0.9.0` and higher.

You can also access the environment variables starting with `REACT_APP_` in the `public/index.html`. For example:
```
<title>%REACT_APP_WEBSITE_NAME%</title>
```

Note that the caveats from the above section apply:

* Apart from a few built-in variables (`NODE_ENV` and `PUBLIC_URL`), variable names must start with `REACT_APP_` to work.
* The environment variables are injected at build time. If you need to inject them at runtime, follow this approach instead.

### Adding Temporary Environment Variables In Your Shell

Defining environment variables can vary between OSes. It’s also important to know that this manner is temporary for the
life of the shell session.

#### Windows (cmd.exe)
```
set REACT_APP_SECRET_CODE=abcdef&&npm start
```

(Note: the lack of whitespace is intentional.)

#### Linux, macOS (Bash)
```
REACT_APP_SECRET_CODE=abcdef npm start
```

### Adding Development Environment Variables In `.env`

> Note: this feature is available with `react-scripts@0.5.0` and higher.

To define permanent environment variables, create a file called `.env` in the root of your project:
```
REACT_APP_SECRET_CODE=abcdef
```

`.env` files **should be** checked into source control (with the exclusion of `.env*.local`).

#### What other `.env` files are can be used?

> Note: this feature is **available with `react-scripts@1.0.0` and higher**.

* `.env`: Default.
* `.env.local`: Local overrides. **This file is loaded for all environments except test.**
* `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
* `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific settings.

Files on the left have more priority than files on the right:

* `npm start`: `.env.development.local`, `.env.development`, `.env.local`, `.env`
* `npm run build`: `.env.production.local`, `.env.production`, `.env.local`, `.env`
* `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

These variables will act as the defaults if the machine does not explicitly set them.Please refer to the [dotenv documentation](https://github.com/motdotla/dotenv) for more details.

> Note: If you are defining environment variables for development, your CI and/or hosting platform will most likely need
> these defined as well. Consult their documentation how to do this. For example, see the documentation for [Travis CI](https://docs.travis-ci.com/user/environment-variables/) or [Heroku](https://devcenter.heroku.com/articles/config-vars).

## 能否使用修饰符?

Many popular libraries use [decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841) in their documentation.Create React App doesn’t support decorator syntax at the moment because:

* It is an experimental proposal and is subject to change.
* The current specification version is not officially supported by Babel.
* If the specification changes, we won’t be able to write a codemod because we don’t use them internally at Facebook.

However in many cases you can rewrite decorator-based code without decorators just as fine.Please refer to these two threads for reference:

* [#214](https://github.com/facebookincubator/create-react-app/issues/214)
* [#411](https://github.com/facebookincubator/create-react-app/issues/411)

Create React App will add decorator support when the specification advances to a stable stage.

## 集成 API 后端

These tutorials will help you to integrate your app with an API backend running on another port,
using `fetch()` to access it.

### Node

Check out [this tutorial](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/).
You can find the companion GitHub repository [here](https://github.com/fullstackreact/food-lookup-demo).

### Ruby on Rails

Check out [this tutorial](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/).
You can find the companion GitHub repository [here](https://github.com/fullstackreact/food-lookup-demo-rails).

## 在开发模式集成 API 请求

> Note: this feature is available with `react-scripts@0.2.3` and higher.

People often serve the front-end React app from the same host and port as their backend implementation.For example, a production setup might look like this after the app is deployed:
```
/             - static server returns index.html with React app
/todos        - static server returns index.html with React app
/api/todos    - server handles any /api/* requests using the backend implementation
```

Such setup is **not** required. However, if you **do** have a setup like this, it is convenient to write requests like `fetch('/api/todos')` without worrying about redirecting them to another host or port during development.

To tell the development server to proxy any unknown requests to your API server in development, add a `proxy` field to your `package.json`, for example:
```
  "proxy": "http://localhost:4000",
```

This way, when you `fetch('/api/todos')` in development, the development server will recognize that it’s not a static asset, and will proxy your request to `http://localhost:4000/api/todos` as a fallback. The development server will only attempt to send requests without a `text/html` accept header to the proxy.

Conveniently, this avoids [CORS issues](http://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations) and error messages like this in development:
```
Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

Keep in mind that `proxy` only has effect in development (with `npm start`), and it is up to you to ensure that URLs like `/api/todos` point to the right thing in production. You don’t have to use the `/api` prefix. Any unrecognized request without a `text/html` accept header will be redirected to the specified `proxy`.

The `proxy` option supports HTTP, HTTPS and WebSocket connections.If the `proxy` option is **not** flexible enough for you, alternatively you can:

* Configure the proxy yourself
* Enable CORS on your server ([here’s how to do it for Express](http://enable-cors.org/server_expressjs.html)).
* Use environment variables to inject the right server host and port into your app.

### "Invalid Host Header" Errors After Configuring Proxy

When you enable the `proxy` option, you opt into a more strict set of host checks. This is necessary because leaving the backend open to remote hosts makes your computer vulnerable to DNS rebinding attacks. The issue is explained in [this article](https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a) and [this issue](https://github.com/webpack/webpack-dev-server/issues/887).

This shouldn’t affect you when developing on `localhost`, but if you develop remotely like [described here](https://github.com/facebookincubator/create-react-app/issues/2271), you will see this error in the browser after enabling the `proxy` option:

> Invalid Host header

To work around it, you can specify your public development host in a file called `.env.development` in the root of your project:
```
HOST=mypublicdevhost.com
```

If you restart the development server now and load the app from the specified host, it should work.

If you are still having issues or if you’re using a more exotic environment like a cloud editor, you can bypass the host check completely by adding a line to `.env.development.local`. **Note that this is dangerous and exposes your machine to remote code execution from malicious websites:**
```
# NOTE: THIS IS DANGEROUS!
# It exposes your machine to attacks from the websites you visit.
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

We don’t recommend this approach.

### Configuring the Proxy Manually

> Note: this feature is available with `react-scripts@1.0.0` and higher.

If the `proxy` option is **not** flexible enough for you, you can specify an object in the following form (in `package.json`).You may also specify any configuration value [`http-proxy-middleware`](https://github.com/chimurai/http-proxy-middleware#options) or [`http-proxy`](https://github.com/nodejitsu/node-http-proxy#options) supports.
```
{
  // ...
  "proxy": {
    "/api": {
      "target": "<url>",
      "ws": true
      // ...
    }
  }
  // ...
}
```

All requests matching this path will be proxies, no exceptions. This includes requests for `text/html`, which the standard `proxy` option does not proxy.

If you need to specify multiple proxies, you may do so by specifying additional entries.
You may also narrow down matches using `*` and/or `**`, to match the path exactly or any subpath.
```
{
  // ...
  "proxy": {
    // Matches any request starting with /api
    "/api": {
      "target": "<url_1>",
      "ws": true
      // ...
    },
    // Matches any request starting with /foo
    "/foo": {
      "target": "<url_2>",
      "ssl": true,
      "pathRewrite": {
        "^/foo": "/foo/beta"
      }
      // ...
    },
    // Matches /bar/abc.html but not /bar/sub/def.html
    "/bar/*.html": {
      "target": "<url_3>",
      // ...
    },
    // Matches /bar/abc.html and /bar/sub/def.html
    "/baz/**/*.html": {
      "target": "<url_4>"
      // ...
    }
  }
  // ...
}
```

## 在开发中使用 HTTPS

> Note: this feature is available with `react-scripts@0.4.0` and higher.

You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using the "proxy" feature to proxy requests to an API server when that API server is itself serving HTTPS.

To do this, set the `HTTPS` environment variable to `true`, then start the dev server as usual with `npm start`:

#### Windows (cmd.exe)
```
set HTTPS=true&&npm start
```

(Note: the lack of whitespace is intentional.)

#### Linux, macOS (Bash)
```
HTTPS=true npm start
```

Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

## 在服务端生成动态 `<meta>` 标签

Since Create React App doesn’t support server rendering, you might be wondering how to make `<meta>` tags dynamic and reflect the current URL. To solve this, we recommend to add placeholders into the HTML, like this:
```
<!doctype html>
<html lang="en">
  <head>
    <meta property="og:title" content="__OG_TITLE__">
    <meta property="og:description" content="__OG_DESCRIPTION__">
```

Then, on the server, regardless of the backend you use, you can read `index.html` into memory and replace `__OG_TITLE__`, `__OG_DESCRIPTION__`, and any other placeholders with values depending on the current URL. Just make sure to sanitize and escape the interpolated values so that they are safe to embed into HTML!

If you use a Node server, you can even share the route matching logic between the client and the server. However duplicating it also works fine in simple cases.

## 预渲染 HTML 文件

If you’re hosting your `build` with a static hosting provider you can use [react-snapshot](https://www.npmjs.com/package/react-snapshot) to generate HTML pages for each route, or relative link, in your application. These pages will then seamlessly become active, or “hydrated”, when the JavaScript bundle has loaded.

There are also opportunities to use this outside of static hosting, to take the pressure off the server when generating and caching routes.

The primary benefit of pre-rendering is that you get the core content of each page *with* the HTML payload—regardless of whether or not your JavaScript bundle successfully downloads. It also increases the likelihood that each route of your application will be picked up by search engines.

You can read more about [zero-configuration pre-rendering (also called snapshotting) here](https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319).

## 从服务端插入页面数据

Similarly to the previous section, you can leave some placeholders in the HTML that inject global variables, for example:
```
<!doctype html>
<html lang="en">
  <head>
    <script>
      window.SERVER_DATA = __SERVER_DATA__;
    </script>
```

Then, on the server, you can replace `__SERVER_DATA__` with a JSON of real data right before sending the response. The client code can then read `window.SERVER_DATA` to use it. **Make sure to [sanitize the JSON before sending it to the client](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0) as it makes your app vulnerable to XSS attacks.**

## 运行 Tests

> Note: this feature is available with `react-scripts@0.3.0` and higher.>[Read the migration guide to learn how to enable it in older projects!](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md#migrating-from-023-to-030)

Create React App uses [Jest](https://facebook.github.io/jest/) as its test runner. To prepare for this integration, we did a [major revamp](https://facebook.github.io/jest/blog/2016/09/01/jest-15.html) of Jest so if you heard bad things about it years ago, give it another try.

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

### Command Line Interface

When you run `npm test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `npm start` recompiles the code.

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs. You can learn the commands from the “Watch Usage” note that the watcher prints after every run:

![](/_static/images/media/15892519602191/15892529485262.jpg)


### Version Control Integration

By default, when you run `npm test`, Jest will only run the tests related to files changed since the last commit. This is an optimization designed to make your tests runs fast regardless of how many tests you have. However it assumes that you don’t often commit the code that doesn’t pass the tests.

Jest will always explicitly mention that it only ran tests related to the files changed since the last commit. You can also press `a` in the watch mode to force Jest to run all tests.

Jest will always run all tests on a continuous integration server or if the project is not inside a Git or Mercurial repository.

### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:
```
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

All `expect()` matchers supported by Jest are [extensively documented here](http://facebook.github.io/jest/docs/expect.html).You can also use [`jest.fn()` and `expect(fn).toBeCalled()`](http://facebook.github.io/jest/docs/expect.html#tohavebeencalled) to create “spies” or mock functions.

### Testing Components

There is a broad spectrum of component testing techniques. They range from a “smoke test” verifying that a component renders without throwing, to shallow rendering and testing some of the output, to full rendering and testing component lifecycle and state changes.

Different projects choose different testing tradeoffs based on how often components change, and how much logic they contain. If you haven’t decided on a testing strategy yet, we recommend that you start with creating simple smoke tests for your components:
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

This test mounts a component and makes sure that it didn’t throw during rendering. Tests like this provide a lot value with very little effort so they are great as a starting point, and this is the test you will find in `src/App.test.js`.

When you encounter bugs caused by changing components, you will gain a deeper insight into which parts of them are worth testing in your application. This might be a good time to introduce more specific tests asserting specific expected output or behavior.

If you’d like to test components in isolation from the child components they render, we recommend using [`shallow()`rendering API](http://airbnb.io/enzyme/docs/api/shallow.html) from [Enzyme](http://airbnb.io/enzyme/). You can write a smoke test with it too:
```
npm install --save-dev enzyme react-test-renderer
```
```
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
```

Unlike the previous smoke test using `ReactDOM.render()`, this test only renders `<App>` and doesn’t go deeper. For example, even if `<App>` itself renders a `<Button>` that throws, this test will pass. Shallow rendering is great for isolated unit tests, but you may still want to create some full rendering tests to ensure the components integrate correctly. Enzyme supports [full rendering with `mount()`](http://airbnb.io/enzyme/docs/api/mount.html), and you can also use it for testing state changes and component lifecycle.

You can read the [Enzyme documentation](http://airbnb.io/enzyme/) for more testing techniques. Enzyme documentation uses Chai and Sinon for assertions but you don’t have to use them because Jest provides built-in `expect()` and `jest.fn()` for spies.

Here is an example from Enzyme documentation that asserts specific output, rewritten to use Jest matchers:
```
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
```

All Jest matchers are [extensively documented here](http://facebook.github.io/jest/docs/expect.html).Nevertheless you can use a third-party assertion library like [Chai](http://chaijs.com/) if you want to, as described below.

Additionally, you might find [jest-enzyme](https://github.com/blainekasten/enzyme-matchers) helpful to simplify your tests with readable matchers. The above `contains`code can be written simpler with jest-enzyme.
```
expect(wrapper).toContainReact(welcome)
```

To setup jest-enzyme with Create React App, follow the instructions for initializing your test environment to import `jest-enzyme`. **Note that currently only version 2.x is compatible with Create React App.**
```
npm install --save-dev jest-enzyme@2.x
```
```
// src/setupTests.js
import 'jest-enzyme';
```

### Using Third Party Assertion Libraries

We recommend that you use `expect()` for assertions and `jest.fn()` for spies. If you are having issues with them please [file those against Jest](https://github.com/facebook/jest/issues/new), and we’ll fix them. We intend to keep making them better for React, supporting, for example, [pretty-printing React elements as JSX](https://github.com/facebook/jest/pull/1566).

However, if you are used to other libraries, such as [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/), or if you have existing code using them that you’d like to port over, you can import them normally like this:
```
import sinon from 'sinon';
import { expect } from 'chai';
```

and then use them in your tests like you normally do.

### Initializing Test Environment

> Note: this feature is available with `react-scripts@0.4.0` and higher.

If your app uses a browser API that you need to mock in your tests or if you just need a global setup before running your tests, add a `src/setupTests.js` to your project. It will be automatically executed before running your tests.

For example:

#### `src/setupTests.js`
```
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock
```

### Focusing and Excluding Tests

You can replace `it()` with `xit()` to temporarily exclude a test from being executed.Similarly, `fit()` lets you focus on a specific test without running any other tests.

### Coverage Reporting

Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.Run `npm test -- --coverage` (note extra `--` in the middle) to include a coverage report like this:

![](/_static/images/media/15892519602191/15892544790429.jpg)


Note that tests run much slower with coverage so it is recommended to run it separately from your normal workflow.

### Continuous Integration

By default `npm test` runs the watcher with interactive CLI. However, you can force it to run tests once and finish the process by setting an environment variable called `CI`.

When creating a build of your application with `npm run build` linter warnings are not checked by default. Like `npm test`, you can force the build to perform a linter warning check by setting the environment variable `CI`. If any warnings are encountered then the build fails.

Popular CI servers already set the environment variable `CI` by default but you can do this yourself too:

### On CI servers

#### Travis CI

1. Following the [Travis Getting started](https://docs.travis-ci.com/user/getting-started/) guide for syncing your GitHub repository with Travis. You may need to initialize some settings manually in your [profile](https://travis-ci.org/profile) page.
2. Add a `.travis.yml` file to your git repository.
```
language: node_js
node_js:
  - 4
  - 6
cache:
  directories:
    - node_modules
script:
  - npm test
  - npm run build
```

1. Trigger your first build with a git push.
2. [Customize your Travis CI Build](https://docs.travis-ci.com/user/customizing-the-build/) if needed.

### On your own environment

##### Windows (cmd.exe)
```
set CI=true&&npm test
```
```
set CI=true&&npm run build
```

(Note: the lack of whitespace is intentional.)

##### Linux, macOS (Bash)
```
CI=true npm test
```
```
CI=true npm run build
```

The test command will force Jest to run tests once instead of launching the watcher.

> If you find yourself doing this often in development, please [file an issue](https://github.com/facebookincubator/create-react-app/issues/new) to tell us about your use case because we want to make watcher the best experience and are open to changing how it works to accommodate more workflows.

The build command will check for linter warnings and fail if any are found.

### Disabling jsdom

By default, the `package.json` of the generated project looks like this:
```
  // ...
  "scripts": {
    // ...
    "test": "react-scripts test --env=jsdom"
  }
```

If you know that none of your tests depend on [jsdom](https://github.com/tmpvar/jsdom), you can safely remove `--env=jsdom`, and your tests will run faster.To help you make up your mind, here is a list of APIs that **need jsdom**:

* Any browser globals like `window` and `document`
* [`ReactDOM.render()`](https://facebook.github.io/react/docs/top-level-api.html#reactdom.render)
* [`TestUtils.renderIntoDocument()`](https://facebook.github.io/react/docs/test-utils.html#renderintodocument) ([a shortcut](https://github.com/facebook/react/blob/34761cf9a252964abfaab6faf74d473ad95d1f21/src/test/ReactTestUtils.js#L83-L91) for the above)
* [`mount()`](http://airbnb.io/enzyme/docs/api/mount.html) in [Enzyme](http://airbnb.io/enzyme/index.html)

In contrast, **jsdom is not needed** for the following APIs:

* [`TestUtils.createRenderer()`](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) (shallow rendering)
* [`shallow()`](http://airbnb.io/enzyme/docs/api/shallow.html) in [Enzyme](http://airbnb.io/enzyme/index.html)

Finally, jsdom is also not needed for [snapshot testing](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html).

### Snapshot Testing

Snapshot testing is a feature of Jest that automatically generates text snapshots of your components and saves them on the disk so if the UI output changes, you get notified without manually writing any assertions on the component output. [Read more about snapshot testing.](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html)

### Editor Integration

If you use [Visual Studio Code](https://code.visualstudio.com/), there is a [Jest extension](https://github.com/orta/vscode-jest) which works with Create React App out of the box. This provides a lot of IDE-like features while using a text editor: showing the status of a test run with potential fail messages inline, starting and stopping the watcher automatically, and offering one-click snapshot updates.

![](/_static/images/media/15892519602191/15892546162355.jpg)




## 制作先进的 Web App

By default, the production build is a fully functional, offline-first

[Progressive Web App](https://developers.google.com/web/progressive-web-apps/).

Progressive Web Apps are faster and more reliable than traditional web pages, and provide an engaging mobile experience:

* All static site assets are cached so that your page loads fast on subsequent visits, regardless of network connectivity (such as 2G or 3G). Updates are downloaded in the background.
* Your app will work regardless of network state, even if offline. This means your users will be able to use your app at 10,000 feet and on the Subway.
* On mobile devices, your app can be added directly to the user's home screen, app icon and all. You can also re-engage users using web **push notifications**. This eliminates the need for the app store.

The [`sw-precache-webpack-plugin`](https://github.com/goldhand/sw-precache-webpack-plugin)
is integrated into production configuration,
and it will take care of generating a service worker file that will automatically
precache all of your local assets and keep them up to date as you deploy updates.
The service worker will use a [cache-first strategy](https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network)
for handling all requests for local assets, including the initial HTML, ensuring
that you web app is reliably fast, even on a slow or unreliable network.

If you would prefer not to enable service workers prior to your initial
production deployment, then remove the call to `serviceWorkerRegistration.register()`
from `src/index.js`.

If you had previously enabled service workers in your production deployment and
have decided that you would like to disable them for all your existing users,
you can swap out the call to `serviceWorkerRegistration.register()` in

`src/index.js` with a call to `serviceWorkerRegistration.unregister()`.
After the user visits a page that has `serviceWorkerRegistration.unregister()`,
the service worker will be uninstalled.

### Offline-First Considerations

1. Service workers [require HTTPS](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers#you_need_https),
    although to facilitate local testing, that policy

[does not apply to `localhost`](http://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385).
If your production web server does not support HTTPS, then the service worker
registration will fail, but the rest of your web app will remain functional.

1. Service workers are [not currently supported](https://jakearchibald.github.io/isserviceworkerready/)
    in all web browsers. Service worker registration won't be attempted
    on browsers that lack support.

2. The service worker is only enabled in the production environment,
    e.g. the output of `npm run build`. It's recommended that you do not enable an
    offline-first service worker in a development environment, as it can lead to
    frustration when previously cached assets are used and do not include the latest
    changes you've made locally.

3. If you *need* to test your offline-first service worker locally, build
    the application (using `npm run build`) and run a simple http server from your
    build directory. After running the build script, `create-react-app` will give
    instructions for one way to test your production build locally and the deployment instructions have
    instructions for using other methods. *Be sure to always use an
    incognito window to avoid complications with your browser cache.*

4. If possible, configure your production environment to serve the generated
    `service-worker.js` [with HTTP caching disabled](http://stackoverflow.com/questions/38843970/service-worker-javascript-update-frequency-every-24-hours).
    If that's not possible—GitHub Pages, for instance, does not
    allow you to change the default 10 minute HTTP cache lifetime—then be aware
    that if you visit your production site, and then revisit again before
    `service-worker.js` has expired from your HTTP cache, you'll continue to get
    the previously cached assets from the service worker. If you have an immediate
    need to view your updated production deployment, performing a shift-refresh
    will temporarily disable the service worker and retrieve all assets from the
    network.

5. Users aren't always familiar with offline-first web apps. It can be useful to

[let the user know](https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux#inform_the_user_when_the_app_is_ready_for_offline_consumption)
when the service worker has finished populating your caches (showing a "This web
app works offline!" message) and also let them know when the service worker has
fetched the latest updates that will be available the next time they load the
page (showing a "New content is available; please refresh." message). Showing
this messages is currently left as an exercise to the developer, but as a
starting point, you can make use of the logic included in `src/registerServiceWorker.js`, which
demonstrates which service worker lifecycle events to listen for to detect each
scenario, and which as a default, just logs appropriate messages to the
JavaScript console.

1. By default, the generated service worker file will not intercept or cache any
    cross-origin traffic, like HTTP API requests,
    images, or embeds loaded from a different domain. If you would like to use a
    runtime caching strategy for those requests, you can `eject`
    and then configure the

[`runtimeCaching`](https://github.com/GoogleChrome/sw-precache#runtimecaching-arrayobject)
option in the `SWPrecacheWebpackPlugin` section of

`webpack.config.prod.js`.

### Progressive Web App Metadata

The default configuration includes a web app manifest located at

`public/manifest.json`, that you can customize with
details specific to your web application.

When a user adds a web app to their homescreen using Chrome or Firefox on
Android, the metadata in `manifest.json` determines what
icons, names, and branding colors to use when the web app is displayed.

[The Web App Manifest guide](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/)
provides more context about what each field means, and how your customizations
will affect your users' experience.

## 部署

`npm run build` creates a `build` directory with a production build of your app. Set up your favourite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

### 静态服务器

For environments using [Node](https://nodejs.org/), the easiest way to handle this would be to install [serve](https://github.com/zeit/serve) and let it handle the rest:
```
npm install -g serve
serve -s build
```

The last command shown above will serve your static site on the port **5000**. Like many of [serve](https://github.com/zeit/serve)’s internal settings, the port can be adjusted using the `-p` or `--port` flags.

Run this command to get a full list of the options available:
```
serve -h
```

### Other Solutions

You don’t necessarily need a static server in order to run a Create React App project in production. It works just as fine integrated into an existing dynamic one.

Here’s a programmatic example using [Node](https://nodejs.org/) and [Express](http://expressjs.com/):
```
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
```

The choice of your server software isn’t important either. Since Create React App is completely platform-agnostic, there’s no need to explicitly use Node.

The `build` folder with static assets is the only output produced by Create React App.

However this is not quite enough if you use client-side routing. Read the next section if you want to support URLs like `/todos/42` in your single-page app.

### Serving Apps with Client-Side Routing

If you use routers that use the HTML5 [`pushState` history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries) under the hood (for example, [React Router](https://github.com/ReactTraining/react-router) with `browserHistory`), many static file servers will fail. For example, if you used React Router with a route for `/todos/42`, the development server will respond to `localhost:3000/todos/42` properly, but an Express serving a production build as above will not.

This is because when there is a fresh page load for a `/todos/42`, the server looks for the file `build/todos/42` and does not find it. The server needs to be configured to respond to a request to `/todos/42` by serving `index.html`. For example, we can amend our Express example above to serve `index.html` for any unknown paths:
```
 app.use(express.static(path.join(__dirname, 'build')));

-app.get('/', function (req, res) {
+app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
```

If you’re using [Apache](https://httpd.apache.org/), you need to create a `.htaccess` file in the `public` folder that looks like this:
```
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
```

It will get copied to the `build` folder when you run `npm run build`.

Now requests to `/todos/42` will be handled correctly both in development and in production.

On a production build, and in a browser that supports [service workers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers),
the service worker will automatically handle all navigation requests, like for
`/todos/42`, by serving the cached copy of your `index.html`. This
service worker navigation routing can be configured or disabled by

`eject`ing and then modifying the

[`navigateFallback`](https://github.com/GoogleChrome/sw-precache#navigatefallback-string)
and [`navigateFallbackWhitelist`](https://github.com/GoogleChrome/sw-precache#navigatefallbackwhitelist-arrayregexp)
options of the `SWPreachePlugin` configuration.

### Building for Relative Paths

By default, Create React App produces a build assuming your app is hosted at the server root.To override this, specify the `homepage` in your `package.json`, for example:
```
  "homepage": "http://mywebsite.com/relativepath",
```

This will let Create React App correctly infer the root path to use in the generated HTML file.

#### Serving the Same Build from Different Paths

> Note: this feature is available with `react-scripts@0.9.0` and higher.

If you are not using the HTML5 `pushState` history API or not using client-side routing at all, it is unnecessary to specify the URL from which your app will be served. Instead, you can put this in your `package.json`:
```
  "homepage": ".",
```

This will make sure that all the asset paths are relative to `index.html`. You will then be able to move your app from `http://mywebsite.com` to `http://mywebsite.com/relativepath` or even `http://mywebsite.com/relative/path`without having to rebuild it.

### Azure

See [this](https://medium.com/@to_pe/deploying-create-react-app-on-microsoft-azure-c0f6686a4321) blog post on how to deploy your React app to [Microsoft Azure](https://azure.microsoft.com/).

### Firebase

Install the Firebase CLI if you haven’t already by running `npm install -g firebase-tools`. Sign up for a [Firebase account](https://console.firebase.google.com/) and create a new project. Run `firebase login` and login with your previous created Firebase account.

Then run the `firebase init` command from your project’s root. You need to choose the **Hosting: Configure and deploy Firebase Hosting sites** and choose the Firebase project you created in the previous step. You will need to agree with `database.rules.json` being created, choose `build` as the public directory, and also agree to **Configure as a single-page app** by replying with `y`.
```
=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? What Firebase project do you want to associate as default? Example app (example-app-fd690)

=== Database Setup

Firebase Realtime Database Rules allow you to define how your data should be
structured and when your data can be read from and written to.

? What file should be used for Database Rules? database.rules.json
✔  Database Rules for example-app-fd690 have been downloaded to database.rules.json.
Future modifications to database.rules.json will update Database Rules when you run
firebase deploy.

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
✔  Wrote build/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
```

Now, after you create a production build with `npm run build`, you can deploy it by running `firebase deploy`.
```
=== Deploying to 'example-app-fd690'...

i  deploying database, hosting
✔  database: rules ready to deploy.
i  hosting: preparing build directory for upload...
Uploading: [==============================          ] 75%✔  hosting: build folder uploaded successfully
✔  hosting: 8 files uploaded successfully
i  starting release process (may take several minutes)...

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/example-app-fd690/overview
Hosting URL: https://example-app-fd690.firebaseapp.com
```

For more information see [Add Firebase to your JavaScript Project](https://firebase.google.com/docs/web/setup).

### GitHub Pages

> Note: this feature is available with `react-scripts@0.2.0` and higher.

#### Step 1: Add `homepage` to `package.json`

**The step below is important!****If you skip it, your app will not deploy correctly.**

Open your `package.json` and add a `homepage` field:
```
  "homepage": "https://myusername.github.io/my-app",
```

Create React App uses the `homepage` field to determine the root URL in the built HTML file.

#### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at [https://myusername.github.io/my-app](https://myusername.github.io/my-app), run:
```
npm install --save-dev gh-pages
```

Add the following scripts in your `package.json`:
```
  // ...
  "scripts": {
    // ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
```

The `predeploy` script will run automatically before `deploy` is run.

#### Step 3: Deploy the site by running `npm run deploy`

Then run:
```
npm run deploy
```

#### Step 4: Ensure your project’s settings use `gh-pages`

Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:



#### Step 5: Optionally, configure the domain

You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

#### Notes on client-side routing

GitHub Pages doesn’t support routers that use the HTML5 `pushState` history API under the hood (for example, React Router using `browserHistory`). This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here are a couple of solutions:

* You could switch from using HTML5 history API to routing with hashes. If you use React Router, you can switch to `hashHistory` for this effect, but the URL will be longer and more verbose (for example, `http://user.github.io/todomvc/#/todos/42?_k=yknaj`). [Read more](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md#histories) about different history implementations in React Router.
* Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide](https://github.com/rafrex/spa-github-pages).

### Heroku

Use the [Heroku Buildpack for Create React App](https://github.com/mars/create-react-app-buildpack).You can find instructions in [Deploying React with Zero Configuration](https://blog.heroku.com/deploying-react-with-zero-configuration).

#### Resolving Heroku Deployment Errors

Sometimes `npm run build` works locally but fails during deploy via Heroku. Following are the most common cases.

##### "Module not found: Error: Cannot resolve 'file' or 'directory'"

If you get something like this:
```
remote: Failed to create a production build. Reason:
remote: Module not found: Error: Cannot resolve 'file' or 'directory'
MyDirectory in /tmp/build_1234/src
```

It means you need to ensure that the lettercase of the file or directory you `import` matches the one you see on your filesystem or on GitHub.

This is important because Linux (the operating system used by Heroku) is case sensitive. So `MyDirectory` and `mydirectory` are two distinct directories and thus, even though the project builds locally, the difference in case breaks the `import` statements on Heroku remotes.

##### "Could not find a required file."

If you exclude or ignore necessary files from the package you will see a error similar this one:
```
remote: Could not find a required file.
remote:   Name: `index.html`
remote:   Searched in: /tmp/build_a2875fc163b209225122d68916f1d4df/public
remote:
remote: npm ERR! Linux 3.13.0-105-generic
remote: npm ERR! argv "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/node" "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/npm" "run" "build"
```

In this case, ensure that the file is there with the proper lettercase and that’s not ignored on your local `.gitignore`or `~/.gitignore_global`.

### Modulus

See the [Modulus blog post](http://blog.modulus.io/deploying-react-apps-on-modulus) on how to deploy your react app to Modulus.

### Netlify

**To do a manual deploy to Netlify’s CDN:**
```
npm install netlify-cli
netlify deploy
```

Choose `build` as the path to deploy.

**To setup continuous delivery:**

With this setup Netlify will build and deploy when you push to git or open a pull request:

1. [Start a new netlify project](https://app.netlify.com/signup)
2. Pick your Git hosting service and select your repository
3. Click `Build your site`

**Support for client-side routing:**

To support `pushState`, make sure to create a `public/_redirects` file with the following rewrite rules:
```
/*  /index.html  200
```

When you build the project, Create React App will place the `public` folder contents into the build output.

### Now

[now](https://zeit.co/now) offers a zero-configuration single-command deployment. You can use `now` to deploy your app for free.

1. Install the `now` command-line tool either via the recommended [desktop tool](https://zeit.co/download) or via node with `npm install -g now`.

2. Build your app by running `npm run build`.

3. Move into the build directory by running `cd build`.

4. Run `now --name your-project-name` from within the build directory. You will see a **now.sh** URL in your output like this:
```
> Ready! https://your-project-name-tpspyhtdtk.now.sh (copied to clipboard)
```

Paste that URL into your browser when the build is complete, and you will see your deployed app.

Details are available in [this article.](https://zeit.co/blog/unlimited-static)

### S3 and CloudFront

See this [blog post](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af) on how to deploy your React app to Amazon Web Services [S3](https://aws.amazon.com/s3) and [CloudFront](https://aws.amazon.com/cloudfront/).

### Surge

Install the Surge CLI if you haven’t already by running `npm install -g surge`. Run the `surge` command and log in you or create a new account.

When asked about the project path, make sure to specify the `build` folder, for example:
```
       project path: /path/to/project/build
```

Note that in order to support routers that use HTML5 `pushState` API, you may want to rename the `index.html` in your build folder to `200.html` before deploying to Surge. This [ensures that every URL falls back to that file](https://surge.sh/help/adding-a-200-page-for-client-side-routing).

## 高级配置

You can adjust various development and production settings by setting environment variables in your shell or with .env.

| Variable | Development | Production | Usage |
| :-- | :-: | :-: | :-- |
| BROWSER | :white_check_mark: | :x: | By default, Create React App will open the default system browser, favoring Chrome on macOS. Specify a [browser](https://github.com/sindresorhus/opn#app) to override this behavior, or set it to `none` to disable it completely. If you need to customize the way the browser is launched, you can specify a node script instead. Any arguments passed to `npm start` will also be passed to this script, and the url where your app is served will be the last argument. Your script's file name must have the `.js` extension. |
| HOST | :white_check_mark: | :x: | By default, the development web server binds to `localhost`. You may use this variable to specify a different host. |
| PORT | :white_check_mark: | :x: | By default, the development web server will attempt to listen on port 3000 or prompt you to attempt the next available port. You may use this variable to specify a different port. |
| HTTPS | :white_check_mark: | :x: | When set to `true`, Create React App will run the development server in `https` mode. |
| PUBLIC_URL | :x: | :white_check_mark: | Create React App assumes your application is hosted at the serving web server's root or a subpath as specified in `package.json` (`homepage`). Normally, Create React App ignores the hostname. You may use this variable to force assets to be referenced verbatim to the url you provide (hostname included). This may be particularly useful when using a CDN to host your application. |
| CI | :large_orange_diamond: | :white_check_mark: | When set to `true`, Create React App treats warnings as failures in the build. It also makes the test runner non-watching. Most CIs set this flag by default. |

## 常见问题

### `npm start` 未检测任何改动

When you save a file while `npm start` is running, the browser should refresh with the updated code.If this doesn’t happen, try one of the following workarounds:

* If your project is in a Dropbox folder, try moving it out.
* If the watcher doesn’t see a file called `index.js` and you’re referencing it by the folder name, you [need to restart the watcher](https://github.com/facebookincubator/create-react-app/issues/1164) due to a Webpack bug.
* Some editors like Vim and IntelliJ have a “safe write” feature that currently breaks the watcher. You will need to disable it. Follow the instructions in [“Adjusting Your Text Editor”](https://webpack.js.org/guides/development/#adjusting-your-text-editor).
* If your project path contains parentheses, try moving the project to a path without them. This is caused by a [Webpack watcher bug](https://github.com/webpack/watchpack/issues/42).
* On Linux and macOS, you might need to [tweak system settings](https://webpack.github.io/docs/troubleshooting.html#not-enough-watchers) to allow more watchers.
* If the project runs inside a virtual machine such as (a Vagrant provisioned) VirtualBox, create an `.env` file in your project directory if it doesn’t exist, and add `CHOKIDAR_USEPOLLING=true` to it. This ensures that the next time you run `npm start`, the watcher uses the polling mode, as necessary inside a VM.

If none of these solutions help please leave a comment [in this thread](https://github.com/facebookincubator/create-react-app/issues/659).

### `npm test` hangs on macOS Sierra

If you run `npm test` and the console gets stuck after printing `react-scripts test --env=jsdom` to the console there might be a problem with your [Watchman](https://facebook.github.io/watchman/) installation as described in [facebookincubator/create-react-app#713](https://github.com/facebookincubator/create-react-app/issues/713).

We recommend deleting `node_modules` in your project and running `npm install` (or `yarn` if you use it) first. If it doesn't help, you can try one of the numerous workarounds mentioned in these issues:

* [facebook/jest#1767](https://github.com/facebook/jest/issues/1767)
* [facebook/watchman#358](https://github.com/facebook/watchman/issues/358)
* [ember-cli/ember-cli#6259](https://github.com/ember-cli/ember-cli/issues/6259)

It is reported that installing Watchman 4.7.0 or newer fixes the issue. If you use [Homebrew](http://brew.sh/), you can run these commands to update it:
```
watchman shutdown-server
brew update
brew reinstall watchman
```

You can find [other installation methods](https://facebook.github.io/watchman/docs/install.html#build-install) on the Watchman documentation page.

If this still doesn’t help, try running `launchctl unload -F ~/Library/LaunchAgents/com.github.facebook.watchman.plist`.

There are also reports that *uninstalling* Watchman fixes the issue. So if nothing else helps, remove it from your system and try again.

### `npm run build` silently fails

It is reported that `npm run build` can fail on machines with no swap space, which is common in cloud environments. If [the symptoms are matching](https://github.com/facebookincubator/create-react-app/issues/1133#issuecomment-264612171), consider adding some swap space to the machine you’re building on, or build the project locally.

### `npm run build` fails on Heroku

This may be a problem with case sensitive filenames.
Please refer to this section.

### Moment.js locales are missing

If you use a [Moment.js](https://momentjs.com/), you might notice that only the English locale is available by default. This is because the locale files are large, and you probably only need a subset of [all the locales provided by Moment.js](https://momentjs.com/#multiple-locale-support).

To add a specific Moment.js locale to your bundle, you need to import it explicitly.For example:
```
import moment from 'moment';
import 'moment/locale/fr';
```

If import multiple locales this way, you can later switch between them by calling `moment.locale()` with the locale name:
```
import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/es';

// ...

moment.locale('fr');
```

This will only work for locales that have been explicitly imported before.

## 我是不是漏掉了什么东西?

If you have ideas for more “How To” recipes that should be on this page, [let us know](https://github.com/facebookincubator/create-react-app/issues) or [contribute some!](https://github.com/facebookincubator/create-react-app/edit/master/packages/react-scripts/template/README.md)

* 翻译参考: [create-react-app基础介绍](http://joescott.coding.me/blog/2017/04/27/create-react-app-basic/)