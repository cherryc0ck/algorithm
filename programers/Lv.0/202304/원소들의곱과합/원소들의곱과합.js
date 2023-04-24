// 내 풀이
const solution = (arr) => {
  return arr.reduce((a, c) => a * c) <
    Math.pow(
      arr.reduce((a, c) => a + c),
      2
    )
    ? 1
    : 0;
};
