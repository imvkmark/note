# 2. 从表中查询数据

### 3.1 列查询

```
mysql > select * from mail;
mysql > select mail, name from mail;
```

### 3.2 指定行查询(条件筛选)

```
mysql > select mail, name from mail where name='zhao';
mysql > select mail, name from mail where name like 'zh%';

mysql > select mail, name from mail where name='zhao' and area ='beijing';
```

### 3.3 格式化显示查询结果

> 这里利用各种的函数来格式化相应的位置

```
CONCAT()     : 链接字符串
MONTHNAME()  : 月份名称
DayOfMonth() : 天
Year()      : 年份
DateFormat   : 日期格式化
```

> 使用 `as` 对列使用别名
> 列别名在 `where` 中不可用
> 使用 `distinct` 进行唯一性处理

### 3.4 调试比较表达式

```
# 这里的 name='good' 便是表达式
mysql > select mail, name = 'good' from name
```

### 3.5 null 值的比较

对于 null 值使用 null 的比较操作符

`is null`, `is not null`, `<=>`

这里有两个函数需要注意

```
If(expr1 is not null, expr1, expr2);
IfNull(expr1, expr2)
```
这两个函数等价. 

### 3.6 排序/视图/多表查询

```
... order by a;
... order by a, b;
... order by a asc, b;
```

**多表查询**

```
... from profile 
    inner join
        profile_contact
    on 
        profile.id = profile_contact.profile_id
```

**子查询**

```
... from profile_contact 
    where
        profile_id in (select id from profile where area='beijing')
```

**查询头尾取出数据**

```
... Limit 1
... Limit 2, 1
```

**结果集再次排序**

```
select * from 
   (select name from profile order by birth desc limit 4) as t
   order by birth asc;
```

### 7.1 使用 `Order By`

```
# 标准
... Order By name [Desc][, title [Asc]];

# 表达式排序
... Order By Floor((size + 1023) / 1024)

# 时间排序
... Order By date;

# 可以根据字串的某部分进行排序
... Order By SubString_Index(bsn, '-', -3)
```

### 7.2 查询条件

```
# If
... Order By If(a=b, 0, 1);
```

### 7.3 按照用户自定义排序

```
# Field
... Order By Field(name, 'Zhang', 'Li', 'Wang')
```

### 7.4 Enum 排序

```
# 使用 Cast 进行转换为字串
# 默认 Enum 存储的是数值
... Order By Cast(day as Char);
```