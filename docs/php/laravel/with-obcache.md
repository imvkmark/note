# 原生 php 代码写在 laravel 框架中代码不生效

问题来源: 使用 laravel 框架直接在 php 中输出图片是不显示的.
源码是:
**直接输出**

```
Route::get('png', function () {
    $im = @imagecreate(200, 50) or die("创建图像资源失败");
    imagecolorallocate($im, 255, 255, 255);
    $text_color = imagecolorallocate($im, 0, 0, 255);
    imagestring($im, 5, 0, 0, "Hello world!", $text_color);
    imagepng($im);
    imagedestroy($im);
});
```

显示内容如下:

![](https://file.wulicode.com/note/2021/11-11/15-50-11138.png)

这里的头信息是:

![](https://file.wulicode.com/note/2021/11-11/15-50-24416.png)

需要继续修改头信息, 于是更改为如下的代码

**存在头信息**

```
Route::get('png', function () {
    ob_start();
    $im = @imagecreate(200, 50) or die("创建图像资源失败");
    imagecolorallocate($im, 255, 255, 255);
    $text_color = imagecolorallocate($im, 0, 0, 255);
    imagestring($im, 5, 0, 0, "Hello world!", $text_color);
    imagepng($im);
    imagedestroy($im);
    $content = ob_get_clean();
    return response($content, 200, [
        'Content-Type' => 'image/png',
    ]);
});
```

有些框架可以, 但是有些框架也不行:
可以的显示:

![](https://file.wulicode.com/note/2021/11-11/15-50-39495.png)

不可以的显示:

![](https://file.wulicode.com/note/2021/11-11/15-50-54214.png)

在不可以的框架中, 由于考虑可能是`缓存/缓冲区`的问题, 输出下 `ob_get_status()` 结果发现是有内容的

```
Array
(
    [name] => default output handler
    [type] => 0
    [flags] => 112
    [level] => 0
    [chunk_size] => 4096
    [buffer_size] => 8192
    [buffer_used] => 1
)
```

所以我们需要清除缓冲区内容, 然后重新生成并且输出, 也就是输出的时候是保证不要输出任何内容/ 包含空行, 当然出现这个问题的原因可能是编码的时候是 `utf-8` 但是存在 `bom` 头导致的信息.

最终源码解决如下:

```
Route::get('png', function () {
	if (ob_get_status()) {
		ob_end_clean();
	}
	ob_start();
	$im = @imagecreate(200, 50) or die("创建图像资源失败");
	imagecolorallocate($im, 255, 255, 255);
	$text_color = imagecolorallocate($im, 0, 0, 255);
	imagestring($im, 5, 0, 0, "Hello world!", $text_color);
	imagepng($im);
	imagedestroy($im);
	$content = ob_get_clean();
	return response($content, 200, [
		'Content-Type' => 'image/png',
	]);
});
```

问题解决:

![](https://file.wulicode.com/note/2021/11-11/15-51-10410.png)

