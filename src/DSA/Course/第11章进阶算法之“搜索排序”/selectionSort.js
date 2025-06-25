Array.prototype.selectionSort = function() {
  for (let i = 0; i < this.length-1; i++) {
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
}

const arr = [45, 38, 38, 36, 34, 33, 31, 31, 26, 24, 22, 14, 11, 6, 4, 3]
arr.selectionSort();