// 내 풀이
const solution = (myStr, m, c) => {
  let answer = "";
  while (myStr[c - 1]) {
    answer += myStr[c - 1];
    c += m;
  }
  return answer;
};
