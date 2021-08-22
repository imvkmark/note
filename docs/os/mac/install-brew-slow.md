# [转+] macos 安装 homebrew 速度慢或者无法安装


> 安装 homebrew 的时候下载速度超级慢，解决办法是更换 homebrew 的下载源以及默认的 git 地址

> 如果第一步都无法执行请设置代理 : [为 mac 终端设置代理访问](https://juejin.im/post/5e6c2c69e51d4527235b77d6)

## 操作步骤

打开终端,输入：

```
curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh >> brew_install
```

执行后就会在当前用户目录下下载一个 brew_install 文件，然后 vim 修改文件中的下载源地址为中科大的源

```
# former
# BREW_REPO="https://github.com/Homebrew/brew"
# new
BREW_REPO = "git://mirrors.ustc.edu.cn/brew.git"
```

之后执行

```
./brew_install

....

# 安装, 输入密码继续
Press RETURN to continue or any other key to abort
Password:

....

# 下载命令行相关工具
Software Update Tool

Downloading Command Line Tools for Xcode

# 开始使用中科大的源进行安装
remote: Counting objects: 262, done.
remote: Compressing objects: 100% (204/204), done.

....

# 这里会使用 github 的地址, 进行克隆/, 所以一般来说会比较慢
==> Tapping homebrew/core
Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core'...
```

## 更换 homebrew-core 的地址并克隆

如果出现

```
Error: Failure while executing: git clone https://github.com/Homebrew/homebrew-core /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core --depth=1

Error: Failure while executing: /usr/local/bin/brew tap homebrew/core

$ git clone https://github.com/Homebrew/homebrew-core /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core --depth=1
```

则代表这个地址无法访问, 需要重新克隆

几个镜像地址如下 : 

> 清华镜像    : https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/
> Aliyun镜像 : https://developer.aliyun.com/mirror/homebrew 

**重新克隆**

克隆 core
```
git clone https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git "$(brew --repo homebrew/core)" --depth=1
```

克隆 cask
```
git clone https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git "$(brew --repo homebrew/cask)" --depth=1
```

执行到这一步之后 homebrew 就安装好了。

如需更换其他源则需要按照 镜像源上边提供的地址设置即可

如需卸载 homebrew 直接执行下面命令即可

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"  
```

## 参考
参考文章 : [Mac安装brew并更改源](https://www.jianshu.com/p/22820319f71b)