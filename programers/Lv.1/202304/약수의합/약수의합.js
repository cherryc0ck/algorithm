// 내 풀이
const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) answer += n % i === 0 && i;

  return answer;
};
