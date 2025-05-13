---
prev: false
next: 
  text: '关于ReactNative如何配置ESLint、Prettier、Pre-commit Hook'
  link: '/react-native/关于ReactNative如何配置ESLint、Prettier、Pre-commit Hook/index'
---
### MAC
```
sudo lsof -i tcp:8081 #查找端口占用的进程

sudo kill -9 26467 #杀死进程
```
### Node
```
node -v  #显示版本，检查node是否正确安装

node src/test.js  #执行src目录下test.js文件
```
### NPM
```

npm -v  #显示版本，检查npm 是否正确安装
 
npm install  #安装package.json下所有的模块

npm install react-navigation --save 或 -S  #安装react-navigation模块，模块会记录在 package.json 的 dependencies 下

npm install react-navigation --save-dev 或 -D  #安装react-navigation模块，模块会记录在 package.json 的 devDependencies 下
 
npm install -g react-navigation  #全局安装react-navigation模块
 
npm list  #列出已安装模块

npm list -g  #列出全局安装的模块

npm -g list --depth 0  #列出全局安装的根模块，不包括子模块       

npm config list  #列出当前目录下npm配置

npm config list  #列出全局的npm配置

npm show react-navigation     #显示模块详情
 
npm update        #升级当前目录下的项目的所有模块
 
npm update react-navigation    #升级当前目录下的项目的指定模块
 
npm update -g react-navigation  #升级全局安装的react-navigation模块
 
npm uninstall react-navigation  #删除指定的模块

npm run  #执行在 package.json 中 scripts 属性下定义的脚本

npm init demo  #创建demo工程，仅包含package.json文件

npm publish demo  #发布demo模块
```

### YARN
```
yarn -v  #显示版本，检查yarn 是否正确安装

yarn 或者 yarn install  #安装package.json下所有的模块

yarn add react-navigation  #安装react-navigation模块，模块会记录在 package.json 的 dependencies 下

yarn add props-type --dev  #安装props-type模块，模块会记录在 package.json 的 devDependencies 下

yarn remove react-navigation   #移除react-navigation模块

yarn run  #执行在 package.json 中 scripts 属性下定义的脚本
```

### ReactNative
```
react-native --version #显示版本，检查react-native是否正确安装

react-native init demo  --version 0.40.0 #创建demo工程，并指定版本

react-native start  #启动服务

react-native run-android  #运行android

react-native run-ios  #运行ios

react-native run-ios --simulator 'iPhone X'  #运行iPhoneX

react-native upgrade  #根据package.json配置的RN版本,更新RN环境代码

react-native link  #链接原生工程
```

### Android
```
adb devices  #查看当前连接的Android设备

emulator -list-avds   #查看模拟器列表
~/Library/Android/sdk/tools/emulator -avd Pixel_XL_API_28   #启动模拟器

adb tcpip 5555 #打开端口号
adb connect 192.168.0.101:5555 #adb无线连接设备, 设备名:端口号
adb disconnect 192.168.0.101:5555  #断开无线连接

adb shell input keyevent 82  #打开调试菜单

adb install 包名  #安装apk

adb uninstall 包名 #卸载apk

adb shell am start -S -n 包名/.MainActivity   #启动app

adb shell am start -D -n 包名/.MainActivity   #调试app

./gradlew clean  #clean工程

./gradlew installDebug  #安装 Debug 包

./gradlew installRelease  #安装 Release 包

./gradlew assembleDebug  #打包apk，debug版

./gradlew assembleRelease  #打包apk，release版

```
### IOS
```
xcrun instruments -s   #查看安装的模拟器
xcrun instruments -w "iPhone X (12.1)"   #启动模拟器
xcrun simctl install booted <app 路径>   #安装指定应用
xcrun simctl launch booted <app identifier>   #运行指定的 app
xcrun simctl uninstall booted <app identifier>   #卸载指定的应用
open *.xcworkspace   #打开工程
```