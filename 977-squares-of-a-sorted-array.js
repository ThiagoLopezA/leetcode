const SquareSortedArray = arr => {
  return arr.map(e => e * e).sort((a, b) => a - b);
};

const arr = [-4, -1, 0, 3, 10];
console.log(SquareSortedArray(arr));
