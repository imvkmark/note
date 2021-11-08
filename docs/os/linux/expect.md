# [转+] Linux expect 命令介绍和实现交互式免密登录

> 原文地址 : [Linux 下使用 expect 实现跳板机自动跳转/免密登录/自动登录（转）](https://blog.csdn.net/weixin_42181200/article/details/85097334)

Expect 是一个用来处理 **交互** 的命令。借助 Expect，我们可以将交互过程写在一个脚本上，使之自动化完成。形象的说，ssh 登录，ftp 登录等都符合 **交互** 的定义。

四个命令

Expect 中最关键的四个命令是 send,expect,spawn,interact。

-   send：用于向进程发送字符串
-   expect：从进程接收字符串
-   spawn：启动新的进程
-   interact：允许用户交互

## 1. send 命令

send 命令接收一个字符串参数，并将该参数发送到进程。

```
expect1.1> send "hello word\n"
hello word
expect1.2>
```

## 2. expect 命令

### 2.1 基础知识

expect 命令和 send 命令正好相反，expect 通常是用来等待一个进程的反馈。expect 可以接收一个字符串参数，也可以接收正则表达式参数。和上文的 send 命令结合，现在我们可以看一个最简单的交互式的例子：

```
expect "hi\n"
send "hello there!\n"
```

这两行代码的意思是：从 **标准输入** 中等到 hi 和换行键后，向 **标准输出** 输出 hello there。

> `$expect_out(buffer)` 存储了所有对 expect 的输入，`<$expect_out(0,string)>` 存储了匹配到 expect 参数的输入。

比如如下程序：

```
expect "hi\n"
send "you typed <$expect_out(buffer)>"
send "but I only expected <$expect_out(0,string)>"
```

当在标准输入中输入

```
test
hi
```

是，运行结果如下

```
you typed: test
hi
I only expect: hi
```

### 2.2 模式-动作

expect 最常用的语法是来自 tcl 语言的模式-动作。这种语法极其灵活，下面我们就各种语法分别说明。

单一分支模式语法：

```
expect "hi" {send "You said hi"}
```

匹配到 hi 后，会输出"you said hi"

多分支模式语法：

```
expect "hi" { send "You said hi\n" } \
"hello" { send "Hello yourself\n" } \
"bye" { send "That was unexpected\n" }
```

匹配到 hi, hello, bye 任意一个字符串时，执行相应的输出。等同于如下写法：

```sh
expect {
    "hi" { send "You said hi\n"}
    "hello" { send "Hello yourself\n"}
    "bye" { send "That was unexpected\n"}
}
```

## 3. spawn 命令

上文的所有 demo 都是和标准输入输出进行交互，但是我们跟希望他可以和某一个进程进行交互。spawn 命令就是用来启动新的进程的。spawn 后的 send 和 expect 命令都是和 spawn 打开的进程进行交互的。结合上文的 send 和 expect 命令我们可以看一下更复杂的程序段了。

```sh
set timeout -1
spawn ftp ftp.test.com      //打开新的进程，该进程用户连接远程ftp服务器
expect "Name"               //进程返回Name时
send "user\r"               //向进程输入anonymous\r
expect "Password:"          //进程返回Password:时
send "123456\r"             //向进程输入don@libes.com\r
expect "ftp> "              //进程返回ftp>时
send "binary\r"             //向进程输入binary\r
expect "ftp> "              //进程返回ftp>时
send "get test.tar.gz\r"    //向进程输入get test.tar.gz\r
```

这段代码的作用是登录到 ftp 服务器 ftp ftp.uu.net 上，并以二进制的方式下载服务器上的文件 test.tar.gz。程序中有详细的注释。

## 4. interact

到现在为止，我们已经可以结合 spawn、expect、send 自动化的完成很多任务了。但是，如何让人在适当的时候干预这个过程了。比如下载完 ftp 文件时，仍然可以停留在 ftp 命令行状态，以便手动的执行后续命令。interact 可以达到这些目的。下面的 demo 在自动登录 ftp 后，允许用户交互。

```sh
spawn ftp ftp.test.com
expect "Name"
send "user\r"
expect "Password:"
send "123456\r"
interact
```

## 解决问题

### 1. 如何从机器 A 上 ssh 到机器 B 上，然后执行机器 B 上的命令？使之自动化完成？

下面一段脚本实现了从机器 A 登录到机器 B，然后执行机器 B 上的 pwd 命令，并停留在 B 机器上，等待用户交互。具体含义请参考上文。

```sh
#!/home/tools/bin/64/expect -f
set timeout -1
spawn ssh $BUser@$BHost
expect  "*password:" { send "$password\r" }
expect  "$*" { send "pwd\r" }
interact
```

### 2. 如何实现登录到跳板机然后再登录到其他机器

```sh
#! /usr/bin/expect

set JumpPwd    [lindex $argv 0]
set ServerHost [lindex $argv 1]
set ServerPwd  [lindex $argv 2]

set timeout 3
spawn ssh server-jump
expect {
    "yes/no" {
        send "(yes/no)\\?";
        exp_continue;
    }
    "*passphrase*"  {
        send "$JumpPwd\r"
    }
}

# next jump
expect "*user@*" {
    send "ssh $ServerHost\r"
}

expect {
    "*passphrase*"  {send "$ServerPwd\r"}
}
interact
```

## 参考

-   [expect - 自动交互脚本](http://xstarcd.github.io/wiki/shell/expect.html)
