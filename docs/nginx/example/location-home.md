# [WIP]Nginx 匹配 / 跳转站点

我们在网站部署的时候会遇到这样一种场景, 主站 / 目录跳转到 PC 端, 主站在手机模式下会跳转到手机站

对应的 PC 站和移动站的跳转一般情况下有这几种方式

-   跳转适配(302)
-   代码适配
-   自适应(响应式)

我们处理的这种方式是属于代码适配, 但是来源的数据是不同的

PC 站 : 后端代码
手机端 : 前端代码(SPA)

## 参考

-   参考[如何布局您的 PC 站和移动站，并表达两者之间内容的对应关系](https://ziyuan.baidu.com/college/courseinfo?id=156)
-   [Detect Mobile Browsers](http://detectmobilebrowsers.com/mobile)
