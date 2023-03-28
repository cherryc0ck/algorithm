// 내 풀이
const solution = (s) => {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let tmp = "";
  let answer = "";
  [...s].forEach((v) => {
    if (!isNaN(v)) {
      answer += v;
      return;
    }
    tmp += v;
    if (obj.hasOwnProperty(tmp)) {
      answer += obj[tmp];
      tmp = "";
    }
  });
  return Number(answer);
};

// 다른 사람 풀이
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
