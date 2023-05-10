// 내 풀이
const solution = (numList) => {
  return numList.length >= 11
    ? numList.reduce((acc, cur) => acc + cur)
    : numList.reduce((acc, cur) => acc * cur);
};
