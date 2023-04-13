// 내 풀이
const solution = (k, m, score) => {
  score.sort((a, b) => a - b);
  let answer = 0;

  while (score.length >= m) {
    let box = [];
    for (let i = 0; i < m; i++) {
      box.push(score.pop());
    }
    answer += Math.min(...box) * m;
  }

  return answer;
};

// 다른 사람 풀이
solution = (_, m, s) =>
  s
    .sort()
    .filter((_, i) => !((s.length - i) % m))
    .reduce((a, v) => a + v, 0) * m;
