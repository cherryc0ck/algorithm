// 내 풀이
const solution = (arr) => {
  let i = 1;
  if (arr.length === 1) return arr;
  while (arr.length !== Math.pow(2, i)) {
    arr.length > Math.pow(2, i) ? i++ : arr.push(0);
  }
  return arr;
};
