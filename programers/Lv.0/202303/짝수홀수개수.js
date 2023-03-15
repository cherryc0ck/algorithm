// 짝수 홀수 개수

// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ num_list의 길이 ≤ 100
// 0 ≤ num_list의 원소 ≤ 1,000

// 입출력 예
// num_list	result
// [1, 2, 3, 4, 5]	[2, 3]
// [1, 3, 5, 7]	[0, 4]

// 내 풀이
const solution = (numList) => {
  let answer = [0, 0];
  let [j, h] = answer;
  numList.forEach((v) => (v % 2 === 0 ? (j += 1) : (h += 1)));
  return [j, h];
};

// 다른사람 풀이 (나머지를 배열의 인덱스로 화룡)
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}

// 바로 리턴하게끔.
function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length,
  ];
}
