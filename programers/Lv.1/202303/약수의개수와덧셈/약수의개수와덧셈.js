// 내 풀이
const solution = (left, right) => {
  const arr = Array.from({ length: right - left + 1 }, (_, i) => i + left);
  const newArr = arr.map((v, i) => check(v, i));

  return arr.reduce((acc, cur, idx) => {
    return newArr[idx] % 2 === 0 ? acc + cur : acc - cur;
  }, 0);
};

const check = (num, idx) => {
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    let j = num - answer;
    while (j !== 0) {
      if (j * i === num) {
        answer += 1;
        j = 0;
      } else {
        j--;
      }
    }
  }
  return answer;
};

// 다른 사람 풀이
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
