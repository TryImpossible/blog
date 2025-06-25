# JavaScript知识点

## 节流与防抖

- **节流**：事件触发后，规定时间内，事件处理函数不能再次被调用。也就是说在规定的时间内，函数只能被调用一次，且是最先被触发调用的那次。
- **防抖**：多次触发事件，事件处理函数只能执行一次，并且是在触发操作结束时执行。也就是说，当一个事件被触发准备执行事件函数前，会等待一定的时间（这段时间是自己去定义的，比如 1 秒），如果没有两次被触发，那么就执行，如果被触发了，那就本次作废，重新从新触发的时间开始计算，并再次等待 1 秒，直到能最终执行！

### 使用场景

- 节流：滚动加载更多、搜索框搜索联想功能、高频点击、表单重复提交......
- 防抖：搜索框输入，并在输入守以后自动搜索、手机号，邮箱验证输入检测、窗口大小 resize 变化后，再重新渲染

```javascript
/**
 * 节流函数 一个函数执行一次后，只有大于设定的执行周期才会执行第二次。
 * 有个需要频繁触发的函数，出于优化性能的角度，在规定时间内，只让函数触发的第一次生效，后面的不生效。
 * @param fn要被节流的函数
 * @param delay规定的时间
 */
function throttle(fn, delay) {
  // 记录上一次函数触发时间
  var lastTime = 0;
  return function () {
    // 记录当前函数触发时间
    var nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      // 修正this指向问题
      fn.call(this);
      // 同步执行结束时间
      lastTime = nowTime;
    }
  };
}
document.onscroll = throttle(function () {
  console.log("scroll事件被触发了" + Date.now());
}, 200);

/**
 * 防抖函数 一个需要频繁触发的函数，在规定时间内，只让最后一次生效，前面的不生效
 * @param fn要被防抖的函数
 * @param delay规定的时间
 */
function debouce(fn, delay) {
  // 记录上一次的延时器
  var timer;
  return function () {
    // 清除上一次延时器
    timer && clearTimeout(timer);
    // 重新设置新延时器
    timer = setTimout(() => {
      // 修正this指向问题
      fn.call(this);
    }, delay);
  };
}
document.getElementById("bn").onclick = debounce(function () {
  console.log("按钮被点击了" + Date.now());
}, 10000);
```
