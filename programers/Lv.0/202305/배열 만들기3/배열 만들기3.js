// 내 풀이
const solution = (arr, intervals) => {
  const [[a1, b1], [a2, b2]] = intervals;
  return arr.slice(a1, b1 + 1).concat(arr.slice(a2, b2 + 1));
};
