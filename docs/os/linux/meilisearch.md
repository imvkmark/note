# meilisearch 的安装和使用

[MeiliSearch](https://docs.meilisearch.com) , 一款开源的搜索工具, 和 Agolia 是提供相同服务的竞争对手, 得益于 Agolia 在 Vue 中提供的服务, 实时搜索在项目中的使用也逐渐的频繁起来.

## 安装

对于 安装, 因为必须要求 GLIBC 2.18 以上, 所以在默认的 centos 7 服务器中无法进行安装, 所以我这里使用的是 ubuntu 服务器.

> v2ex 上有人将 glibc 的重新编译会导致系统不稳定, 所以这里不进行测试

安装方法参考 [Run MeiliSearch in production: taking it to the next level](https://docs.meilisearch.com/create/how_to/running_production.html)
