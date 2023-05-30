// 내 풀이
const solution = (n) => {
  return Array.from({ length: n }, (_, i1) => {
    return Array.from({ length: n }, (_, i2) => (i1 === i2 ? 1 : 0));
  });
};

// 다른 사람 풀이
function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }

  return answer;
}
