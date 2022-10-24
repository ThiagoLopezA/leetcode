const moveZeroes = function (nums) {
  let zeroes = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroes.push(...nums.splice(i, 1));
      i--;
    }
  }
  nums.push(...zeroes);
};

const arr = [0, 0, 1];
moveZeroes(arr);
console.log(arr);
