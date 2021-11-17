# Vue 开发规范 1.0 (For Vue3)

本文是 [JavaScript 编码规范](./javascript.md) 和 [Web 编码规范](./web.md) 的补充版, 涉及到 vue 独立性的内容在此单独说明

本规范旨在为前端程序的开发者提供规范化最新的指导，可用于程序员个人编译环境以及研发团队集成环境等场合的代码规范化检查。

> 本文约定于 vue3, 不适用于 vue2

## 环境约定

1. [Node.js](https://nodejs.org/) LTS 版本，你可以使用 [nvm](https://github.com/creationix/nvm) 或 [nvm-windows ](https://github.com/coreybutler/nvm-windows)在一台电脑中管理多个 Node 版本

2. 使用 Chrome 浏览器并安装 [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 进行调试

## 命名

1. 文件名应该是大写驼峰, 文件名作为组件名称, 组件内不进行组件名称的定义

2. **单文件组件**的文件名应该要么始终是单词大写开头（ PascalCase ）

3. 应用特定样式和约定的 **基础组件** (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V

```js
// not good
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue

// good
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue

components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue

components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
```

4. 和父组件 **紧密耦合的子组件** 应该以父组件名作为前缀命名

> _如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起_

```javascript
// not good
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue
components/
|- SearchSidebar.vue
|- NavigationForSearchSidebar.vue

//good
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```

5. 组件名应该倾向于完整单词而不是缩写

```javascript
// not good
components/
|- SdSettings.vue
|- UProfOpts.vue

// good
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```

## 语法

1. `prop` 的定义应该尽量详细，至少需要指定其类型

2. 为 `v-for` 设置键值；在组件上总是必须用 `key` 配合 `v-for`，以便维护内部组件及其子树的状态

    在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态

3. 不要把 `v-if `和 `v-for` 同时用在同一个元素上（大部分时候你可以使用计算属性实现）

4. **模版中的组件名**在单文件组件和字符串模板中组件名应该总是 PascalCase 的；

```html
<!-- good -->
<!-- 在单文件组件和字符串模板中 -->
<MyComponent />
```

5. **JS/JSX 中的组件名**应该始终是 PascalCase 的

6. **Prop 名大小写**，在声明 `prop` 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 camelCase

```javascript
// not good
props: {
    'greetingText': String
}
<WelcomeMessage greetingText="hi"/>
```

7. 组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法

```javascript
// good
// 在模板中
{{ normalizedFullName }}
// 复杂表达式已经移入一个计算属性
computed: {
    normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
        return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
    }
}
```

8. 非空 HTML 特性值应该始终带引号

```html
<!-- good -->
<input type="text" />
<AppSidebar :style="{ width: sidebarWidth + 'px' }"></AppSidebar>
```

13. 可简写指令需要缩写 (用 `:` 表示 `v-bind:` 和用 `@` 表示 `v-on:`)

## 组件/实例的选项的顺序

组件/实例的选项应该有统一的顺序，这是我们推荐的组件选项默认顺序：

1. **副作用** (触发组件外的影响)
    - `el`
2. **全局感知** (要求组件以外的知识)
    - `name`
    - `parent`
3. **组件类型** (更改组件的类型)
    - `functional`
4. **模板修改器** (改变模板的编译方式)
    - `delimiters`
    - `comments`
5. **模板依赖** (模板内使用的资源)
    - `components`
    - `directives`
    - `filters`
6. **组合** (向选项里合并属性)
    - `extends`
    - `mixins`
7. **接口** (组件的接口)
    - `inheritAttrs`
    - `model`
    - `props`/`propsData`
8. **本地状态** (本地的响应式属性)
    - `data`
    - `computed`
9. **事件** (通过响应式事件触发的回调)
    - `watch`
    - 生命周期钩子 (按照它们被调用的顺序)
        - `beforeCreate`
        - `created`
        - `beforeMount`
        - `mounted`
        - `beforeUpdate`
        - `updated`
        - `activated`
        - `deactivated`
        - `beforeDestroy`
        - `destroyed`
10. **非响应式的属性** (不依赖响应系统的实例属性)
    - `methods`
11. **渲染** (组件输出的声明式描述)
    - `template`/`render`
    - `renderError`

## 元素特性的顺序

**<font color=#1890ff>【参考】</font>元素 (包括组件) 的特性应该有统一的顺序，这是我们为元素特性推荐的默认顺序：**

1. **定义** (提供组件的选项)
    - `is`
2. **列表渲染** (创建多个变化的相同元素)
    - `v-for`
3. **条件渲染** (元素是否渲染/显示)
    - `v-if`
    - `v-else-if`
    - `v-else`
    - `v-show`
    - `v-cloak`
4. **渲染方式** (改变元素的渲染方式)
    - `v-pre`
    - `v-once`
5. **全局感知** (需要超越组件的知识)
    - `id`
6. **唯一的特性** (需要唯一值的特性)
    - `ref`
    - `key`
    - `slot`
7. **双向绑定** (把绑定和事件结合起来)
    - `v-model`
8. **其它特性** (所有普通的绑定或未绑定的特性)
9. **事件** (组件事件监听器)
    - `v-on`
10. **内容** (覆写元素的内容)
    - `v-html`
    - `v-text`

## 单文件组件的顶级元素的顺序

**单文件组件应该总是按照 `<template>`、`<script>` 和 `<style>` 的标签顺序**

```html
<!-- good -->
<!-- ComponentA.vue -->
<template>...</template>
<style>
	/* ... */
</style>

<!-- ComponentB.vue -->
<template>...</template>
<script>
	/* ... */
</script>
<style>
	/* ... */
</style>
```

## 隐性的父子组件通信

**应该优先通过 prop 和事件进行父子组件之间的通信**

一个理想的 Vue 应用是 prop 向下传递，事件向上传递的。遵循这一约定会让你的组件更易于理解。然而，在一些边界情况下 prop 的变更或 `this.$parent` 能够简化两个深度耦合的组件。

问题在于，这种做法在很多*简单*的场景下可能会更方便。但请当心，不要为了一时方便 (少写代码) 而牺牲数据流向的简洁性 (易于理解)。

## 非 Flux 的全局状态管理

**应该优先通过 Vuex 管理全局状态**

Vuex 提供的不仅是一个管理状态的中心区域，还是组织、追踪和调试状态变更的好工具。
