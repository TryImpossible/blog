---
prev: 
  text: 'ReactNative脚手架工程 - 认识RN'
  link: '/react-native/ReactNative脚手架工程 - 认识RN/index'
next: 
  text: 'ReactNative脚手架工程 - 目录结构'
  link: '/react-native/ReactNative脚手架工程 - 目录结构/index'
---
## 搭建环境

 关于 RN 的环境搭建这里就不再赘述了。详情参考[官方文档](https://reactnative.dev/docs/getting-started)

## 新建工程

使用`Facebook`提供的`react-native-cli`工具新建工程， 步骤如下：

![新建工程](93db238bd94930c2a4f9357a0b6b1a46.jpeg)执行`react-native init rndiy`，生成空的工程

![完成](11a715157fed65b75819c4081d4d5e5d.jpeg)`node_modules`安装成后，提示你运行工程。这里，我们在 Android、IOS 上都演示下

<div style="display: flex; align-items: self-end; width: 100%;">
    <img src="./4d5ad5f799018e37b156ec0f26e7bc20.jpeg" style="flex: 1; max-width: 50%; height: auto; object-fit: contain; margin: 4px;"/>
    <img src="./9aebd941d4dd2c6357f5e078d4c4df42.jpeg" style="flex: 1; max-width: 50%; height: auto; object-fit: contain; margin: 4px;"/>
</div>

新建空的 RN 工程就已经完成了, 是不是很简单。

## IOS 配置 Cocoapods 管理工程

### 1. 为什么使用 Cocoapods

> `Cocoapods`是 `IOS`工程第三方依赖管理工具，类似于 `RN`里`npm yarn`，它能高效的解决添加、移除、升级第三方依赖，使用得当的话对开发极其便利

### 2. 安装 Cocoapods

- Mac 打开  终端（Terminal）
- `sudo gem update --system`, 升级`Ruby`环境 
- `gem sources --remove https://rubygems.org/`,  移除现有的 Ruby 镜像
- `gem source -a https://gems.ruby-china.org/`, 添加  国内镜像源
- `gem sources -l`, 查看是否更新成功`
- `sudo gem install cocoapods`, 现在开始安装`Cocoapods`。如果提示没有权限的话，执行`sudo gem install -n /usr/local/bin cocoapods`
- `pod setup`, 至此 Cocoapods 环境搭建完成

### 3. 使用 Cocoapods

- 进入到`rndiy`根目录下，`cd ios`切换到 IOS 工程下
- `pod init`, 生成`Podfile`文件的
- `pod install`, 安装 

### 4. 可能遇到的问题：

- **NOTE: 执行`pod init`生成的`Podfile`文件内容有误，直接`pod install`会报错**
  ![](9e16cc65e55dbded0293939bc14810b8.png)
- **NOTE: 切记打开工程方式**
  ![](d64eaf50743cfd3162e9cd6f2d0a7a20.jpeg)

如果还有不明白的话，查看此 [教程](https://www.jianshu.com/p/0ba9edf8428d)

## Android 配置 APK 签名

>  关于 Apk 签名一般会由构建环境决定， 也就是说多个构建环境可能配置不同的签名文件， 也有可能生产环境的签名文件保存在服务器上，构建的时候下载下来。 我们都知道新建的`Android`工程只有两个环境`debug`和`release`，一般在开发中这是不满足的。这里，我们就根据`debug`和`release`环境分别创建不同的签名文件。

创建签名文件有两种方式，我们都来介绍下

### 1. 利用 Eclipse 生成, JDK 自带工具 keytool

![keytool参数](17bf99e9efb4001d92269ae165035f1d.png)

执行 `keytool -genkey -alias rndiy.keystore -keyalg RSA -validity 20000 -keystore rndiy.keystore`， 如图填写信息

![在这里插入图片描述](236084dffb619dacb3a7273384c6072a.png)

最后，生成 rndiy.keystore 签名文件

### 2. 利用 AndroidStudio 生成

打开 AS, 工具栏 Build->Generate Signed Bundle/Apk-> Android App Bundle->Create new,如图填写信息
![在这里插入图片描述](d6dc3ffee4c9d072d5d46352c5657d8c.png)
最后，生成 rndiy.jks 签名文件

关于`Android App Bundle`和`APK`签名的区别，大家有兴趣可以参考['Android App Bundle'](https://www.jianshu.com/p/3754d4e7f4e5)

以上，就是 Android 两种签名文件的实现方式。大家可能奇怪为什么签名文件格式不一致？具体什么区别还真答不上来。keystore 是 Eclipse 生成的， 而 jks 是 AndroidStudio 生成的，它们都是为了保证应用的唯一性.

我直接将签名信息配置在 gradle 中，构建的时候自己去加载签名文件。 为了区别 debug 和 release 环境， 我分别采用了不同的签名文件。**这里将签名文件参数化，便于查看修改**
![在这里插入图片描述](71b0a794680672f36a103ba4248165d6.png)
![在这里插入图片描述](d9425063a73ad8f71afae8a6e5770ae9.png)

## 小提示

- 当初在 git 上创建工程时失误选择了错误的语言类型，于是找了方法去修改

  1. 在工程根目录下找到`.gitattributesy`文件
  2. 添加 `*.js linguist-language=javaScript *.css linguist-language=javaScript *.html linguist-language=javaScript`，RN 使用 javascript 开发，所以语言选择 javascript

-  关于加快 Android 构建速度的些许意见
  ![在这里插入图片描述](0e33a786beb0e290aa348d5ab405df06.jpeg)

- 关于设置屏幕方向，比如竖屏
  1. Android 直接在`AndroidMainifest.xml`找到对应的 `MainActivity`，添加`android:screenOrientation="portrait"`
  2. IOS 找到`Device Orientation`,只勾选`Protrait`就可以了.如图：
     ![在这里插入图片描述](1cd656141d8596a38df8b8c78f78a9b1.jpeg)
