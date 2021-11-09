# [转]如何使用 Phpstorm 中的部署(Deployment)功能

原文地址 : [如何在 Webstorm/Phpstorm 中设置连接 FTP，并快速进行文件比较，上传下载，同步等操作](https://www.cnblogs.com/jikey/p/3486621.html)

Phpstorm 除了能直接打开 localhost 文件之外，还可以连接 FTP，除了完成正常的数据传递任务之外，还可以进行本地文件与服务端文件的异同比较，同一文件自动匹配目录上传，下载，这些功能是平常 IDE，FTP 软件中少见的，而且是很耗工作时间的一个操作。换句话说，在 Webstorm/Phpstorm 中操作 ftp 能找到原来版本控制的感觉。唯一的缺点是：上传，下载的打开链接要稍费时间，适合的场景在于单文件的编辑，这个如果网速够快一般可以忽略，而且就个人体验，虽然链接的速度稍慢，传输的速度并不慢。

1. 设置： 设置的入口有两处，

a. `Tools->Deployment->configruation`

![](https://file.wulicode.com/note/2021/11-09/10-05-13082.png)

b. `File->Settings->Deployment->configruation`

![](https://file.wulicode.com/note/2021/11-09/10-05-24130.png)

单击左上角加号新增一个 FTP 服务连接 然后配置 FTP host,username,pwd 等信息，配置好之后，可以 Test FTP connection 测试 FTP 是否连接成功。 然后点击 Root path 三点，如果有 FTP 服务端的目录读取出来，那就没问题，如果读取不出来，则在下面的 Advanced options 中选择 Passive mode(被动模式)。 然后在 Web server root URL 中填写域名信息或者空间商提供的免费三级域名。 然后在 Mappings 选择映射目录分别为本地，发布或 web 路径。

![](https://file.wulicode.com/note/2021/11-09/10-05-33700.png)

![](https://file.wulicode.com/note/2021/11-09/10-05-42800.png)

2. 出口：

在与 ftp 连接的项目文件右击就能发现 deployment，分别有四个选项(这个选项只有在连接成功后才能显示)：

![](https://file.wulicode.com/note/2021/11-09/10-05-54101.png)

1). `upload to ...`         上传到服务端

2). `Download from ...`     从服务端拉

3). `Compare with Deployed Version on ...`     本地版本与服务端版本进行比较

![](https://file.wulicode.com/note/2021/11-09/10-06-03954.png)

4). `Sync with Deployed to ...`     比较之外还可以直接进行操作.（3,4 的差别在于，3 只能浏览不能操作，4 可以操作）。

![](https://file.wulicode.com/note/2021/11-09/10-06-13781.png)

3. 显示扩展面板     `Tools->Deployment->configruation->Browse Remote host`

![](https://file.wulicode.com/note/2021/11-09/10-06-23565.png)

成功打开之后：

![](https://file.wulicode.com/note/2021/11-09/10-06-33120.png)

打开的目的在于对文件的方便编辑，可以这样操作：

![](https://file.wulicode.com/note/2021/11-09/10-06-41788.png)

4. 快捷操作

a. 可以在 keymap 中添加相应的快捷键操作。

![](https://file.wulicode.com/note/2021/11-09/10-06-52351.png)

b. 可以在 toolbar 上添加常用的图标以方便操作，为了防止误操作，建议操作的图标之间最好有隔离图标，虽然误操作可以利用本地历史记录找回来，但工作效率可能有所下降。

![](https://file.wulicode.com/note/topic/phpstorm-deploy/toolbar.gif)￼

另外提供除了版本控制之外的一份本地历史记录，多次挽救我于生死边缘：

`右键 -> localhost history -> show history`

Pub label 是对当前历史记录的一个名称记录

![](https://file.wulicode.com/note/topic/phpstorm-deploy/history.gif)￼
