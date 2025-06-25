# Android知识点

## app 启动步骤

1. 启动的起点发生在 Launcher 的活动中，启动一个 app 说简单点就是启动一个 Activity，那么我们说过所有组件的启动、切换、调试都由 AMS 来负责的，所以第一步就是 Launcher 响应了用户的点击事件，然后通知到 AMS;
2. AMS 得到 Launcher 的通知，就需要响应这个通知，主要就是新建一个 Task 去准备启动 Activity，并且告诉 Launcher 你可以"休息"了（Paused）
3. Launcher 得到 AMS 让自己"休息"的消息，那么就直接挂起，并告诉 AMS 我已经 Paused 了；
4. AMS 知道了 Launcher 已经挂起之后，就可以我放心的为新的 Activity 准备启动工作了，首先，App 肯定需要一个新的进程去进行运行，所以需要创建一个新进程，这个过程是需要 Zygote 参与的，AMS 通过 Socket 去各 Zygote 协商，如果需要创建进程，那么就会 fork 自身，创建一个线程，新的进程会导入 ActivityThread 类，这就是每一个应用程序都有一个 ActivityThread 与之对应的原因；
5. 进程创建好了，通过调用上述的 ActivityThread 的 main 方法，
   这是应用程序的入口，在这时开启消息循环队列，这也是主线程默认绑定 Looper 的原因；
6. 这时候，App 还没有启动完，要永远记住，四大组件的启动都需要 AMS 去启动，将上述的应用进程消息注册到 AMS 中，AMS 再在堆栈顶部取得要启动的 Activity，通过一系列链式调用去完成 App 启动；

## 简述 Android 中 UI 的刷新机制

### 界面刷新的本质流程

1. 通过`ViewRootImpl`的`scheduleTraversals()`进行界面的三大流程
2. 调用到`scheduleTraversals()`时不会立即执行，而是将该操作保存到**待执行队列**中。并给底层的刷新信号注册监听。
3. 当**VSYNC**信号到来时，会从**待执行队列**中取出对应的`scheduleTraversals()`操作，并将其加入到主线程的消息队列中。
4. 主线程从消息队列中取出并执行三大流程：`onMeasuer()-onLayout()-onDraw()`

## Java 内存模型

> 在 Java 的内存模型中，将内存区域划分为方法区、堆、程序计数器、本地方法栈、虚拟机栈五个区域。

## apk 的构建流程

1. 使用 aapt 处理资源文件，如编译 AndroidManifest.xml，编译生成 resources.arsc，生成 R.java 等。
2. 使用 javac 等工具编译成 java 文件，生成 class 格式文件。
3. 使用 dx 等工具将.class 和项目依赖的.jar 编译成.dex
4. 将生成的这些文件压缩进在一个 zip 文件
5. 签名

## 简述从点击图标开始 app 的启动流程

1. 点击 app 图标，Launcher 进程使用 Binder IPC 向 system server 进程发起 starActivity 请求
2. system server 进程收到 1 中的请求后，向 zygote 进程发送创建新进程的请求
3. zygote 进程 fork 出新的 App 进程
4. App 进程通过 Binder IPC 向 system server 进程发起 attachApplication 请求
5. system server 进程收到 4 中的请求后，通过 Binder IPC 向 App 进程发送 scheduleLauncherActivity 请求
6. App 进程的 ApplicationThread 线程收到 5 的请求后，通过 handler 向主线程发 LAUNCHER_ACTIVITY 消息
7. 主线程收到 6 中发送来的 Message 后，反射创建目标 Activity，回调 onCreate 等方法，开始执行生命周期方法，我们就可以看到应用页面了

## 单例模式-类加载机制

```java
public class Singleton {
   public static Singleton getInstance() {
      // 1.调用该方法时，都会访问LazyHolder.INSTANCE这个静态类的静态变量
      return LazyHolder.INSTANCE;
   }

   private static class LazyHolder {
      // 2. 访问LazyHolder.INSTANCE才会触发Singleton的初始化
      static final Singleton INSTANCE = new Singleton();
   }

   private Singleton() {}
}
```

1. 参考自类的加载规范：访问静态字段时，才会初始化静态字段所在的类
2. 因为类初始化是线程安全的，并且只会执行一次。因此在多线程环境下，依然能保证只有一个 Singleton 实例
3. 解释：getInstance()调用了 LazyHolder 的静态字段 INSTANCE，所以会触发 LazyHolder 的加载和初始化。LazyHolder 的初始化阶段是线程安全的且只执行一次，因此就算是多线程，也是只会创建一个 Singleton 对象，从而实现单例。

```java
public class Singleton {
   private static volatile Singleton instance = null;

   public static synchronized Singleton getInstance() {
      if (instance == null) {
         synchronized (Singleton.class) {
            if (instance == null) {
               instance = new Singleton();
            }
         }
      }
      return instance;
   }
   private Singleton() {}
}
```

## Handler

> 当 Android 应用程序启动时，该应用程序的主线程会自动创建一个 Looper 对象和与之关联的 MessageQueue。当主线程中实例化一个 Handler 对象后，它就会自动与主线程 Looper 的 MessageQueue 关联起来。所有发送到 MessageQueue 的 Messag 都会持有 Handler 的引用，所以 Looper 会据此回调 Handle 的 handleMessage()方法来处理消息。只要 MessageQueue 中有未处理的 Message，Looper 就会不断的从中取出并交给 Handler 处理。另外，主线程的 Looper 对象会伴随该应用程序的整个生命周期。

```
handler.send -> messageQueue.enqueueMessage 添加消息
Looper -> loop() -> messageQueue.next -> handler.dispatchMessage -> handlerMessage

hander message messageQueue Looper
```

## 常见的几种内存泄露

1. 单例造成的内存泄露
2. 非静态内部类创建静态实例造成的内存泄露
3. handler 造成的内存泄露
4. 线程造成的内存泄露
5. webview 造成的内存泄露
