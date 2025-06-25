# Flutter知识点

## State生命周期

### 各阶段核心任务

| 阶段 | 关键方法 | 核心任务 | 常见错误 |
| :--- | :----- | :------ | :----- |
| 创建 | createState | 创建状态对象 | 未正确传递初始化数据 |
|     | initState | 初始化状态和控制器 | 访问未就绪的上下文 |
|     | didChangeDependencies | 处理初始依赖 | 忽略全局配置变化 |
| 更新 | setState | 更新内部状态 | 未检查mounted状态 |
|     | didChangeDependencies | 响应依赖变化 | 过度重建 |
|     | didUpdateWidget | 处理你组件更新 | 未比较新旧属性 |
| 销毁 | deactivate | 暂停活动和保存状态 | 过度清理可恢复资源 |
|     | dispose | 彻底释放资源 | 忘记取消订阅导致内存泄漏 |