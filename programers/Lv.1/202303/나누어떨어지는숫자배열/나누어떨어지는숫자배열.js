// 내 풀이
const solution = (arr, divisor) => {
  const result = arr.filter((el) => el % divisor === 0).sort((a, b) => a - b);
  return result.length > 0 ? result : [-1];
};
