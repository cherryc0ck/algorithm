// 내 풀이
const solution = (n) => {
  let answer = [];
  let divisor = 2;
  for (let i = 2; i < n; i++) {
    while (n >= 2) {
      if (n % divisor === 0) {
        answer.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
  }
  return [...new Set(answer)];
};
