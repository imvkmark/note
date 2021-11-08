# [译] 在 macOS 上升级 Bash

> 机器翻译, 人工校对, 如有错误, 欢迎斧正
> 原文地址 : [Upgrading Bash on macOS](https://itnext.io/upgrading-bash-on-macos-7138bd1066ba)
> 掘金: https://juejin.im/post/5e4d69c5518825497467f03d

许多 macOS 用户不知道的一件事是，他们正在使用完全过时的 Bash shell 版本。所以，**强烈** 建议在 macOS 上使用较新版本的 Bash，因为它有很多可用的新功能。本文介绍了如何执行此操作。

![](https://file.wulicode.com/note/2021/10-22/09-44-05504.png)

## macOS 上的默认 Bash 版本

要查看 macOS 中包含的 Bash 版本的是否已经过时，请执行以下命令：

```
$ bash --version
GNU bash，版本 3.2.57(1)-release (x86_64-apple-darwin19.0.0)
Copyright (C) 2017 Free Software Foundation, Inc.
许可证 GPLv3+: GNU GPL 许可证第三版或者更新版本 <http://gnu.org/licenses/gpl.html>

本软件是自由软件，你可以自由地更改和重新发布。
在法律许可的情况下特此明示，本软件不提供任何担保。
```

如你所见，这是 [GNU Bash](https://www.gnu.org/software/bash/) **3.2** 版，其日期为 **2007 年** ！此版本的 Bash 包括在**所有** macOS 版本中，甚至是最新版。

苹果在其操作系统中包含如此旧版本的 Bash 的原因与 **许可有关**。从 4.0 版本（3.2 的后继版本）开始，Bash 使用 [GNU 通用公共许可证 v3（GPLv3）](https://www.gnu.org/licenses/gpl.html)，Apple 不(想)支持。你可以 [在此处](https://www.reddit.com/r/apple/comments/7v97ls/why_doesnt_apple_use_any_gpl_v3_unix_packages_in/) 和 [此处](http://meta.ath0.com/2012/02/05/apples-great-gpl-purge/) 找到有关此 [问题](https://www.reddit.com/r/apple/comments/7v97ls/why_doesnt_apple_use_any_gpl_v3_unix_packages_in/) 的一些讨论。GNU Bash 的 3.2 版是 Apple 接受的带有 GPLv2 的最新版本，因此坚持使用这个版本。

这意味着整个世界（例如 Linux）都将使用 Bash 的新版本，而 macOS 用户则只能使用十年前的旧版本。在撰写本文时，GNU Bash 的最新版本是 5.0（请参阅 [此处](https://tiswww.case.edu/php/chet/bash/bashtop.html#CurrentStatus) ），已于 2019 年 1 月发布。在本文中，我给出了将系统的默认 Shell 升级到 Bash 的最新版本的说明。

## 为什么要升级？

但如果 Bash 3.2 可以正常工作，为什么还要费心升级新版呢？就我个人而言，主要原因是 [**编程补全**](https://www.gnu.org/software/bash/manual/html_node/Programmable-Completion.html)。Bash 有个新特性是支持 特定命令的自动补全。你可能会使用自动补全功能来完成命令，文件名和变量，方法是先键入然后敲击 _Tab 键_ 以自动完成当前词句（或两次敲击 _Tab 键_ 以获取所有可能补全的列表，如果有多个以上的话） ）。这是 Bash 的自动补全。

但是，**编程补全** 远不止于此，因为它允许依赖于上下文的特定于命令的完成。例如，想象一下，键入`cmd -[tab][tab]`，然后看到适用于该命令的所有选项的列表。或键入`cmd host rm [tab][tab]`然后查看某个配置文件中指定的所有“主机”的列表。**编程补全** 可以做到这一点。

可编程补全逻辑（由命令的创建者）在完成规范中定义，通常以**完成脚本**的形式定义。这些完成脚本必须在 Shell 中提供，以启用命令的完成功能。

问题在于，自 3.2 版以来，Bash 的可编程补全功能已得到扩展，并且大多数补全脚本都使用这些新功能。这意味着这些补全脚本在 Bash 3.2 上不起作用，这意味着如果你继续使用默认的 macOS shell，则会错过许多命令的补全功能。

通过升级到较新的 Bash 版本，你可以使用这些补全脚本，这将非常有用。我写了整篇文章，称为[**macOS 上的 Bash 编程补全**](https://medium.com/@weibeld/programmable-completion-for-bash-on-macos-f81a0103080b)，其中介绍了升级到较新的 Bash 版本后要充分利用 macOS 上的可编程补全所需的全部知识。

## 如何升级？

要将 macOS 系统的默认 Shell 升级到最新版本的 Bash，你必须做三件事：

1. **安装最新版本的 Bash**
2. **将新的 Bash Whitelist” 作为 login shell**
3. **将新的 Bash 设置为 default shell**

每个步骤都非常容易，如下所述。

> **注意：**以下说明不会更改 Bash 的旧版本，而是安装新版本并将其设置为默认版本。这两个版本将在你的系统上并存，但是你可以从此处忽略旧版本。

### 安装

我建议使用[Homebrew](https://brew.sh/)安装最新版本的 Bash：

**brew 安装 bash**

就是这样！

要验证安装，你可以检查系统上现在有两个版本的 Bash：

```
$ which -a bash
/usr/local/bin/bash
/bin/bash
```

第一个是新版本，第二个是旧版本：

```
$ /usr/local/bin/bash --version
GNU bash, version 5.0.0(1)-release (x86_64-apple-darwin18.2.0)
Copyright (C) 2019 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software; you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.
$ /bin/bash --version
GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin18)
Copyright (C) 2007 Free Software Foundation, Inc.
```

在`PATH`变量中, 默认的新版 `/usr/local/bin` 目录的 Path 路径 会在 旧版本 `/bin` 目录之前，因此，只需输入 `bash` 即可使用新版

```
$ bash --version
GNU bash, version 5.0.0(1)-release (x86_64-apple-darwin18.2.0)
```

到目前为止，一切安好。现在，你已将此版本设置为默认版本。

### 白名单

UNIX 包含一项安全功能，该功能将可用作 [login shell](https://docstore.mik.ua/orelly/unix3/upt/ch03_04.htm)（即登录系统后使用的 shell 程序）的 Shell 程序限制在 “受信任” Shell 程序列表中。这些 Shell 在`[/etc/shells](https://bash.cyberciti.biz/guide//etc/shells)`文件中列出。

由于你要将新设置的 Bash Shell 用作默认 Shell，因此它必须能够充当登录 Shell。这意味着，你必须将其添加到 `/etc/shells` 文件中。你可以以 root 用户身份编辑此文件：

```
$ sudo vim /etc/shells
```

并将 `/usr/local/bin/bash` Shell 添加到其内容中，以便文件看起来像这样：

```
/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
/usr/local/bin/bash
```

这就是这一步需要做的！

### 设置默认 Shell

此时，如果打开一个新的终端窗口，则仍会使用 Bash 3.2。这是因为 `/bin/bash` 仍设置为默认 Shell 程序。要将其更改为新的 shell，请执行以下命令：

```
$ chsh -s /usr/local/bin/bash
```

就这样, 现在，当前用户的默认 Shell 程序设置为 Bash 的新版本。如果关闭并重新打开终端窗口，则现在应该已经在使用新版本。你可以如下验证：

```
$ echo $BASH_VERSION
5.0.0(1)-release
```

该 `chsh` 命令仅为执行命令的用户(当前用户)更改默认 Shell 程序。如果你也想更改其他用户的默认 Shell ，则可以通过登录其他用户的身份（例如，使用`[su](https://en.wikipedia.org/wiki/Su_(Unix))`）来重复此命令。最重要的是，也许你可 ​​ 能想要更改 root 用户的默认 Shell 程序，你可以执行以下操作：

```
$ sudo chsh -s /usr/local/bin/bash
```

这样，如果你 `sudo su` 以 root 用户身份打开 Shell ，它将使用新的 Bash 版本。

## 重要笔记

### 脚本中的用法

如前所述，你没有更改 Bash 的默认版本，而是安装了新版本并将其设置为默认版本。Bash 的两个版本在你的系统上并存：

-   `/bin/bash`： 旧版本
-   `/usr/local/bin/bash`： 新版本

在 shell 脚本中，你经常会有一个[shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>)行，如以下脚本所示：

```
#!/bin/bash
echo $BASH_VERSION
```

请务必注意，该 shebang 行*明确*引用了 Bash  的**旧**版本（因为它指定了`/bin/bash`）。这意味着，如果你运行此脚本，它将由 Bash 的旧版本解释（你可以在脚本的输出中看到它，类似于`3.2.57(1)-release`）。

在大多数情况下，这可能不是问题。但是，如果你希望脚本由**新**版本的 Bash  显式解释，则可以更改 shebang 行，如下所示：

```
#!/usr/local/bin/bash
echo $BASH_VERSION
```

现在的输出将是`5.0.0(1)-release`。但是，请注意，该解决方案是**不可移植的**，这意味着它可能无法在其他系统上运行。这是因为，其他系统可能没有位于其中的 shell `/usr/local/bin/bash`（而`/bin/bash`这几乎是一个标准）。

结合两全其美，可以使用以下 shebang 行：

```
$ sudo rm /bin/bash
$ sudo ln -s /usr/local/bin/bash /bin/bash
```

对于 shebang 行，这是[推荐的](https://www.cyberciti.biz/tips/finding-bash-perl-python-portably-using-env.html)格式。它通过检查 `PATH` 和使用第一个遇到的 `bash` 可执行文件作为脚本的解释器来工作。如果新版本的目录位于中的旧版本目录`PATH`（默认值）之前，则将使用新版本，并且脚本的输出将类似于`5.0.0(1)-release`。

### 为什么不能用符号链接？

为了不处理两个版本的 Bash，你是否能删除旧版本并将新版本放到旧的位置？例如，通过在 `/bin/bash` 其中创建指向新版本的符号链接，如下所示？

```
$ sudo rm /bin/bash
$ sudo ln -s /usr/local/bin/bash /bin/bash
```

这样，即使是带有脚本的脚本 `#!/bin/bash` 也会被新版本的 Bash 解释，那么为什么不这样做呢？

你可以执行此操作，但是你必须避开名为[**系统完整性保护（SIP）**](https://developer.apple.com/library/archive/documentation/Security/Conceptual/System_Integrity_Protection_Guide/Introduction/Introduction.html)\*\* \*\*（[Wikipedia](https://en.wikipedia.org/wiki/System_Integrity_Protection)）的 macOS 安全功能。此功能甚至禁止 root 用户对某些目录进行写访问（这就是为什么它也称为 “rootless(root 无权限)”）的原因。这些目录在[这里](https://developer.apple.com/library/archive/documentation/Security/Conceptual/System_Integrity_Protection_Guide/FileSystemProtections/FileSystemProtections.html) 列出并包括 `/bin` 。这意味着即使以 root 用户身份，你也无法执行上述命令，因为不允许你从中删除任何内容或在 `/bin` 中创建任何文件。

解决方法是禁用 SIP，在 `/bin` 中进行更改，然后再次启用 SIP。可以根据[这里](https://developer.apple.com/library/archive/documentation/Security/Conceptual/System_Integrity_Protection_Guide/ConfiguringSystemIntegrityProtection/ConfiguringSystemIntegrityProtection.html)的说明启用和禁用 SIP 。它要求你将计算机引导至**恢复模式**，然后使用 `csrutil disable` 和 `csrutil enable` 命令。无论你想通过这个 **特别复杂的方式** 来完全替换旧的 Bash 版本，或者是接受同时使用两个 Bash 版本，则都取决于你。

## 参考

-   [https://apple.stackexchange.com/a/292760](https://apple.stackexchange.com/a/292760)
