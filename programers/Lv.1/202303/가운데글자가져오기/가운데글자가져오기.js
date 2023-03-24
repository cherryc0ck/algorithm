// 내 풀이
const solution = (s) => {
  let answer = "";
  answer =
    s.length % 2 === 0
      ? s[s.length / 2 - 1] + s[s.length / 2]
      : s[Math.floor(s.length / 2)];
  return answer;
};

// 다른사람 풀이
function solution2(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
