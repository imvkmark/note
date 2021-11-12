# Php 问题

# 1. composer 下载的时候报错 Protocol "https" not supported or disabled in libcurl

查看下是否 php 版本支持 ssl, 如果不支持考虑重新安装并打开 ssl


![](https://file.wulicode.com/note/2021/10-23/11-24-47607.png)


# 2. Malformed UTF-8 characters, possibly incorrectly encoded

一般都是截取 utf-8 数据的时候出现的错误, 把中文截取为无法识别的内容