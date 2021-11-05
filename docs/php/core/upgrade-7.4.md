## 7.2 升级为 7.4 问题

### EscapeShellArg 解码问题

在 php-fpm @ 7.4 版本中@ centos 系统, mac 系统无此问题

```php
<?php
// 返回值为空
echo escapeshellarg('中文');

// string(2) "''"
```

解决方案

```php
<?php
// 此行需要加入到文档前
setlocale(LC_CTYPE, "UTF8", "en_US.UTF-8");
```
