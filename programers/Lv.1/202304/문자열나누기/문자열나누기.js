// 내 풀이
const solution = (s) => {
  s = s.split("");
  let answer = [];

  while (s.length) {
    let [firstCnt, secondCnt] = [0, 0];
    let a = s[0];
    let str = "";

    while (s.length) {
      const alphabet = s.shift();
      alphabet === a ? (firstCnt += 1) : (secondCnt += 1);
      str += alphabet;

      if (firstCnt === secondCnt) break;
    }
    answer.push(str);
  }

  return answer.length;
};
