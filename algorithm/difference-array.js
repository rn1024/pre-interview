/**
 * 差分算法工具类
 */

class DifferenceArray {
  constructor(nums) {
    this.diff = new Array(nums.length).fill(0);
    this.nums = nums;
    this.initDiff();
  }

  initDiff = () => {
    if (!Array.isArray(this.nums)) return;
    for (let i = 0; i < this.nums.length; i++) {
      this.diff[i] = i === 0 ? this.nums[i] : this.diff[i] - this.diff[i - 1];
    }
  }

  increment = (i, j, val) => {
    this.diff[i] += val;
    if(j + 1 < this.diff.length) {
      this.diff[j+1] -= val;
    }
  }

  result = () => {
    let res = new Array(this.diff.length).fill(0);
    res[0] = this.diff[0];
    for (let i = 1; i <  this.diff.length; i++) {
      res[i] = res[i-1] + this.diff[i];
    }
    return res;
  }
}

const current = [0, 0, 0, 0, 0];

const differenceArray = new DifferenceArray(current);

differenceArray.increment(1,3,2);
const firstResult = differenceArray.result();
console.log('firstResult', firstResult);

differenceArray.increment(2,4,3);
const secondResult = differenceArray.result();
console.log('secondResult', secondResult);

differenceArray.increment(0,2,-2);
const thirdResult = differenceArray.result();
console.log('thirdResult', thirdResult);