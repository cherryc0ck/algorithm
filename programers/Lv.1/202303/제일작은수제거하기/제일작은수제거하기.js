// 내 풀이
const solution = (arr) => {
  return arr.filter((el) => el !== Math.min(...arr)) ?? [-1];
};

// 다른사람 풀이
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}
