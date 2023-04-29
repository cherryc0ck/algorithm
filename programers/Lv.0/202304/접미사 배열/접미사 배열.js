// 내 풀이
const solution = (myStr) => {
  let answer = [];
  for (let i = 0; i < myStr.length; i++) {
    answer.push(myStr.slice(i, myStr.length));
  }
  return answer.sort();
};
