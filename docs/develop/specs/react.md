# React - 开发规范 v2.1

本文是 [JavaScript 编码规范](./javascript.md) 和 [Web 编码规范](./web.md) 的补充版, 涉及到 react 独立性的内容在此单独说明

> 此风格指南主要基于目前流行的 JavaScript 标准。对于项目中是否应允许使用一些惯例（如 async/await，静态 class 属性等）的问题，应视具体情况而定。目前，本指南不包含并且不推荐使用任何第三阶段*前*的功能。

> 译者注：第三阶段指 [TC39 流程](https://tc39.es/process-document/)中的 Stage 3 - Candidate。每个新的 ECMAScript 提案从起草到完成共分五个阶段。

## 一. 命名规范

### 1. 基本规范

-   每个文件只写一个模块.模块名称使用帕斯卡命名
    -   但多个[无状态模块](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions)可以放在单个文件中. eslint: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
-   推荐使用 JSX 语法.
-   不要使用 `React.createElement`，除非在从一个非 JSX 的文件中初始化 app.
-   只有在使用 `arrayOf`, `objectOf`,   或 `shape` 明确指出 `arrays` 和 `objects` 所包含的内容时，[`react/forbid-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md)   才会允许这个属性 (props).

### 2. 文件命名规范

-   目录使用小写蛇形排列
-   文件名为首字母大写的驼峰

```
src/main/Main.js
```

**目录说明**

```
src/        # 源文件
    assets  # 资源
        img           : 图片
        less          : less 文件
        style         : 生成的样式文件
    xxxx              : 功能目录
    model             : 核心JS代码
        System.js     : 系统定义, 包含路由, 请求地址
        Util.js       : util 函数
public/     # 公共目录
.env.local    : 配置文件
```

**变量常用前缀**

```
ds         :  数据源(dataSource)
lang       :  语言前缀(Language)
is/has     :  是否存在
```

**Url 传入的参数**

url 传入参数采用蛇形写法

```
let room_id = this.props.match.room_id;
```

### 3. 缩进以及换行

-   一行能够展示开的元素, 不要两行展示
-   如需换行, 属性遵循 4 格缩进

## 二. React 使用规则

### 1. 创建模块

-   如果你的模块有内部状态或者是`refs`, 推荐使用 `class extends React.Component` .
    eslint: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

```jsx
// bad
const Listing = React.createClass({
	// ...
	render() {
		return <div>{this.state.hello}</div>;
	},
});

// good
class Listing extends React.Component {
	// ...
	render() {
		return <div>{this.state.hello}</div>;
	}
}
```

如果你的模块没有状态或是没有引用`refs`， 推荐使用普通函数（非箭头函数）而不是类:

```jsx
// bad
class Listing extends React.Component {
	render() {
		return <div>{this.props.hello}</div>;
	}
}

// bad (relying on function name inference is discouraged)
const Listing = ({ hello }) => <div>{hello}</div>;

// good
function Listing({ hello }) {
	return <div>{hello}</div>;
}
```

### 2. 严禁使用 Mixins

-   [不要使用 mixins](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html).

> 为什么? Mixins 会增加隐式的依赖，导致命名冲突，并且会以雪球式增加复杂度。在大多数情况下 Mixins 可以被更好的方法替代，如：组件化，高阶组件，工具模块等。

### 3. 命名

-   **扩展名**: React 模块使用 `.js` 扩展名.

    > eslint: [No .jsx extension?](https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904)

-   **文件名**: 文件名使用帕斯卡命名. 如, `ReservationCard.js`.
-   **引用命名**: React 模块名使用帕斯卡命名，实例使用骆驼式命名. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

```jsx
// bad
import reservationCard from "./ReservationCard";

// good
import ReservationCard from "./ReservationCard";

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```

-   **模块命名**: 模块使用当前文件名一样的名称. 比如 `ReservationCard.js` 应该包含名为 `ReservationCard`的模块. 但是，如果整个文件夹是一个模块，使用 `index.js`作为入口文件，然后直接使用 `index.js` 或者文件夹名作为模块的名称:

```jsx
// bad
import Footer from "./Footer/Footer";

// bad
import Footer from "./Footer/index";

// good
import Footer from "./Footer";
```

-   **高阶模块命名**: 对于生成一个新的模块，其中的模块名 `displayName` 应该为高阶模块名和传入模块名的组合. 例如, 高阶模块 `withFoo()`, 当传入一个 `Bar` 模块的时候， 生成的模块名 `displayName` 应为 `withFoo(Bar)`.

> 为什么？一个模块的 `displayName` 可能会在开发者工具或者错误信息中使用到，因此有一个能清楚的表达这层关系的值能帮助我们更好地理解模块发生了什么，更好地进行 Debug。

```jsx
// bad
export default function withFoo(WrappedComponent) {
  return function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }
}

// good
export default function withFoo(WrappedComponent) {
  function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithFoo.displayName = `withFoo(${wrappedComponentName})`;
  return WithFoo;
}
```

-   **属性命名**: 避免使用 DOM 相关的属性来用作其他的用途。

> 为什么？对于`style` 和 `className`这样的属性名，我们都会默认它们代表一些特殊的含义，如元素的样式，CSS class 的名称。在你的应用中使用这些属性来表示其他的含义会使你的代码更难阅读，更难维护，并且可能会引起 bug。

```jsx
// bad
<MyComponent style="fancy" />

// good
<MyComponent variant="fancy" />
```

### 4. 声明模块

-   不要使用 `displayName` 来命名 React 模块，而是使用引用来命名模块， 如 class 名称.

```jsx
// bad
export default React.createClass({
  displayName: 'ReservationCard',
  // stuff goes here
});

// good
export default class ReservationCard extends React.Component {
}
```

### 5. 代码对齐

-   遵循以下的 JSX 语法缩进/格式. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md) [`react/jsx-closing-tag-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)

