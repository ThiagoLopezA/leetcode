/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s
    .split(" ")
    .map(e => e.split("").reverse().join(""))
    .join(" ");
};

const str = "hello world!";

console.log(reverseWords(str));
