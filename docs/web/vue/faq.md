# Vue 常见问题

## 1. Vue 使用代理(proxy) 注意

-   [devServer.proxy](https://cli.vuejs.org/zh/config/#devserver-proxy)
-   [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware#proxycontext-config)

首先记录两个地址, 在 vue/vue-cli/axios 中经常会遇到代理以及请求的问题, 为了这个, 我们需要设置代理服务器等信息便于开发调试

注意, 在设置 axios 的 baseUrl 之后 proxy 就不可用了. 需要注意这一点

```javascript
// 这里设置代理, 根据环境来设定
const baseUrl = "development" === process.env.NODE_ENV ? "/api" : process.env.VUE_APP_URL;
```

## 2. 路由死循环

```
vue-router.esm.js?8c4f:2257 RangeError: Maximum call stack size exceeded
    at JSON.stringify (<anonymous>)
    at eval (vuex-persistedstate.es.js?0e44:1)
    at eval (vuex-persistedstate.es.js?0e44:1)
    at eval (vuex.esm.js?2f62:472)
    at Array.forEach (<anonymous>)
    at Store.commit (vuex.esm.js?2f62:472)
    at Store.boundCommit [as commit] (vuex.esm.js?2f62:409)
    at Object.vue__WEBPACK_IMPORTED_MODULE_0__.default.$hideLoading (use.js?2e7e:13)
    at eval (router.js?41cb:141)
    at iterator (vue-router.esm.js?8c4f:2300)
```
