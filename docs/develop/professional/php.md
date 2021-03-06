# PHP 开发 - 岗位职责

**岗位职责**

把需求或产品实现为用户可用的软件产品

-   参与项目框架设计、系统分析及流程控制、沟通对接等工作。
-   独立或者分组进行针对项目需求的功能开发和优化。
-   拥有良好的代码习惯，要求结构清晰，命名规范，逻辑性强，代码冗余率低；
-   根据项目开发进度和任务分配，开发相应的应用模块。
-   根据需要不断修改完善项目功能。
-   参入核心代码的编写
-   运营数据处理和分析

**任职资格**

-   2 年及以上 PHP 开发经验
-   具有 MySQL 索引优化、查询优化和存储优化经验、PHP 缓存技术、静态化设计方面的经验，要求随时随地贯彻最优化开发的思想，所负责的项目须能承担繁重的访问压力, 熟悉大数据量下性能管理及优化，并有较强数据库规划能力
-   精通 PHP/MySQL 开发，精通 memcache、squid、redis 等缓存技术者优先；
-   悉 MVC 开发，掌握部分开源 PHP 框架, Laravel 5 等；
-   熟悉 Javascript 语言和 HTML 语言熟悉 HTTP 协议及 W3C 相关互联网规范，熟练掌握 XHTML、CSS、 DIV 等页面技术；
-   熟悉 Unix/Linux 操作系统和开发环境
-   具有优良的编程风格和习惯, 要求结构清晰、命名规范、逻辑性强、代码冗余率低
-   有创新思想，敢于挑战新事物，了解用户体验
-   责任心强，良好的对外沟通和团队协作能力，能承受工作压力, 具有项目管理经验优先
-   团队协同工具少不了的(Git+)

**加分项目:**

1. 有大型负载开发
2. 能够编写项目技术文档者优先考虑
3. 有成熟作品和独立开发整站的经验

**氛围足够轻松和舒适**

1. 良好的技术提升空间
2. 全栈/高阶工程师的发展方向
3. 济南范围内高薪待遇和高薪目标, 有项目管理经验继续加薪
4. 缴纳五险一金, 法定节假日
5. 良好的办公环境和高配的 Mac 办公机器

## 岗位评级

### 初级

1. 能够独立配置 Linux 上的 Web 运行环境，包括 PHP/MySQL/Nginx/Apache 等软件及其相关扩展
2. 知道如何使用 PHP 手册、如何使用百度、谷歌等搜索引擎快速解决问题；
3. 了解面向对象软件开发基本概念；
4. 了解 mvc 思想和运行机制
5. 熟练利用 MySQL 进行动态应用开发；
6. 能够独立开发留言板、小型 CMS 等应用；
7. 能够独立编译安装 PHP Extension；
8. 对常用的 Linux 命令能够熟练使用；
9. 能够使用 ZF/Yii/CI 等框架进行应用开发

### 中级

1. 对面向对象开发有深入了解
2. 能熟练应用常用设计模式来应用开发
3. 了解 php 框架底层实现原理和设计思想
4. 能够对 mysql 等数据库进行性能优化
5. 了解并能应用常用缓存技术 redis/memcache 等
6. 熟练掌握常用的数据结构和算法
7. 熟练使用 composer 并能够自己开发 composer 扩展包

1、能够独立解决 Windows/Linux 上的 web 运行环境中出现的问题，能够熟练对 Web 运行环境进行优化；

2、了解如何使用 C 语言进行 PHP Extension 的开发；

3、熟练使用 Memcache/Redis 等工具对 Web 应用进行优化；

5、可以熟练进行较为复杂的 shell 编程；

6、能够对 MySQL 等数据库进行性能优化，能够独立查找并解决 Web 应用中的性能问题；

7、深入理解面向对象软件开发原则，对设计模式有深入学习、研究；

8、熟练掌握常见的数据结构及算法；

9、对 ZF/YII/CI 等框架源代码有过研究，了解框架精髓；

### 高级

1. 了解 php 工作机制及 php-fpm 运行机制
2. 熟悉 php 内存性能和效率优化
3. 对 zend 引擎有基本了解
4. 对 swoole, workerman 异步多线程有深入了解
5. 对 redis/memcache 有深入了解
6. 对分布式, 高并发系统有深入了解
7. 有自主开发框架的能力

1、熟练利用 C 语言进行 PHP Extension 的开发，并能够快速解决 Web 运行环境出现的复杂问题；

2、对 Linux 系统有深入的研究，可以解决 Linux 系统出现的复杂问题；

3、对 MySQL 索引优化、Memcached 实现等工具的实现原理有深刻理解；

4、对分布式、高并发系统有深入研究；

5、在 PHP 领域中主导或参与部分开源项目，对 PHP 行业发展做出较为明显的贡献；

## 基本技能

1. 基本能力

-   搭建开发环境, 并且能够处理因为开发环境问题导致的问题

    -   nginx

        -   413 无法上传图片
        -   无响应, 但是服务器能够正常访问(代理问题)
        -   服务器提交但是返回 500 , 查询 nginx 日志看 127.0.0.1:9000 端口的 cgi 响应
        -   根据日志来找错误

-php - 无法加载指定扩展 (进行扩展的安装) - 500 错误 / 一般是权限问题 - 通过 PHP 错误日志来处理问题所在

-   mysql

    -   表的创建/修改
    -   表的 [增 / 删 / 改 / 查]
    -   建立基本索引

-   其他服务

    -   supervisor
    -   centrifuge
    -   crontab

-   代码管理

    -   git 版本管理工具

        -   git 提交/推送
        -   git 代码合并
        -   提交合并请求
        -   代码审核(Review)

2. 基础能力

    - php 基础

        - 类, 对象
        - 函数基础

    - Mysql 基础

        - 索引
        - mysql 基础函数
        - mysql 慢查询优化

    - Linux 服务器

        - 基本环境搭建
        - 服务配置维护

    - 前端技术

        - html, css, JavaScript
        - vue, react 框架
