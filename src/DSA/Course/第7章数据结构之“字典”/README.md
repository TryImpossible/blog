# 第7章数据结构之“字典”

## 7-1 字典简介

### 字典是什么

- 与集合类似，字典也是一种存储唯一值的数据结构，但它是以**键值对**的形式来存储
- ES6 中有字典，名为 Map
- 字典的常用操作：键值对的增删改查

## 7-2 LeetCode：349.两个数组的交集

### 题目描述

```
给定两个数组，编写一个函数来计算它们的交集
示例1：
  输入：nums1 = [1,2,2,1], nums2 = [2,2]
  输出：[2]
示例2：
  输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  输出：[9,4]
说明：
  输入结果中每个元素一定是唯一的
  我们可以不考虑输出结果的顺序
```

### 解题思路

- 求 nums1 和 nums2 都有的值
- 用字典建立一个映射关系，记录 nums1 里有的值
- 遍历 nums2，找出 nums1 里也有的值

### 解题步骤

- 新建一个字典，遍历 nums1，填充字典
- 遍历 nums2，遇到字典里的值就选出，并从字典中删除

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = new Map();
  nums1.forEach((n) => {
    map.set(n, true);
  });

  const res = [];
  nums2.forEach((n) => {
    if (map.get(n)) {
      res.push(n);
      map.delete(n);
    }
  });
  return res;
};
```

## 7-3 LeetCode：20.有效的括号

### 题目描述

```
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。


示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
```

### 优化解题

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const stack = [];
  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map.has(c)) {
      stack.push(c);
    } else {
      const t = stack[stack.length - 1];
      if (map.get(t) === c) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
```

## 7-4 LeetCode：1.两数之和

### 题目描述

```
给定一个整数数组nums和一个目标值target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例：
  给定 nums = [2,7,11,15], target = 9

  因为 nums[0] + nums[1] = 2 + 7 = 9
  所以返回[0, 1]
```

### 解题思路

- 把 nums 想象成相亲者
- 把 target 想象成匹配条件
- 用字典建立一个婚姻介绍所，存储相亲者的数字和下标

### 解题步骤

- 新建一个字典作为婚姻介绍所
- nums 里的值，逐个来介绍所找对象，没有合适的就先登记着，有合适的就牵手成功

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const n2 = target - n;
    if (map.has(n2)) {
      return [map.get(n2), i];
    } else {
      map.set(n, i);
    }
  }
};
```

## 7-5 LeetCode：3.无重复字符的最长子串

### 题目描述

```
给定一个字符串，请你找出其中不含有重复字符串的最长子串的长度
示例1：
  输入："abcabcbb"
  输出：3
  解释：因为无重复字符的最长子串是"abc"，所以其长度为3

示例2：
  输入："bbbb"
  输出：1
  解释：因为无重复字符的最长子串是"b"，所以其长度为1

示例3：
  输入："pwwkew"
  输出：3
  解释：因为无重复字符的最长子串是"wke"，所以其长度为3。
      请注意，你的答案必须是子串的长度，"pwke"是一个子序列，不是子串
```

### 解题思路

- 先找出所有的不包含重复字符的子串
- 找出长度最大那个子串，返回其长度即可

### 解题步骤

- 用双指针维护一个滑动窗口，用来剪切子串
- 不断移动右指针，遇到重复字符，就把左指针移动到重复字符的下一位
- 过程中，记录所有窗口的长度，并返回最大值

```javascript
/**
 * @param {string} s
 * @return {number[]}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let res = 0;
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;
    }
    res = Math.max(res, r - l + 1);
    map.set(s[r], r);
  }
  return res;
};
```

## 7-6 LeetCode：76.最小覆盖子串

### 题目描述

```
给你一个字符串S、一个字符串T，请在字符串S里面找出：包含T所有字符的最小子串
示例：
  输入：S = "ADOBECODEBANC"，T = "ABC"
  输出："BANC"
说明：
  如果S中不存这样的子串，则返回空字符串""
  如果S中存在这样的子串，我们保证它是唯一的答案
```

### 解题思路

- 先找出所有的包含 T 的字串
- 找出长度最小那个子串，返回即可

### 解题步骤

- 用双指针维护一个滑动窗口
- 移动右指针，找到包含 T 的子串，移动左指针，尽量减少包含 T 的子串的长度
- 循环上述过程，找出包含 T 的最小子串

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0;
  let r = 0;
  const need = new Map();
  for (let c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }
  let needType = need.size;
  let res = '';
  while (r < s.length) {
    cosnt c = s[r];
    if (need.has(c)) {
      need.set(c, need.has(c) - 1)
      if (need.get(c) === 0) needType -= 1;
    }
    while(needType === 0) {
      const newRes = s.subString(l, r+1)
      if (!res || newRes.length < res.length) res = newRes;
      const c2 = s[l];
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1);
        if (need.get(c2) === 1) needType += 1;
      }
      l += 1;
    }
    r += 1;
  }
  return res;
};
```

## 7-7 字典-章节总结

### 技术要点

- 与集合类似，字典也是一种存储唯一值的数据结构，但它是以**键值对**的形式来存储
- ES6 中有字典，名为 Map
- 字典的常用操作：键值对的增删改查
