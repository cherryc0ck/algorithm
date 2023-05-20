// 내풀이
const solution = (numStr) =>
  [...numStr].reduce((acc, cur) => acc + Number(cur), 0);
