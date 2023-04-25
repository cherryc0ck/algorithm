// 내 풀이
const solution = (arr, query) => {
  query.forEach((q, i) => (i % 2 === 0 ? arr.splice(q + 1) : arr.splice(0, q)));
  return arr;
};
