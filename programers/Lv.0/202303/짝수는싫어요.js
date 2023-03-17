// 짝수는 싫어요

// 문제 설명
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

// 입출력 예
// n	result
// 10	[1, 3, 5, 7, 9]
// 15	[1, 3, 5, 7, 9, 11, 13, 15]

// 내 풀이 for반복문 ver
const solution = (n) => {
  let answer = [];
  for (let i = 1; i <= n; i += 2) answer.push(i);
  return answer;
};

// 내 풀이 while반복분 ver
const solution2 = (n) => {
  let answer = [];
  while (n > 0) {
    n % 2 !== 0 && answer.push(n);
    n--;
  }
  return answer.reverse();
};

// 다른사람 풀이
const solution3 = (n) =>
  Array.from({ length: n }, (_, i) => i + 1).filter((i) => i % 2 !== 0);
