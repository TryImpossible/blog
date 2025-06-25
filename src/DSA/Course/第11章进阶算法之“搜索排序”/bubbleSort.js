Array.prototype.bubbleSort = function() {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j+1]) {
        const temp = this[j];
        this[j] = this[j+1];
        this[j+1] = temp;
      }
      // console.log(this.toString());
    }
    // console.log('--------------------------------------------------');
  }
  console.log(this.toString());
}

const arr = [48, 47, 46, 45, 41, 31, 29, 21, 21, 8, 8, 4, 2, 2]
arr.bubbleSort();