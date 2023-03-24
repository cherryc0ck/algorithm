// 내 풀이
const solution = (myStr) => {
  let answer = 0;
  for (let i = 0; i < myStr.length; i++) {
    if (!isNaN(myStr[i] * 1)) {
      answer += Number(myStr[i]);
    }
  }
  return answer;
};
