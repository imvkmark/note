# 5. 使用日期和时间

### 6.1 选择合适的日期或者时间变量类型

```
CCYY-MM-DD   : 1000-01-01 - 9999-12-31
hh:mm:ss     : -838:59:59 - 838:59:59
DateTime(CCYY-MM-DD hh:mm:ss)
    : 1000-01-01 00:00:00 - 9999-12-31 23:59:59
Timestamp
    : 1970-01-01 00:00:00 - 2037-12-31 23:59:59
```

#### 6.2 MySQL 日期函数

```
# 进行日期的提取
Str_To_Date('May 13, 2007', '%M %D, %Y')

# 日期格式化
Date_Format(date, '%M %D, %Y');

# 时间格式化
Time_Format(time, '%T');

# 转换时区
Convert_Tz() 

# 当前日期
CurDate()

# 当前时间
CurTime()

# 当前日期时间
Now()

# Utc 
Utc_Date(), Utc_Time(), Utc_Timestamp()
```

格式化字符 | 含义
---      | ---
%Y       | 4位年份
%y | 2位年份
%M | 完整的月份名称(January-December)
%b | 月份的前三个字母(Jan-Dec)
%m | 数字月份, 带有前缀 0 (01-12)
%c | 数字月份, 无前缀(1-12)
%d | 数字日期, 带有前缀 0 (01-31)
%e | 数字日期, 无前缀 (1, 31)
%W | 工作日名称 (Sunday - Saturday)
%r | 时间, 12 小时, 以 AM - PM 结尾
%T | 时间, 24 小时制
%H | 小时, 带有前缀0 (00-23)
%i | 分钟, 带有0(00-59)
%s | 秒 (00-59)
%% | '%' 文字字符

### 6.3 客户端

```
# 设置默认时区
mysqld --default-time-zone 
```

### 6.4 Timestamp 的自动更新

```
# 根据设定来更新当前时间戳 + 更新当前时间戳
Create Table `t` (
    ts timestamp Not Null Default Current_Timestamp
       On Update Current_Timestamp
)
```

### 6.5 日期分离函数

函数 | 返回值
----|----
Year() | 年
Month()| 月
MonthName()| 月完整名称 (January-December)
DayOfMonth()| 1...31
DayName()|一周中的天数 (Sunday-Saturday)
DayOfWeek()| 1-7, 对应 (Sunday - Saturday)
WeekDay()|0-6, 对应 (Monday - Sunday)
DayOfYear()|一年中的天数值 (1...366)
Hour() | 小时数
Minute()| 分钟数
Second()| 秒数

### 6.6 日期组成函数

```
# 合成时间
MakeTime(10, 30, 30)

# 合成日期
MakeDate(2007, 60)

# 时间 + 秒的转换
Time_To_Sec()
Sec_To_Time()

# 时间 + 日期的转换
To_Days()
From_Days()

# 时间戳转换
Unix_TimeStamp()
From_UnixTime()
```

### 6.7 计算时间间隔

```
# 日期间隔
DateDiff(date1, date2)

# 时间间隔
TimeDiff(time1, time2)

# 时间戳间隔
TimestampDiff(Unit, dt1, dt2)
```

### 6.8 时间计算

```
# 时间加法
AddTime()

# 时间/日期时间 相加
Timestamp()

DateAdd(d, interval)
DateSub(d, interval)

d + Interval val unit
d - Interval val unit

# 计算生日
TimestampDiff(unit, birth, current)
```