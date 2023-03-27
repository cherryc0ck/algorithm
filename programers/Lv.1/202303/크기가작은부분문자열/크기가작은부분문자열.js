// 내 풀이
const solution = (t, p) => {
  let answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    answer += t.slice(i, p.length + i) <= p ? 1 : 0;
  }
  return answer;
};
