// 내 풀이
const solution = (numList) => {
  let cnt = 0;
  numList.forEach((el) => {
    while (el !== 1) {
      el = el % 2 === 0 ? el / 2 : (el - 1) / 2;
      cnt += 1;
    }
  });
  return cnt;
};
