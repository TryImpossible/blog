Array.prototype.insertionSort = function() {
  for (let i = 1; i < this.length; i++) {
      const temp = this[i];
      let j = i;
      while(j > 0) {
        if (this[j - 1] > temp) {
          this[j] = this[j - 1]
        } else {
          break;
        }
        j--;
      }
      this[j] = temp;
  }
  console.log(this.toString());
}

const arr = [46, 44, 44, 43, 41, 38, 34, 30, 28, 25, 20, 19, 17, 15, 19, 6, 1]
arr.insertionSort();