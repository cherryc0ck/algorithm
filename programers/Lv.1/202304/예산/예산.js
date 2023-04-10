// 내 풀이
const solution = (d, budget) => {
  d.sort((a, b) => a - b);
  let answer = 0;
  while (d[0] <= budget) {
    budget -= d.shift();
    answer++;
  }

  return answer;
};

// 다른 사람 풀이
function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}
