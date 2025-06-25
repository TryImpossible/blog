# 第6章数据结构之“集合”

## 6-1 集合简介

### 集合是什么

- 一种**无序且唯一**的数据结构
- ES6 中有集合，名为 Set
- 集合的常用操作：去重、判断某元素是否在集合中、求交集......

```javascript
// 去重
const arr = [1, 1, 2, 2];
const arr2 = [...new Set(arr)];

// 判断元素是否在集合中
const set = new Set(arr);
const has = set.has(1);

// 求交集
const set2 = new Set([2, 3]);
const set3 = new Set([...set].filter((item) => set2.has(item)));
```

## 6-2 LeetCode：349.两个数组的交集

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

- 求交集且无序唯一
- 使用集合

### 解题步骤

- 用集合对 nums1 去重
- 遍历 nums1，筛选出 nums2 也包含的值

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // return [..new Set(nums1)].filter(n => new Set(nums2).has(n))
  return [..new Set(nums1)].filter(n => nums2.includes(n))
};
```

## 6-3 前端与集合：使用 ES6 中 Set

### Set 操作

- 使用 Set 对象：new、add、delete、has、size
- 迭代 Set：多种迭代方法、Set 与 Array 互转、求交集/差集

## 6-4 集合章节总结

### 技术要点

- 集合是一种**无序且唯一**的数据结构
- ES6 中有集合，名为 Set
- 集合的常用操作：去重、判断某元素是否在集合中、求交集......
