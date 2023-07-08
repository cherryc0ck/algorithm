// 내 풀이
const solution = (babbling) => {
  let answer = 0;
  for (let word of babbling) {
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;
    if (/^(aya|ye|woo|ma)+$/g.test(word)) answer++;
  }

  return answer;
};
