// 내 풀이
const solution = (strArr) => {
  const map = new Map();
  strArr.forEach((el) => {
    map.get(el.length)
      ? map.set(el.length, map.get(el.length) + 1)
      : map.set(el.length, 1);
  });
  return Math.max(...[...map.values()]);
};

// 다른 사람 풀이
function solution(strArr) {
  let ans = Array(31).fill(0);
  for (let s of strArr) ans[s.length]++;
  return Math.max(...ans);
}
