// 내 풀이
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
