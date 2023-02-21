// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// 제한사항
// 0 ≤ n ≤ 1,000,000

// 입출력 예
// n	result
// 1234	10
// 930211	16

const solution = (n) => {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur), 0);
};
