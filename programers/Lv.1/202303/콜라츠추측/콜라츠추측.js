// 내 풀이
const solution = (n) => {
  let cnt = 0;
  while (cnt < 500 && n !== 1) {
    cnt++;
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
  }
  return cnt >= 500 ? -1 : cnt;
};
