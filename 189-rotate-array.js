const rotateSimplified = (nums, k) => {
  let i = 0;
  while (i < k) {
    nums.unshift(nums.pop());
    i++;
  }
};

const rotateOptimized = (nums, k) => {
  if (nums.length === 1 || k === 0 || k % nums.length === 0) return;
  if (k > nums.length) {
    k = k % nums.length;
  }
  nums.unshift(...nums.splice(-k));
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const expected = [5, 6, 7, 1, 2, 3, 4];

rotateOptimized(arr, 3);

console.log(arr === expected);
