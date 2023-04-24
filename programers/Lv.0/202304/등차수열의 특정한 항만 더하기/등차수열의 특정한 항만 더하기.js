// 내 풀이
const solution = (a, d, inc) => {
  return Array(inc.length)
    .fill(a)
    .map((v, i) => d * i + v)
    .reduce((acc, cur, idx) => (inc[idx] ? acc + cur : acc), 0);
};
