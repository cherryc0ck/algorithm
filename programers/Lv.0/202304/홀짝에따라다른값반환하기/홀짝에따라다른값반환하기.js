// 내 풀이
const solution = (n) => {
  let arr = Array.from({ length: n }, (_, i) => i + 1);

  if (n % 2 === 0) {
    return arr.reduce((acc, cur) => {
      return cur % 2 === 0 ? acc + Math.pow(cur, 2) : acc;
    }, 0);
  }
  return arr.reduce((acc, cur) => (cur % 2 !== 0 ? acc + cur : acc), 0);
};

// 다른사람 풀이
function solution(n) {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  else return (n * (n + 1) * (n + 2)) / 6;
}
