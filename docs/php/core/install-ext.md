# 安装扩展

> 当前执行环境为 7.2

## 安装 redis

```
$ pecl install redis
```

在 安装 redis 的时候需要 igbinary.h

```
checking for json includes... /usr/local/Cellar/php@7.2/7.2.29/include/php
checking for redis json support... enabled
checking for igbinary includes... configure: error: Cannot find igbinary.h
ERROR: `/private/tmp/pear/temp/redis/configure --with-php-config=/usr/local/opt/php@7.2/bin/php-config --enable-redis-igbinary=y --enable-redis-lzf=y --enable-redis-zstd=y' failed
```

```
$ pecl install igbinary
```

可能又会出现

```
...
checking for libzstd files in default path... not found
configure: error: Please reinstall the libzstd distribution
ERROR: `/private/tmp/pear/temp/redis/configure --with-php-config=/usr/local/opt/php@7.2/bin/php-config --enable-redis-igbinary=y --enable-redis-lzf=y --enable-redis-zstd=y' failed
```

## 安装 swoole

```
$ pecl install swoole
```

在安装 swoole 的时候会遇到

错误信息如下：

```
....
In file included from /private/tmp/pear/temp/swoole/php_swoole.h:53:
/private/tmp/pear/temp/swoole/include/swoole.h:620:10: fatal error: 'openssl/ssl.h' file not found
#include <openssl/ssl.h>
         ^~~~~~~~~~~~~~~
1 error generated.
make: *** [php_swoole_cxx.lo] Error 1
ERROR: `make' failed
```

没有加 openssl 库的路径或者指定 openssl 库的路径不对，缺少头文件。
没有 openssl 的话使用 brew 安装一个 openssl，在 pecl 安装的时候加上对应路径即可

```javascript
enable openssl support? [no] : yes --with-openssl-dir=/usr/local/opt/openssl@1.1
```
