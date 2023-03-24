// 내 풀이
const solution = (n) => {
  let i = 1;
  let answer = 0;
  while (i <= n) {
    n % i === 0 && (answer += 1);
    i++;
  }
  return answer;
};

// 다른 사람 풀이
function solution(n) {
  return Array(n)
    .fill(1)
    .map((v, idx) => v + idx)
    .filter((v) => n % v === 0).length;
}
