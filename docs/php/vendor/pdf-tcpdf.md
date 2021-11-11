# [转] PHP 生成 PDF 完美支持中文,解决 TCPDF 乱码

原文地址: [PHP 生成 PDF 完美支持中文,解决 TCPDF 乱码](http://www.programgo.com/article/22332074183/)

PHP 生成 PDF 格式文件以 TCPDF 为基础，TCPDF 是一个用于快速生成 PDF 文件的 PHP5 函数包。TCPDF 基于 FPDF 进行扩展和改进。支持 UTF-8，Unicode，HTML 和  XHTML。在基于 PHP 开发的 Web 应用中，使用它来输出 PDF 文件是绝佳的选择。但毕竟这款开源软件是外国人开发的，对中文的支持也不是那么尽如人   意，因此我们需要对它作进一步的强化。

首先要到 TCPDF 官网下载 TCPDF 最新版。访问 [http://www.tcpdf.org](http://www.tcpdf.org) ，单击导航条上的”Download”链接，即可下载到最新版本的 TCPDF 压缩包。因为里面包含了许多的 TCPDF 范例和字体文件，因此下载的文件比较大，大概有 10M 左右。下载完后解压它，会得到一个名为 tcpdf 的目录，此目录的结构大概是这样的：

![](https://file.wulicode.com/note/2021/11-11/16-11-28540.png)

打开 tcpdf 目   录下的 examples 目录，下面有 50 多个范例文件，其中 example_038.php 就是用来测试东亚字体的(比如简体/繁体中文、日文等等)，打开此文件，找到$pdf->SetFont  这一行，修改为：

```
$pdf->SetFont(‘stsongstdlight’, ”, 20);
```

这一行代码的作用是设置 PDF 正文所用的字体及字号。其中”stsongstdlight”表示”STSongStdLight”字体，这是 Adobe Reader 的默认简体中文字体，TCPDF 中已经内置这个字体的配置文件，我们只需直接调用即可。接下来，

```
$pdf->Write(0,’敏捷的棕毛狐狸跃过那只懒狗‘, ”, 0, ’L', true, 0, false, false, 0);
$pdf->Write(0,’The quick brown fox jumps over the lazy dog.’, ”, 0, ’L', true, 0, false, false, 0);
$pdf->Write(0,’1234567890′, ”, 0, ’L', true, 0, false, false, 0);
```

保存，然后访问  [http://localhost/tcpdf/examples/example_038.php](http://localhost/tcpdf/examples/example_038.php)  就可以生成一份 PDF 文档了:

这种方式生成的 PDF 文件的优点是：文件体积小，生成快速。但也有缺点是，没有嵌入中文字体，只限于安装了 Adobe Reader 之后才能正常显示。那万一用户使用的是 FoxIt Reader 或者是 Linux 操作系统呢？显示效果就不一样了。因此，为了保证生成的 PDF 文件在任何环境下都有同样的显示效果，嵌入字体是必需的。

Windows 下有很多中文字体，但是我们要用在 TCPDF 中的中文字体有下面几个要求：

-   支持 Unicode，因为 TCPDF 支持的是 Unicode;
-   体积越小越好;
-   最好是也支持繁体中文;

然而 TCPDF 不支持 TTF 字体文件，因此我们先将它转换成 TCPDF 支持的格式，然后再使用。在 TCPDF 目录下有个 fonts 子目录，这个子目录是存放转换后的字体, tools 中有个转换工具, 可以转换字体, 下面是转换的步骤：

我们把下载到的  simhei.ttf  复制到  `TCPDF\tools`  下面，然后打开命令行，切换到此路径下，输入如下命令：

```
php ./tcpdf_addfont.php -b -t TrueTypeUnicode -i simhei.ttf

>>> Converting fonts for TCPDF:
*** Output dir set to ../tecnickcom/tcpdf/fonts/
+++ OK   : ~/tecnickcom/tcpdf/tools/simhei.ttf added as simhei
>>> Process successfully completed!
```

之后，可以发现此目录下生成了`simhei.ctg.z`,`simhei.php`,`simhei.z`  这三个文件。

生成不成功也没问题，另一个方法是到 Joomla 中文官网http://www.joomlagate.com下载Joomla中文程序找到\language\pdf_fonts目录下复制droidsansfallback.php、droidsansfallback.z以及droidsansfallback.ctg.z这三个文件也是可以的

打开 example_038.php 文件，将

```
$pdf->SetFont(‘stsongstdlight’, ”, 20);
$pdf->SetFont(‘simhei’, ”, 20);
```

这样就能够调用我们刚才生成的字体
