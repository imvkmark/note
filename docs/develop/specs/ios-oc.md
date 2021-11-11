# iOS 命名规范(Object-c) - v1.1

## 目的

统一规范 Xcode 编辑环境下 Objective-C 的编码风格和标准。

## 适用范围

适应所有 Objective-C 语言开发的项目。

## 编码规范

### 文件

-   项目文件使用有意义的单词，例如，工具类使用 Tools。
-   公共文件统一命名为 Public.h。
-   文件的目录按如下结构创建，例如图片等资源单独存放在 Images 文件夹下。

### 注释

单行注释采用`//`,多行注释采用`/**/`。

### 排版格式

-   代码的缩进应使用空格（SPACE），不能使用制表符（TAB），并且缩进以 2 个字符为单位。
-   中括弧的每一个括弧在源程序中要单独占一行。

```
//不正确用法
for (int i = 0; i < 10 ; i++)
{
    ……
}
//正确用法
for (int i = 0; i < 10; i++){
    ……
}
```

-   每行只能有一个语句

```
//不正确写法
NSUInteger objectIndex, stuffCount;
或
objectIndex = objectIndex + 10, stuffCount = stuffCount + 20;
或
@synthesize MyView, MyLabelView;
//正确写法
NSUInteger  objectIndex;
NSUInteger  stuffCount;
或
objectIndex = objectIndex + 10;
stuffCount = stuffCount + 20;
或
@synthesize MyView;
@synthesize MyLabelView;
```

### 命名规范

保留字

Objective-C 语言的保留字或者关键词全部使用小写字母，例如，if，int 等。

方法

-   方法的名称全部使用有意义的单词组成，且以小写开头，多单词组合时，后面的单词首字母大写，例如，-(void)getUserName。

```
// 方法的名称应全部使用有意义的单词组成，且以小写字母开头，多单词组合时，后面的单词首字母大写。
例如：
-(void)getUserInformation……
// 设置类变量的内容的方法应使用set作为前缀，读取变量的内容的方法应使用get作为前缀。
例如：
-(void)getUserName;
-(void)setUserName:(NSString *)userName;
// 方法参数命名
首字母小写，之后每个单词首字母都大写,具有足够的说明性,不需要添加类型前缀
例如：- (void)sendUserInfo:(NSDictionary *)userInfo
```

变量

变量必须起有意义的名字，第一个单词首字母小写，其他单词首字母大写，例如，`Nsstring *usernameIphone`;特殊类型的变量，命名时带上类型，例如 NsArray 的变量名 xxxArray；私有实例变量前加一个下划线，例如\_myPrivate。

```
NSString  *username;
```

-   对于一些特殊类型的变量，命名时要带上类型，如 NSArray 的变量命名为 xxxArray，其他的如 xxxDictionary，xxxSize 等。这样就可以从名称上知道是什么类型的变量。千万不能将 NSArray 的变量命名为 xxxDictionary。
-   对于要和 interfacebuilder 关联的的输出口变量，命名时要后缀以特定的控件名。

```
IBOutlet UILabel *userNameLabel;
```

-   对于使用 c 语言形式声明的变量，一些特定类型可采用一定的简写：

```
指针类型：P
结构体类型：Rec
数组类型：Arr
Core Graphic：CG
```

-   循环控制变量通常使用单一的字符如：i、j、k 等。使用有意义的名字，如 objectIndex 也是可以的。
-   尽量避免使用全局变量，如果必须使用全局变量则必须加前缀 '`Pub_`',同时应在变量名称中体现变量的类型。
-   私有实例变量前加一个下划线，如\_myPrivateVarible。

常量

-   避免在程序中直接出现常数，使用超过一次的应以宏定义的形式来替代。
-   常数的宏定义应与它实际使用时的类型相一致。如以 3.0 来定义浮点类型，用 3 表示整型。
-   常量（预定义，局部常量等）使用小写 k 开头的驼峰法 例如：kInvalidHandle, kWritePerm
-   一些常量前加特殊前缀，可以作为不同常量的区分，

```
UserDefaultsKey 的变量前加UDKEY_,
NotificationNameKey 前面加NNKEY_,
DictionaryKey 前面加DICTKEY_,
```

类

**类命名** a) 首字母大写，之后每个单词首字母都大写 b)

