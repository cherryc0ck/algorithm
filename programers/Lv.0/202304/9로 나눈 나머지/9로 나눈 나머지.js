// 내 풀이
const solution = (num) =>
  [...num].reduce((acc, cur) => Number(acc) + Number(cur)) % 9;
