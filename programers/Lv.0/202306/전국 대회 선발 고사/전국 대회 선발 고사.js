// 내 풀이
const solution = (rank, attendance) => {
  const s = [10000, 100, 1];
  let answer = 0;
  for (let i = 1; i <= rank.length; i++) {
    if (s.length < 1) break;
    const t = rank.indexOf(i);
    if (attendance[t]) {
      answer += s[0] * t;
      s.shift();
    }
  }
  return answer;
};
