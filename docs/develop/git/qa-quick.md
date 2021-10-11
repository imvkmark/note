# Git 快捷操作

## Git 设置代理来访问服务器

**全局代理**

```
# 设置代理
$ git config --global http.proxy http://127.0.0.1:1087
$ git config --global https.proxy https://127.0.0.1:1087

# 取消代理
$ git config --global --unset http.proxy
$ git config --global --unset https.proxy
```

**设置项目代理**

```
# 设置代理
$ git config --local http.proxy 127.0.0.1:1086
$ git config --local https.proxy 127.0.0.1:1086

# 取消代理
$ git config --local --unset http.proxy
$ git config --local --unset https.proxy
```

**给指定的 URL 设置代理**

```ini
[http "https://github.com/"]
    proxy = http://127.0.0.1:1086
[https "https://github.com/"]
    proxy = http://127.0.0.1:1086
[http "https://my.comapnyserver.com/"]
    proxy = ""
```

## Git 保留最新提交记录

```bash
# Checkout
git checkout --orphan latest_branch

# Add all the files
git add -A

# Commit the changes
git commit -am "commit message"

# Delete the branch

git branch -D master

# Rename the current branch to master

git branch -m master

# Finally, force update your repository

git push -f origin master
```

## Git 保存请求的账号密码

https 方式每次都要输入密码，按照如下设置即可输入一次就可以很长时间不用再手输入密码。

第一步：设置邮箱和密码

```
$ git config --global user.email "your email"
$ git config --global user.name  "your username"
```

根据自己的需求执行下面的任意一条命令

第二步：

```
# 设置记住密码（默认15分钟）：
$ git config --global credential.helper cache

# 如果想自己设置时间，可以这样做, 这样就设置一个小时之后失效
$ git config credential.helper 'cache --timeout=3600'

# 长期存储密码：
$ git config --global credential.helper store

# 增加远程地址的时候带上密码也是可以的。(推荐)
$ http://yourname:password@git.oschina.net/name/project.git
```

运行相关命令, 输入账号密码, 如果正确则下次不必重新输入, 在 git 目录中存在两个文件 `.gitconfig`, `.git-credentials`, 里边放置的是凭证的信息
