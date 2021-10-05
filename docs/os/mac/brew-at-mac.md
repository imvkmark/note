# [转] mac 下 homebrew 的安装和使用

> 原文地址: [mac 下 homebrew 的使用](https://www.zybuluo.com/phper/note/87055)

mac 系统也是基于 unix 的系统，所以也继承类很多 unix 的特性，包括软件的编译，安装等。ubuntu 下有快捷命令`apt-get install`来快速安装软件。centos 下有`yum install`来快速安装。所以，mac 下也有一种方式，就是使用`brew`。

`brew`是 Mac 下的一个包管理工具，它从下载源码解压然后 `./configure && make install` ，同时会包含相关依存库。并自动配置好各种环境变量，而且非常易于卸载。 这个对程序员来说简直是福音，简单的指令，就能快速安装和升级本地的各种开发环境。

home brew 官网是 [http://brew.sh/index_zh-cn.html](http://brew.sh/index_zh-cn.html)

## 安装 brew

打开 控制台 。输入一条命令即可安装好 brew。

```json
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

这样一个简单的命令，我们就安装好来 brew 。来验证一下，输入 brew 命令：

```
$ brew
Example usage:
  brew [info | home | options ] [FORMULA...]
  brew install FORMULA...
  brew uninstall FORMULA...
  brew search [foo]
  brew list [FORMULA...]
  brew update
  brew upgrade [FORMULA...]
  brew pin/unpin [FORMULA...]
Troubleshooting:
  brew doctor
  brew install -vd FORMULA
  brew [--env | config]
Brewing:
  brew create [URL [--no-fetch]]
  brew edit [FORMULA...]
  open https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/Formula-Cookbook.md
Further help:
  man brew
  brew home
```

出现了很多帮助命令，说明我们已经安装成功了。

### 用 brew 安装源码

安装好了 brew 之后，我们就可以用这个命令安装各种源码了。比如安装一下`wget`工具。这个工具能在命令行中帮我们下载各种数据。

```
$ brew install wget
```

这样一个简单的命令就可以了。它会帮我们下载好 wget，并且编译执行安装，还会下载各种依赖包，设置好各种配置和参数。

安装好的 `wget` 会被安装到`/usr/local/Cellar/wget/`下。并且将`wget`命令软链接至 `/usr/local/bin` 目录下。这样全局就都可以使用`wget`命令了。

我们同样可以使用`brew`安装好`git`,`node`,`openssl`,`svn`等各种。

安装好的这些软件都会统一安装到`/usr/local/Cellar/`目录下，统一管理。而且安装目录代码会被同步到`/usr/local/opt/`下，任何的增删改都会保持这 2 个目录的同步。并且已经软链好各种命令到`/usr/local/bin`下。

我们去看看：

```
$ ls -l /usr/loal/bin
-rwxr-xr-x 1 yangyi admin  791  3 26 17:47 brew
lrwxr-xr-x 1 yangyi admin 30  3 27 13:34 node -> ../Cellar/node/0.12.1/bin/node
lrwxr-xr-x  1 yangyi  admin 30  4 14 15:16 wget -> ../Cellar/wget/1.16.3/bin/wget
```

/usr/local/Cellar 和 /usr/local/opt/ 同步，增删改都会同步。

```
$ ls /usr/local/opt
brew-cask   nginx       node        openssl     pcre        pkg-config  wget        xz
$ ls /usr/local/Cellar/
brew-cask   nginx       node        openssl     pcre        pkg-config  wget        xz
```

**ps**: 那我就搞不懂了，那为啥`wget -> ../Cellar/wget/1.16.3/bin/wget` 命令映射要映射到`Cellar`目录，而不是`opt`目录呢？

## brew 的常用命令

常用的命令没几个：

```
brew install wget   # 安装源码
brew info svn       # 显示软件的各种信息，包括版本啊源码地址啊等等
brew uninstall wget # 卸载软件，很爽，一键静默卸载
brew search git     # 模糊搜索brew 支持的软件。如果不加软件名，就会列出所有它支持的软件。多的很。
brew list           # 列出本机通过brew安装的所有软件
brew update         # 跟新brew软件自身
brew upgrade wget   # 更新安装过的软件,如果不加软件名，就更新所有可以更新的软件
brew cleanup        # 清除下载的各种缓存
```

## brew cask

brew cask 是在 brew 的基础上一个增强的工具，用来安装 Mac 上的 Gui 程序应用包（.dmg/.pkg）, 比如 qq、chrome、xun lei 等。它先下载解压到统一的目录中（`/opt/homebrew-cask/Caskroom`），省掉了自己去下载、解压、拖拽（安装）等蛋疼步骤，同样，卸载相当容易与干净。然后再软链到`~/Applications/`目录下, 一气呵成。非常方便，而且还包含很多在 AppStore 里没有的常用软件。

是不是很牛逼啊！！！

brew cask 的官网是：[http://caskroom.io](http://caskroom.io/)

github 地址是：[https://github.com/caskroom/homebrew-cask](https://github.com/caskroom/homebrew-cask)

### brew cask 的安装

也同样是一条命令搞定，前提是已经安装了`brew`:

```
$ brew install caskroom/cask/brew-cask
```

这样一条命令久搞定来 brew cask 的安装，是不是很爽。

`brew cask help`一下看安装成功没？也是出现各种命令和帮助手册：

```
$ brew cask
brew-cask provides a friendly homebrew-style CLI workflow for the
administration of Mac applications distributed as binaries.
Commands:
    alfred     displays note about new built-in alfred support
    audit      verifies installability of Casks
    cat        dump raw source of the given Cask to the standard output
    cleanup    cleans up cached downloads and tracker symlinks
    create     creates the given Cask and opens it in an editor
    doctor     checks for configuration issues
    edit       edits the given Cask
    fetch      downloads Cask resources to local cache
    home       opens the homepage of the given Cask
    info       displays information about the given Cask
    install    installs the given Cask
    list       with no args, lists installed Casks; given installed Casks, lists staged files
    search     searches all known Casks
    uninstall  uninstalls the given Cask
    update     a synonym for 'brew update'
    zap        zaps all files associated with the given Cask
See also "man brew-cask"
```

好，我们来来下一个 iTerm 来看看：

```
$ brew cask install iTerm
```

简单的 2 条命令就可以了，非常之快，它会讲软件安装到`/opt/homebrew-cask/Caskroom`目录下，并且软链到`~/Applications`了，这样就能在应用程序里找到它。就能方便的使用。

```
$ cd /opt/homebrew-cask/Caskroom/
$ ls
iterm2
```

我们刚才的 iTerm 了。

再看看软链,用户自己手动下载安装的 App 会被安装到`~/Applications`,进这个目录看看：

```
$ cd ~/Applications/
$ ls -l
total 8
drwxr-xr-x  3 yangyi  staff  102  4  8 22:27 GitHub.app
lrwxr-xr-x  1 yangyi  staff   48  3 27 16:58 iTerm.app -> /opt/homebrew-cask/Caskroom/iterm2/2.0/iTerm.app
```

看到了吧。我们刚才的 iTerm 就软链到了统一的安装目录。

### brew cask 常用命令

下面说一些常用到的各种命令。

```
brew cask install qq     # 下载安装软件
brew cask uninstall qq   # 卸载软件
brew cask search qq      # 模糊搜索软件，如果不加软件名，就列出所有它支持的软件
brew cask info qq        # 显示这个软件的详细信息，如果已经用cask安装了，也会显示其安装目录信息等
brew cask list           # 列出本机按照过的软件列表
brew cask cleanup        #  清除下载的缓存以及各种链接信息
brew update && brew upgrade brew-cask # 更新cask自身
```

或许你已经注意到了，好像并没有提供更新用 cask 安装软件命令啊。的确是没有。是的。目前 homebrew-cask 并没有命令直接更新所有已安装的软件，软件更新主要是通过软件自身的更新流程，不过也可以通过以下所示命令先删除 APP，再重新安装。

```
$ brew cask uninstall APP && brew cask install APP
```

软件同样也会安装到`/opt/homebrew-cask/Caskroom`目录下。

## 为 brew 设置代理

```
# 打开终端
$ cd ~/

# 查看当前目录
$ ls -al

# 是否有 .curlrc 文件, 如果没有,新建一个吧
$ touch .curlrc
```

编辑它,写入下面内容.如果已经存在这个文件的话,直接编辑.
HTTP 代理

```
proxy=ip:port
```

把 ip 和 port 改为你的代理 ip 和端口,如:

```
# HTTP代理
proxy=127.0.0.1:8087
```

保存即可

参考资料：
[http://ljhero.info/2013-08-17/homebrew-cask.html](http://ljhero.info/2013-08-17/homebrew-cask.html)
[http://www.udpwork.com/item/11775.html](http://www.udpwork.com/item/11775.html)
[http://www.zhihu.com/question/22624898](http://www.zhihu.com/question/22624898)

-   [Mac 为 Homebrew 设置代理](http://blog.csdn.net/veryitman/article/details/45788667)

## brew update 出错 homebrew-core is a shallow clone

最好的方式是 保持 翻墙

brew 执行 update 出现以下错误

```
Error:
  homebrew-core is a shallow clone.
To `brew update`, first run:
  git -C /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core fetch --unshallow
This command may take a few minutes to run due to the large size of the repository.
This restriction has been made on GitHub's request because updating shallow
clones is an extremely expensive operation due to the tree layout and traffic of
Homebrew/homebrew-core and Homebrew/homebrew-cask. We don't do this for you
automatically to avoid repeatedly performing an expensive unshallow operation in
CI systems (which should instead be fixed to not use shallow clones). Sorry for
the inconvenience!
```

解决方法

```
$ cd /usr/local/Homebrew/Library/Taps/homebrew
$ rm -rf homebrew-core
$ brew upgrade -vvv
```

随后我们将源在更换为清华源(Core)

源地址 : [https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)

```
$ git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
```
