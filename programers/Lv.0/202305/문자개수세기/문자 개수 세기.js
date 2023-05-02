// 내 풀이
const solution = (myStr) => {
  let answer = Array(52).fill(0);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  [...myStr].forEach((str) => (answer[alphabet.indexOf(str)] += 1));

  return answer;
};
