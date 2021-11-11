# Spyc - 一个简单的PHP Yaml 类

```
# S P Y C
# a simple php yaml class
#
# license: [MIT License, http://www.opensource.org/licenses/mit-license.php]
# url : https://github.com/mustangostang/spyc
#
```
下载地址: [https://github.com/mustangostang/spyc](https://github.com/mustangostang/spyc)

```
include('../spyc.php');

$array = Spyc::YAMLLoad('../spyc.yaml');

echo '<pre><a href="spyc.yaml">spyc.yaml</a> loaded into PHP:<br/>';
print_r($array);
echo '</pre>';


echo '<pre>YAML Data dumped back:<br/>';
echo Spyc::YAMLDump($array);
echo '</pre>';
```

