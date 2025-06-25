Array.prototype.quickSort = function() {
  const rec = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const left = [];
    const right = [];
    const mid = arr[0];
    for (let i = 1; i < arr.length;i++) {
      if (arr[i] < mid){
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)];
  }
  const res = rec(this);
  res.forEach((n, i) => {this[i] = n})
  console.log(this.toString());
}

// const arr = [2,4,5,3,1];
// const arr = [49, 48, 37, 36, 35, 26, 24, 17, 12, 8]
const arr = [5, 4, 3, 2, 1]
arr.quickSort();

// function quickSort(arr, left = 0, right = arr.length - 1) {  
//   if (left < right) {  
//       let pivotIndex = partition(arr, left, right);  
//       quickSort(arr, left, pivotIndex - 1);  
//       quickSort(arr, pivotIndex + 1, right);  
//   }  
//   return arr;  
// }  

// function partition(arr, left, right) {  
//   let pivot = arr[right];  
//   let i = left;  
//   for (let j = left; j < right; j++) {  
//       if (arr[j] < pivot) {  
//           [arr[i], arr[j]] = [arr[j], arr[i]];  
//           i++;  
//       }  
//   }  
//   [arr[i], arr[right]] = [arr[right], arr[i]];  
//   return i;  
// }  

// // 使用示例  
// let arr = [3, 6, 8, 10, 1, 2, 1];  
// console.log(quickSort(arr).toString());  // 输出: [1, 1, 2, 3, 6, 8, 10]