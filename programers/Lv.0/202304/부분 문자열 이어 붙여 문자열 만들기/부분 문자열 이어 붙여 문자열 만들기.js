// 내 풀이
const solution = (myStr, parts) => {
  let answer = "";
  parts.forEach(([s, e], i) => (answer += myStr[i].slice(s, e + 1)));

  return answer;
};
