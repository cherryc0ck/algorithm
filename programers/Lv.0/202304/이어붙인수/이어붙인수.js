// 내 풀이
const solution = (arr) => {
  let [a, b] = ["", ""];
  arr.forEach((v) => (v % 2 === 0 ? (a += v) : (b += v)));
  return Number(a) + Number(b);
};
