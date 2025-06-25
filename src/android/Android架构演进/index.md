# Android架构演进

> 由页面组成 页面架构

1. 视图：xml compose java/kotlin，不同的页面架构参与的角色不一样；
2. 模型：数据的获取以及对数据进行的不依赖视图的操作；新闻 时间 1 分钟 5 分钟 半小时之前，poi 当前经纬度 1 公里；
3. 逻辑：视图和模型之间的交互逻辑及数据；

> 不用任何页面架构  

xml：  
activity：有各种角色

### 优点：
开发快

### 缺点：
角色不清晰 越来越乱 耦合太高 不易维护 臃肿

### 应用场景：
关于 帮助 用户 隐私 意见反馈

## MVC
M：Model  
V：View xml  
C：Controller activity

### 优点：
完成了模型的解耦

### 缺点：
1. 作为逻辑的 activity 里面包含了很多视图的代码；静态
2. 随着时间的推移，会将越来越多的代码放到 activity，导致 activity 越来越臃肿；动态
应用场景：设置 阅读历史 历史订单

## MVP
M：Model  
V：View xml+activity/fragment/自定义 view+view 的 interface  
P：Presenter

### 优点：
角色清晰 -> 好维护 -> 适合需求复杂、多变的页面

### 缺点：
view interface -> 加一个功能，需要修改多个页面 体力活

### 应用场景：
需要多变、复杂的页面 主页、详情页

## MVVM
双向数据绑定 google databinding  
M：Model  
V：View xml+activity/fragment/自定义 view+view 的 interface  
VM：ViewModel

### 优点：
角色清晰 没有 interface

### 缺点：
xml 包含了代码，调试不方便

## Compose 
没有了 xml，天生就是数据驱动  
M：Model  
V：Viewcoder  
VM：ViewModel
