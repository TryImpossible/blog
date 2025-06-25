# 第11章进阶算法之“搜索排序”

## 11-1 排序和搜索简介

### 排序和搜索是什么

- 排序：把某个乱序的数组变成升序或者降序的数组
- 搜索：找出数组中某个元素的下标

### JS 中的排序和搜索

- JS 中的排序：数组的`sort`方法
- JS 中的搜索：数组的`indexOf`方法

### 排序算法

- 冒泡排序
- 选择排序
- 插入排序
- 归并排序
- 快速排序
- ......

### 搜索算法

- 顺序搜索
- 二分搜索
- ......

## 11-2 JavaScript 实现：冒泡排序

### 冒泡排序的思路

- 比较所有相邻元素，如果第一个比第二个大，则交换它们
- 一轮下来，可以保证最后一个数是最大的
- 执行 n - 1 轮，就可以完成排序

### 实现

```javascript
Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
      // console.log(this.toString());
    }
    // console.log('--------------------------------------------------');
  }
  console.log(this.toString());
};

const arr = [48, 47, 46, 45, 41, 31, 29, 21, 21, 8, 8, 4, 2, 2];
arr.bubbleSort();
```

### 冒泡排序的时间复杂度

- 两个嵌套循环
- 时间复杂度：O(n ^ 2)

## 11-3 JavaScript 实现：选择排序

### 选择排序的思路

- 找到数组中的最小值，选中它并将其放置在第一位
- 接着找到第二小的值，选中它并将其旋转在第二位
- 以此类推，执行 n-1 轮

### 实现

```javascript
Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < this.length; j++) {
      if (this[j] < this[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = this[i];
      this[i] = this[minIndex];
      this[minIndex] = temp;
    }
    // console.log(this.toString());
    // console.log('--------------------------------------------------');
  }
  console.log(this.toString());
};

const arr = [45, 38, 38, 36, 34, 33, 31, 31, 26, 24, 22, 14, 11, 6, 4, 3];
arr.selectionSort();
```

### 选择排序的时间复杂度

- 两个嵌套循环
- 时间复杂度：O(n ^ 2)

## 11-4 JavaScript 实现：插入排序

### 插入排序的思路

- 从第二个数开始**往前比**
- 比它大就**往后排**
- 以此类推进行到最后一个数

### 实现

```javascript
Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    const temp = this[i];
    let j = i;
    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j--;
    }
    this[j] = temp;
  }
  console.log(this.toString());
};

const arr = [46, 44, 44, 43, 41, 38, 34, 30, 28, 25, 20, 19, 17, 15, 19, 6, 1];
arr.insertionSort();
```

### 插入排序的时间复杂度

- 两个嵌套循环
- 时间复杂度：O(n ^ 2)

## 11-5 JavaScript 实现：归并排序

### 归并排序的思路

- 分：把数组劈成两半，再递归地对子数组进行"分"操作，直到分成一个个单独的数
- 合：把两个数合并为有序数组，再对有序数组进行合并，直到全部子数组合并为一个完整数组

### 合并两个有序数组

- 新建一个空数组 res，用于存放最终排序后的数组
- 比较两个有序数组的头部，较小者出队并推入 res 中
- 如果两个数组还有值，就重复第二步

### 实现

```javascript
Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const orderLeft = rec(left);
    const orderRight = rec(right);
    const res = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
      } else if (orderLeft.length) {
        res.push(orderLeft.shift());
      } else if (orderRight.length) {
        res.push(orderRight.shift());
      }
    }
    return res;
  };
  const res = rec(this);
  res.forEach((n, i) => (this[i] = n));
  console.log(this.toString());
};

const arr = [49, 48, 37, 36, 35, 26, 24, 17, 12, 8];
arr.mergeSort();
```

### 归并排序的时间复杂度

- 分的时间复杂度是`O(logN)`
- 合的时间复杂度是`O(n)`
- 时间复杂度：`O(n * logN)`

## 11-6 JavaScript 实现：快速排序

### 快速排序的思路

- 分区：从数组中任意选择一个"基准"，所有比基准小的元素放在基准前面，比基准大的元素放在基准的后面
- 递归：递归地对基准前后的子数组进行分区

### 实现

```javascript
Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const left = [];
    const right = [];
    const mid = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };
  const res = rec(this);
  res.forEach((n, i) => {
    this[i] = n;
  });
  console.log(this.toString());
};

// const arr = [2,4,5,3,1];
const arr = [49, 48, 37, 36, 35, 26, 24, 17, 12, 8];
arr.quickSort();
```

### 快速排序的时间复杂度

- 递归的时间复杂度是`O(logN)`
- 分区操作的时间复杂度是`O(n)`
- 时间复杂度：`O(n * logN)`

## 11-7 JavaScript 实现：顺序搜索

### 顺序搜索的思路

- 遍历数组
- 找到跟目标值相等的元素，就返回它的下标
- 遍历结束后，如果没有搜索到目标值，就返回-1

### 实现

```javascript
// sequentialSearch.js
Array.prototype.sequentialSearch = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === item) {
      return i;
    }
  }
  return -1;
};

const res = [1, 2, 3, 4, 5].sequentialSearch(3);
console.log(res);
```

### 顺序搜索的时间复杂度

- 遍历数组是一个循环操作
- 时间复杂度：O(n)

## 11-8 JavaScript 实现：二分搜索

### 二分搜索的思路

- 从数组的中间元素开始，如果中间元素正好是目标值，则搜索结束
- 如果目标值大于或者小于中间元素，则在大于或小于中间元素的那一半数组中搜索

### 实现

```javascript
// binarySearch.js
Array.prototype.binarySearch = function (item) {
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = this[mid];
    if (element < item) {
      low = mid + 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const res = [1, 2, 3, 4, 5].binarySearch(5);
console.log(res);
```

### 顺序搜索的时间复杂度

- 每一次比较都使搜索范围缩小一半
- 时间复杂度：O(logN)

## 11-9 LeetCode：21.合并两个有序链表

### 题目描述

将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的
示例：

```
输入：1 -> 2 -> 4，1 -> 3 -> 4
输入：1 -> 1 -> 2 -> 3 -> 4 -> 4
```

### 解题思路

- 与归并排序中的合并两个有序数组很相似
- 将数组替换成链表就能解此题

### 解题步骤

- 新建一个新链表，作为返回结果
- 用指针遍历两个有序链表，并比较两个链表的当前节点，较小者先接入新链表，并将指针后移一步
- 链表遍历结束，返回新链表

```javascript
/**
 * Definition for singly-lined list.
 * function ListNode(val) {
 *      this.val = val;
 *      this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoList = function (l1, l2) {
  const res = new ListNode(0);
  let p = res;
  let p1 = l1;
  let p2 = l2;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;
  }
  if (p1) {
    p.next = p1;
  }
  if (p2) {
    p.next = p2;
  }
  return res.next;
};
```
