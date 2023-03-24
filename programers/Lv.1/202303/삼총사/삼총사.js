// 내 풀이
const solution = (num) => {
  let answer = 0;
  for (let i = 0; i < num.length; i++) {
    let [j, k] = [i + 1, i + 2];
    while (k + j < num.length * 2 - 1) {
      num[i] + num[j] + num[k] === 0 && answer++;
      if (k >= num.length - 1) {
        j += 1;
        k = j + 1;
      } else {
        k += 1;
      }
    }
  }
  return answer;
};
