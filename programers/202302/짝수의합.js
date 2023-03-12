// 짝수의 합

// 문제 설명
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 0 < n ≤ 1000

// 입출력 예
// n	result
// 10	30
// 4	6

// 내 풀이
const solution = (n) => {
  return n > 1
    ? Array.from({ length: n })
        .map((_, i) => i + 1)
        .filter((v) => v % 2 === 0)
        .reduce((acc, cur) => acc + cur)
    : 0;
};

// 다른 사람 풀이
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}
