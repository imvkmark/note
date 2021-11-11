# Php 7.4 / Phpunit 9

安装 xdebug / Phpunit

```
# 安装 xdebug
$ pecl install xdebug

# 安装 phpunit 9
$ composer global require phpunit/phpunit ^9
```

启用 xdebug

```
# php.ini 文件
xdebug.mode = coverage
```

基本的 phpunit.xml 配置

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="https://schema.phpunit.de/9.5/phpunit.xsd"
    bootstrap="storage/bootstrap/autoload.php"
    cacheResultFile="storage/phpunit/test-results"
    executionOrder="depends,defects"
    forceCoversAnnotation="true"
    beStrictAboutCoversAnnotation="true"
    beStrictAboutOutputDuringTests="true"
    beStrictAboutTodoAnnotatedTests="true"
    backupGlobals="false"
    backupStaticAttributes="false"
    stopOnFailure="false"
    failOnRisky="true"
    processIsolation="true"
    failOnWarning="true"
    colors="true"
    convertErrorsToExceptions="true"
    convertNoticesToExceptions="true"
    convertWarningsToExceptions="true"
    verbose="true">
    <testsuites>
        <testsuite name="poppy-core">
            <directory>./poppy/core/tests/</directory>
        </testsuite>
        <testsuite name="config">
            <directory>./poppy/system/tests/Configuration</directory>
        </testsuite>
    </testsuites>
    <coverage cacheDirectory="storage/phpunit/coverage-cache" processUncoveredFiles="true">
        <include>
            <directory suffix=".php">./poppy</directory>
            <directory suffix=".php">./module</directory>
        </include>
        <report>
            <html outputDirectory="storage/phpunit/coverage-html" lowUpperBound="50" highLowerBound="90"/>
        </report>
    </coverage>
</phpunit>

```

同理, 编辑器忽略以下文件夹

```xml
storage/phpunit
```

编辑器中也需要对 phpunit 单元测试做相应的配置

![](https://file.wulicode.com/note/2021/11-11/15-49-04807.png)