使用能够反映类功能的名词短语 c) 文件和类同名

举例：BaseClient、ImageStore**特殊类命名** a)

如果是视图控制器的子类应添加后缀"VC"或者"ViewController" b)

如果是视图的子类应添加后缀"View" c) 如果是按钮的子类应添加后缀"Button"

举例：SettingsVC、NavigationView d) 继承自 UIView 的类以 View 结尾。例如：

OperatorUsersInfomationView，LabelView 等。 e)

所有保存数据的实体以 Model 结尾。例如： UserModel**分类（类别）命名**

与类命名相同，此外需添加要扩展的类名和"+"举例：NSString+URLEncoding**协议（委托）命名**

与类命名相同，此外需添加"Delegate"后缀举例：ReplyViewDelegate

### 修改规范

注释

每个自定义函数进行说明，函数的参数可以说明，可以不说明；

全局的属性需要进行说明，常见性的可以不说明

1. 多人协作完成项目时，public 接口的每个方法都应该添加关于函数，参数，返回值以及副作用的注释
1. 当 if 语句的判断条件复杂时，需要用注释说明判断内容
1. 接口类（继承于 BaseClient）的头文件每个方法前都应该注明方法的作用

其他规范

1. 操作符前后都要加空格
1. 避免相同的代码段在多个地方出现
1. 语句嵌套层次不得超过 3 层
1. 每个实现文件建议在 500 行以内，不能超过 1000 行，超过之后应考虑通过抽象类对代码进行重构
1. 及时删除或注释掉无用的代码
1. UITableViewCell 里面的 network client 都要委托出来
1. 点击按钮之后需要切换按钮图片，当这两张图片没有关联时（例如一张图片相比另一张图片有选中效果），不应该设置为 UIControlSelected
1. 控件布局使用相对坐标
1. 确定不使用的代码应该删除

## 附加

-   方法之间应该有且只有一行，这样有利于在视觉上更清晰和更易于组织。方法内的空白应该分离功能，但通常都抽离出来成为一个新方法。
-   函数分组和 protocol/delegate 实现中使用#pragma mark -来分类方法。
-   使用属性时，实例变量应该使用 self.来访问和改变。这就意味着所有属性将会视觉效果不同，因为它们前面都有 self.
-   大括号在 case 语句中并不是必须的，除非编译器强制要求。当一个 case 语句包含多行代码时，大括号应该加上
-   需要提高代码的清晰性和简洁性时，三元操作符?:才会使用。单个条件求值常常需要它。多个条件求值时，如果使用 if 语句或重构成实例变量时，代码会更加易读。一般来说，最好使用三元操作符是在根据条件来赋值的情况下
-   单例对象应该使用线程安全模式来创建共享实例

```
+(DBManager *)sharedManager{
    static DBManager *manager = nil;
    static dispatch_once_t token;
        dispatch_once(&token,^{
            if(manager == nil) {
                manager = [[DBManager alloc]init];
            }
        });
    return manager;
}
```

-   换行符是一个很重要的主题，因为它的风格指南主要为了打印和网上的可读性
-   dealloc 方法应该放在实现文件的最上面，并且刚好在 [@synthesize ](/synthesize) 和 [@dynamic ](/dynamic) 语句的后面。在任何类中，init 都应该直接放在 dealloc 方法的下面。

init 方法的结构应该像这样：

```
- (instancetype)init {
    self = [super init]; // 或者调用指定的初始化方法
    if (self) {
        // Custom initialization
    }
    return self;
}
```

-   当访问一个 CGRect 的 x， y， width， height 时，应该使用 CGGeometry 函数代替直接访问结构体成员。苹果的 CGGeometry 参考中说到.

```
CGRect frame = self.view.frame;
CGFloat x = CGRectGetMinX(frame);
CGFloat y = CGRectGetMinY(frame);
CGFloat width = CGRectGetWidth(frame);
CGFloat height = CGRectGetHeight(frame);
```

-   私有属性应该声明在类实现文件的延展（匿名的类目）中.

```
@interface NYTAdvertisement ()
    @property (nonatomic, strong) GADBannerView *googleAdView;
    @property (nonatomic, strong) ADBannerView *iAdView;
    @property (nonatomic, strong) UIWebView *adXWebView;
@end
```

