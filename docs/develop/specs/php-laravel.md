# PHP 命名规范(Laravel 增补版)

## 代码风格统一

phpstorm 常用快捷键

```
ctrl/cmd + alt + L          # 格式化代码
ctrl/cmd + alt + O          # 项目 use 优化 / 优化导入
ctrl/cmd + shift + n        # 查找文件
ctrl/cmd + alt + shift + n  # 查找函数
```

## 代码推送

master : 线上分支 develop : 开发分支

任何人不得直接在这两个分支进行开发, 开发完毕后将代码用 pr
的方式提交合并请求, 由 pr 负责人审核完成后才能够合并到 develop 分支或者
master 分支

## 单元测试

必须对接口写单元测试, 否则测试不通过的代码一律打回

## 参数传递

(一般情况下来讲)类函数少于或者等于 4 个参数的, 可以直接使用参数传递

```
// before
public function beChid($data): bool
{
    $account_id = data_get($data, 'account_id');
    $initDb     = [
        'account_id'         => $account_id,
        'chid_status'        => array_get($data, 'status'),
        'chid_failed_reason' => array_get($data, 'reason') ?? '',
    ];
}

// after
public function beChid($account_id, $status, $reason = ''): bool
{
    $initDb     = [
        'account_id'         => $account_id,
        'chid_status'        => $status,
        'chid_failed_reason' => $reason,
    ];
}
```

## 数据管理方式

1. 本地数据库每日备份一次
1. 线上数据库使用策略等方式, 每日备份一次
1. 数据库采用独立服务器
1. 软件服务器和数据库服务器分开请求, 不得走一个服务器,
   便于数据库独立分开
1. 本地开发使用图片服务器进行图片的存储上传

## 数据模型

-   注释
-   报错
-   数据库调用最小化
