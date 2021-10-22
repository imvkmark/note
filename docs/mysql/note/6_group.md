# 聚合函数

### 8.1 各种统计函数

```mysql
# 总数
Count(*)

# Count + If 组合
Count(If(DayOfWeek(trav_date) In (1, 7), 1, Null))

# 最小
Min()

# 最大
Max()

# 总数
Sum()

# 平均
Avg()

# 唯一值
Distinct()

# 子群/分组/聚类函数
# 聚类函数会忽略 Null 值
... Group By trav_date

# 子群/分组/聚类函数选择
# Having 的操作是在已经做好分组的基础上进行的筛选
... Group By trav_date Having Count(*) > 3
```

### 8.2 With RollUp 进行汇总统计

在分组统计数据的基础上再进行统计汇总，即用来得到 group by 的汇总信息

数据表操作对应信息

| Information_Schema 表 | Show          |
| --------------------- | ------------- |
| Schemata              | Show Database |
| Tables                | Show Tables   |
| Columns               | Show Columns  |

### 9.1 如何正确的使用元数据

```
# 确定数据库是否存在
Select Schema_Name
    From Information_Schema.Schemata
    Where Schema_Name = ?

# 确定数据表是否存在
Select Table_Name
    From Information_Schema.Tables
    Where Schema_Name = ? and Table_Name = ?

# 列信息
Select *
    From Information_Schema.Columns
    Where Table_Schema = ? and Table_Name = ?
        And Column_Name = ?
```

### 9.2 显示创建数据表结构

```
# 显示创建数据表结构
Show Create Table tbl_name;

# 显示列
Show Columns From tbl_name;
```

### 9.3 获取服务器元数据

| 语句                    | 语句生成的信息                               |
| ----------------------- | -------------------------------------------- |
| `Select Version()`      | 服务器版本                                   |
| `Select Database()`     | 默认的数据库名称                             |
| `Select User()`         | 客户端连接时候给出的当前用户                 |
| `Select Current_User()` | 用来检查客户端权限                           |
| `Show [Global] Status`  | 服务器的全局状态指示器, 没有 Global 显示当前 |
| `Show Variables`        | 服务器配置变量                               |

### 9.4 确定服务器支持的存储引擎

```
Show Engines;
```
