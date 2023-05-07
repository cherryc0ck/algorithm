// 내 풀이
const solution = (numList) => {
  const a = numList
    .filter((el, i) => i % 2 === 0)
    .reduce((acc, cur) => acc + cur);
  const b = numList
    .filter((el, i) => i % 2 !== 0)
    .reduce((acc, cur) => acc + cur);
  return Math.max(a, b);
};