```jsx
// bad
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />

// good, 有多行属性的话, 新建一行关闭标签
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// 若能在一行中显示, 直接写成一行
<Foo bar="bar" />

// 子元素按照常规方式缩进
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>

// bad
{showButton &&
  <Button />
}

// bad
{
 showButton &&
   <Button />
}

// good

{showButton && (
	<Button />
)}

// good
{showButton && <Button />}
```

> 对于一般的元素显示使用的三元运算符首选以下格式化方式

```jsx
{
	carCreateCondition.members && carCreateCondition.members.length ? this.renderAny() : this.renderSomeThing();
}
```

### 6. 单引号还是双引号

-   对于 JSX 属性值总是使用双引号(`"`), 其他均使用单引号(`'`). eslint: [`jsx-quotes`](http://eslint.org/docs/rules/jsx-quotes)

> 为什么? HTML 属性也是用双引号, 因此 JSX 的属性也遵循此约定.

```jsx
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```

### 7. 空格

-   总是在自动关闭的标签前加一个空格，正常情况下也不需要换行. eslint: [`no-multi-spaces`](http://eslint.org/docs/rules/no-multi-spaces), [`react/jsx-tag-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

```jsx
// bad
<Foo/>

// very bad
<Foo                 />

// bad
<Foo
 />

// good
<Foo />
```

-   不要在 JSX `{}` 引用括号里两边加空格. eslint: [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

```jsx
// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
```

### 8. 属性

-   JSX 属性名使用骆驼式风格`camelCase`.

```jsx
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
/>
```

-   如果属性值为 `true`, 可以直接省略. eslint: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

```jsx
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```

-   `<img>` 标签总是添加 `alt` 属性. 如果图片以 presentation(感觉是以类似 PPT 方式显示?)方式显示，`alt` 可为空, 或者`<img>` 要包含`role="presentation"`. eslint: [`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)

```jsx
// bad
<img src="hello.jpg" />

// good
<img src="hello.jpg" alt="Me waving hello" />

// good
<img src="hello.jpg" alt="" />

// good
<img src="hello.jpg" role="presentation" />
```

-   不要在 `alt` 值里使用如 "image", "photo", or "picture"包括图片含义这样的词， 中文也一样. eslint: [`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)

> 为什么? 屏幕助读器已经把 `img` 标签标注为图片了, 所以没有必要再在 `alt` 里说明了.

```jsx
// bad
<img src="hello.jpg" alt="Picture of me waving hello" />

// good
<img src="hello.jpg" alt="Me waving hello" />
```

-   使用有效正确的 aria `role`属性值 [ARIA roles](https://www.w3.org/TR/wai-aria/roles#usage_intro). eslint: [`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)

```jsx
// bad - not an ARIA role
<div role="datepicker" />

// bad - abstract ARIA role
<div role="range" />

// good
<div role="button" />
```

-   不要在标签上使用 `accessKey` 属性. eslint: [`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

> 为什么? 屏幕助读器在键盘快捷键与键盘命令时造成的不统一性会导致阅读性更加复杂.

```jsx
// bad
<div accessKey="h" />

// good
<div />
```

-   避免使用数组的 index 来作为 `key` 属性的值。

> 译者注：key 属性指名称为 `key` 的属性，即 `props.key`

应当使用稳定不变的 ID。(使用不稳定的 ID 是一个[反面模式](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)，会降低性能、造成组件状态出错) 。特别是当元素的顺序可能改变的情况下，不应使用数组的 index   作为 `key`.

> 译者注：反面模式 (Anti-Pattern)，指低效或是有待优化的软件设计模式。

```jsx
// bad
{
	todos.map((todo, index) => <Todo {...todo} key={index} />);
}

// good
{
	todos.map((todo) => <Todo {...todo} key={todo.id} />);
}
```

-   对于所有非必须的属性，总是手动去定义`defaultProps`属性.

> 为什么? propTypes 可以作为模块的文档说明, 并且声明 defaultProps 的话意味着阅读代码的人不需要去假设一些默认值。更重要的是, 显示的声明默认属性可以让你的模块跳过属性类型的检查.

```jsx
// bad
function SFC({ foo, bar, children }) {
	return (
		<div>
			{foo}
			{bar}
			{children}
		</div>
	);
}
SFC.propTypes = {
	foo: PropTypes.number.isRequired,
	bar: PropTypes.string,
	children: PropTypes.node,
};

// good
function SFC({ foo, bar, children }) {
	return (
		<div>
			{foo}
			{bar}
			{children}
		</div>
	);
}
SFC.propTypes = {
	foo: PropTypes.number.isRequired,
	bar: PropTypes.string,
	children: PropTypes.node,
};
SFC.defaultProps = {
	bar: "",
	children: null,
};
```

-   尽可能少地使用扩展运算符

> 为什么? 除非你很想传递一些不必要的属性。对于 React v15.6.1 和更早的版本，你可以[给 DOM 传递一些无效的 HTML 属性](https://doc.react-china.org/blog/2017/09/08/dom-attributes-in-react-16.html)

例外情况:

-   使用了变量提升的高阶组件

```jsx
function HOC(WrappedComponent) {
    return class Proxy extends React.Component {
      Proxy.propTypes = {
        text: PropTypes.string,
        isLoading: PropTypes.bool
      };

      render() {
        return <WrappedComponent {...this.props} />
      }
    }
}
```

-   只有在清楚明白扩展对象时才使用扩展运算符。这非常有用尤其是在使用 Mocha 测试组件的时候。

```jsx
export default function Foo {
    const props = {
      text: '',
      isPublished: false
    }

    return (<div {...props} />);
}
```

特别提醒：尽可能地筛选出不必要的属性。同时，使用[prop-types-exact](https://www.npmjs.com/package/prop-types-exact)来预防问题出现。

```jsx
// bad
render() {
    const { irrelevantProp, ...relevantProps  } = this.props;
    return <WrappedComponent {...this.props} />
}

// good
render() {
    const { irrelevantProp, ...relevantProps  } = this.props;
    return <WrappedComponent {...relevantProps} />
}
```

### 9. Refs 引用

-   总是在 Refs 里使用回调函数. eslint: [`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

```jsx
// bad
<Foo
  ref="myRef"
/>

// good
<Foo
  ref={(ref) => { this.myRef = ref; }}
/>
```

### 10. 括号

-   将多行的 JSX 标签写在 `()`里. eslint: [`react/jsx-wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)

```jsx
// bad
render() {
  return <MyComponent className="long body" foo="bar">
           <MyChild />
         </MyComponent>;
}

// good
render() {
  return (
    <MyComponent className="long body" foo="bar">
      <MyChild />
    </MyComponent>
  );
}

// good, 单行可以不需要
render() {
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
}
```

### 11. 标签

-   对于没有子元素的标签来说总是自己关闭标签. eslint: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

```jsx
// bad
<Foo className="stuff"></Foo>

// good
<Foo className="stuff" />
```

-   如果模块有多行的属性， 关闭标签时新建一行. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

```jsx
// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```

### 12. 函数

-   使用箭头函数来获取本地变量。这使得传递数据给事件处理器 (event handler) 很方便。不过，尤其是当传递给自定义的纯组件 (PureComponent) 时，要确保这些箭头函数对性能影响不是太大，因为它们会每次都会触发可能无意义的重新渲染。

```jsx
function ItemList(props) {
	return (
		<ul>
			{props.items.map((item, index) => (
				<Item
					key={item.key}
					onClick={(event) => {
						doSomethingWith(event, item.name, index);
					}}
				/>
			))}
		</ul>
	);
}
```

-   当在 `render()` 里使用事件处理方法时，不要提前在构造函数里把 `this` 绑定上去. eslint: [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

> 在类成员变量 (class fields) 里不要使用箭头函数，因为箭头函数会造成它难以测试和调试，并会降低性能。从概念上讲，类成员变量存的应该是数据，而不是逻辑或方法。

```jsx
// bad
class extends React.Component {
  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />;
  }
}

// very bad
class extends React.Component {
  onClickDiv = () => {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />
  }
}

// good
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={() => {this.onClickDiv()}} />;
  }
}
```

-   在 React 模块中，不要给所谓的私有函数添加 `_` 前缀，本质上它并不是私有的.

> 为什么？`_` 下划线前缀在某些语言中通常被用来表示私有变量或者函数。但是不像其他的一些语言，在 JS 中没有原生支持所谓的私有变量，所有的变量函数都是共有的。尽管你的意图是使它私有化，在之前加上下划线并不会使这些变量私有化，并且所有的属性（包括有下划线前缀及没有前缀的）都应该被视为是共有的。了解更多详情请查看 Issue [#1024](https://github.com/airbnb/javascript/issues/1024), 和 [#490](https://github.com/airbnb/javascript/issues/490) 。

```jsx
// bad
React.createClass({
  _onClickSubmit() {
    // do stuff
  },

  // other stuff
});

// good
class extends React.Component {
  onClickSubmit() {
    // do stuff
  }

  // other stuff
}
```

-   在 `render` 方法中总是确保 `return` 返回值. eslint: [`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

```jsx
// bad
render() {
  (<div />);
}

// good
render() {
  return (<div />);
}
```

## 三. 模块生命周期函数

### 1. 顺序

1. 可选的 `static` 方法
1. `constructor` 构造函数
1. `getChildContext` 获取子元素内容
1. `componentWillMount` 模块渲染前
1. `componentDidMount` 模块渲染后
1. `componentWillReceiveProps` 模块将接受新的数据
1. `shouldComponentUpdate` 判断模块需不需要重新渲染
1. `componentWillUpdate` 上面的方法返回 `true`， 模块将重新渲染
1. `componentDidUpdate` 模块渲染结束
1. `componentWillUnmount` 模块将从 DOM 中清除, 做一些清理任务
1. `render` render() 方法
1. _点击回调或者事件处理器_ 如 `onClickSubmit()` 或 `onChangeDescription()`
1. _`render` 里的 getter 方法_ 如 `getSelectReason()` 或 `getFooterContent()`
1. _可选的 render 方法_ 如 `renderNavigation()` 或 `renderProfilePicture()`

### 2. 如何定义 `propTypes`, `defaultProps`, `contextTypes`, 等等其他属性...

````
```jsx
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Hello World',
};

class Link extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;
  }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
````

````


## 四. 项目约定


### 1. isMounted 不要使用


- 不要再使用 `isMounted`. eslint: [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)



> 为什么? [`isMounted` 反人类设计模式:()](https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html), 在 ES6 classes 中无法使用， 官方将在未来的版本里删除此方法.



### 2. 组件是否显示采用内部处理


不要在外部进行外部组件判定


```jsx
{/* Bad */}
{self.kickRoomPopupIsShow
    ?
    <KickRoomPopup
        accountId={self.paramAccountId}
        closeWin={() => {
            this.setState({kickRoomPopupIsShow : false
        })
    }/>
    : ''
}

{/* Good */}
<KickRoomPopup
    visible={self.kickRoomPopupIsShow}
    accountId={self.paramAccountId}
    onClose={() => {
        this.setState({kickRoomPopupIsShow : false
    })
}/>
````

### 3. 数据存储(Store)

-   reducers 里面的方法大写, 采用显式传值的方法
-   更改 [dva](https://dvajs.com/guide/) 数据状态, 见伪代码

```
import { queryData } from "../services";
import { message } from "antd";
import _ from "lodash-es";

const home = {
    namespace: "home",
    state: {
        data: [],
    },
    effects: {
        *quertData({ payload: params }, { put, call }) {
            const { success, data, message: msg } = yield call(queryData, params);
            if (success && data) {
                yield put({
                    type: "SET_DATA",
                    payload: { data: data },
                });
            } else {
                message.error(msg);
            }
        }
    },
    reducers: {
        SET_DATA: (state, { payload }) => ({
            ...state,
            data: payload.data,
        })
    },
    subscriptions: {},
};
export default home;
```

### 4. 多环境打包

[umi 多环境打包](https://umijs.org/zh-CN/docs/config#%E5%A4%9A%E7%8E%AF%E5%A2%83%E5%A4%9A%E4%BB%BD%E9%85%8D%E7%BD%AE)

详细见伙玩 PC package.json 配置

-   dev 环境

> yarn start:dev
> yarn build:dev

-   pre 环境

> yarn start:pre
> yarn build:pre

-   test 环境

> yarn start:test
> yarn build:test

-   prod 环境

> yarn start:prod
> yarn build:prod

## 备注 & 参考

**版本更新**

-   v2.1 (2020-12-23)
    增加 Store 的数据约定
-   v2.0 (2020-05-11)
    增加 Airbnb 规范指南, 进行完整的完善, 在除了基本文件目录的基础上增加了更为详尽的规范
-   v1.1 (2020-02-26)
    规范组件写法
-   v1.0 (2019-mid)
    初始化文档

**参考**

-   [Airbnb React/JSX 风格指南](https://raw.githubusercontent.com/jhcccc/javascript/master/react/README.md)
