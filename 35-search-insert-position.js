var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    if (nums[middle] === target) return middle;
    if (target < nums[middle]) right = middle - 1;
    if (target > nums[middle]) left = middle + 1;
  }
  return left;
};

const arr = [-5, 3, 5, 8, 12];

console.log(searchInsert(arr, -6));
