# 基于 Vue 的最佳实践

本项目是基于 [Web 开发最佳实践](../core/best-practice.md) 的扩展

## 解决 globalThis 的问题

参考 : [解决浏览器端 globalThis is not defined 报错](https://juejin.cn/post/7022929947933179917)

**解决方案**
在 `<head>` 中加入

```html
<script>
	this.globalThis || (this.globalThis = this);
</script>
```

## 组件的自动加载

> 自动加载的弱项
> 如果组件使用自动加载也可以, 但是需要自动引入 `app.use(Comp)` 这种方式, 并在配置文件中加入 components

> 全部加载的弱项
> 全部加载会在打包的时候 minify 会解析所有的 css 样式, 导致时间过长 (10min+)

所以组件使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

```js
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver, ElementPlusResolver, VantResolver } from "unplugin-vue-components/resolvers";
export default defineConfig(({ mode }) => {
	return {
		// ...
		plugins: [
			// ...
			Components({
				resolvers: [AntDesignVueResolver(), ElementPlusResolver(), VantResolver()],
				dts: true,
				include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
			}),
			// ...
		],
		// ...
	};
});
```

## 移除 console 日志

打包启用 terser, 配置 tersor 的选项

```js
export default defineConfig(({ mode }) => {
	return {
		build: {
			// ...
			minify: "terser",
			terserOptions: {
				compress: {
					drop_console: true,
				},
			},
		},
	};
});
```

## 参考

-   [尤大推荐的神器 unplugin...](https://juejin.cn/post/7012446423367024676)