## 项目约定

### 设计模式

项目开发使用 MVC 设计模式，如果后期项目开发控制器(ViewController)因业务逻辑导致代码过多，可以考虑其他的设计模式对代码进行拆分(如:MVVM 设计模式)

### 三方库的依赖管理

三方库的管理使用 CocoaPods 进行统一管理，如果使用其他的管理需要和其他开发人员进行说明使用流程及三方调用说明(如 Cartchage)

### 项目目录结构

项目分六个文件夹:Configs(配置模块)、Interfaces(界面模块)、Sources(资源模块)、Tools(工具模块)、Thirds(三方库)、main()

Configs:存放配置文件:pch 文件，宏定义文件，三方库的 AppKey 配置文件，swift 桥接文件，

Sources：存放项目需要的一些资源文件，里面包含多个文件夹，如：Images(图片资源)、Videos(视频资源)、Audios(音频资源)、Fonts(字体资源)

Thirds:存放一些导入的三方库，每个文件夹都问对应三方库的文件名称

Main:存放项目初始化时的几个文件:main 文件，info.plist 文件，Appdelegate 文件，Assets.xcasets 文件

Tools:为工具类，一些自定义工具、类别、网络请求类，URI 类，socket 管理类，支付管理类

Interfaces:为界面模块，所有的界面文件都在这个文件里面，该文件分为多个模块，这部分是最为复杂的，需要根据业务流程等因素去进行创建，创建时商讨一下

BaseVC(基类)：该文件里面存放所有 ViewConroller，NavigationViewCotroller，webView 等类的基类，所有的控制器都继承该类

LoginRegister:登录注册模块，该文件夹问存放登录注册相关的界面

Protocols(协议模块):所有与协议有关的界面都放在这里，如登录注册时的登录注册协议

TarBars:该文件存放 tabbarViewController，tabbar(自定义 tabbar)等关于底部展示栏相关的类都放在这

Orders(订单模块):项目中所有的与订单有关的界面放在这，如车队订单，普通订单，订单详情，接单中心等所有与订单相关的界面，每种订单根据响应的业务在进行对应的划分:

Pays(支付模块):所有与支付相关的界面放在这

Appraiseals(评价模块):与评价相关的内容放在这里，如订单的评价，个人资料展示的评价内容等

Homes:首页模块

Messages(消息模块):该模块用于消息的展示，以及网易云 IM 相关的界面渲染类都放在这里

Mines(个人中心):该模块存放个人资料的展示，修改，及关于一些基本设置相关的东西等放在这里

Certifications(申请认证模块):一些需要进行审核相关东西放在这，如申请成为陪玩

老板和猎手分别对应的娱乐陪玩，上分教学，车队需要根据业务来进行具体的细分，目前对于业务了解不深，不好进行具体的分解，需要商讨

### 代码编写

文件的命名:

中间根据相关的业务进行具体的编写，结尾根据文件属性来写，如控制器 XXXViewController(LXDJXXXXVC)，模型:XXXModel,

cell:XXXTVCell 或 XXXCVCell, 视图:XXXView，网络请求:XXXRequest，

工具类：XXXTool, 协议:XXXProtocol ,单利或者管理类:XXXManager,

方法命名： 已 xxx 结尾，如事件 Event:Listener, 动作

Action，请求已 Request 结尾(请求的方法名称可以根据后台提供的 URI 进行），UI 的创建或初始化已 UI 或 Config 结尾，普通方法已 Method 结尾

属性命名: _ 所有的属性都已改属性的类型结尾 _

数据类型属性需要对其进行初始化   代码位置: \*

生命周期函数，多个是按照函数执行顺序依次实现 _ UI 创建或绘制函数 _

协议代理 _ 自定义函数或事件函数 _ 网络请求函数 \* 懒加载

## 备注

-   开发过程中禁止使用 storyboard
-   开发中属性尽可能的使用 `@property` 声明，如果放在实现类的{}里面，需要在其前面加上下划线(\_xxx)
-   数组使用下标取值的时候，要进行判断，防止数组越界导致 App 闪退
-   字典使用 key 取值的时候要判断 key 是否存在

## 附录

-   v1.1 2019-04-16 增加项目约定
-   v1.2 2017-03-01 第一版本的编码规范.
