# [转+] 设置 SSH 安全通过密钥,免密码登录服务器

原文地址: [设置 SSH通过密钥登录](https://hyjk2000.github.io/2012/03/16/how-to-set-up-ssh-keys/)

我们一般使用 PuTTY 等 SSH 客户端来远程管理 Linux
服务器。但是，一般的密码方式登录，容易有密码被暴力破解的问题。所以，一般我们会将
SSH 的端口设置为默认的 22 以外的端口，或者禁用 root
账户登录。其实，有一个更好的办法来保证安全，而且让你可以放心地用 root
账户从远程登录------那就是通过密钥方式登录。

密钥形式登录的原理是：利用密钥生成器制作一对密钥------一只公钥和一只私钥。将公钥添加到服务器的某个账户上，然后在客户端利用私钥即可完成认证并登录。这样一来，没有私钥，任何人都无法通过
SSH
暴力破解你的密码来远程登录到系统。此外，如果将公钥复制到其他账户甚至主机，利用私钥也可以登录。

## 服务器上制作密钥

下面来讲解如何在 Linux 服务器上制作密钥对，将公钥添加给账户，设置
SSH，最后通过客户端登录。

**1. 制作密钥对**

首先在服务器上制作密钥对。首先用密码登录到你打算使用密钥登录的账户，然后执行以下命令：

``` 
$ cd ~/
$ ssh-keygen  *
// or
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

密钥锁码在使用私钥时必须输入，这样就可以保护私钥不被盗用。当然，也可以留空，实现无密码登录。

现在，在 root 用户的 `home` 目录中生成了一个 .ssh
的隐藏目录，内含两个密钥文件。id\_rsa 为私钥，id\_rsa.pub 为公钥。

**2. 在服务器上安装公钥**

键入以下命令，在服务器上安装公钥：

``` 
$ cd .ssh
$ cat id_rsa.pub >> authorized_keys
```

如此便完成了公钥的安装。为了确保连接成功，请保证以下文件权限正确：

``` 
$ chmod 600 authorized_keys
$ chmod 700 ~/.ssh
```

**3. 设置 SSH，打开密钥登录功能**

编辑 `/etc/ssh/sshd_config` 文件，进行如下设置：

``` 
RSAAuthentication yes
PubkeyAuthentication yes
```

另外，请留意 root 用户能否通过 SSH 登录：

``` 
PermitRootLogin yes
```

当你完成全部设置，并以密钥方式登录成功后，再禁用密码登录：

``` 
PasswordAuthentication no
```

最后，重启 SSH 服务：

``` 
$ systemctl restart sshd
```

## 客户端配置私钥 config 配置

很多时候，我们开发可能需要连接多台远程服务器，并且需要配置 git
服务器的私钥。那么这么多的服务器不能共用一套私钥，不同的服务器应该使用不同的私钥。但是我们从上面的连接流程可以看到，ssh
默认是去读取 `$HOME/.ssh/id_rsa`
文件作为私钥登录的。如果想要不同的服务器使用不同的私钥进行登录，那么需要在
`.ssh` 目录下编写 `config` 文件来进行配置。

`config`
的配置很简单，只要指明哪个用户登录哪台远程服务器需要使用哪个私钥即可。下面给出一个配置示例。

``` 
Host github.com
    User jaychen
    IdentityFile ~/.ssh/id_rsa.github
Host 192.168.1.1
    User ubuntu
    IdentityFile ~/.ssh/id_rsa.xxx
```

**另一种方式** 支持名字的映射

``` 
Host test-liexiang
    HostName 192.168.1.21
    User liexiang
    IdentityFile ~/.ssh/test-liexiang
```

上面 `config` 文件字段含义如下：

-   Host 指明了远程主机的 ip，除了使用 ip 地址，也可以直接使用网址。
-   User 指的是登录远程主机的用户。
-   IdentityFile 指明使用哪个私钥文件。

编写好 `config` 文件之后，需要把 `config` 文件的权限改为 `rw-r--r--`
。如果权限过大，ssh 会禁止登录。

参考文章:

-   [SSH密钥登录流程分析](https://juejin.im/post/5a2941ad6fb9a045030ffc95)
-   [Github ssh
    key生成，免密登录服务器方法](https://deepzz.com/post/github-generate-ssh-key.html)
