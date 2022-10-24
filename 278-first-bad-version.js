function isBadVersion(number) {
  return number > 4;
}

function solution(isBadVersion, n) {
  let start = 1;
  let end = n;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (isBadVersion(middle)) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    if (!isBadVersion(end)) return end + 1;
  }
}

console.log(solution(isBadVersion, 5));
