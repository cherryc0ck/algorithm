// 최빈값 구하기

// 문제 설명
// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

// 제한사항
// 0 < array의 길이 < 100
// 0 ≤ array의 원소 < 1000

// 입출력 예
// array	result
// [1, 2, 3, 3, 3, 4]	3
// [1, 1, 2, 2]	-1
// [1]	1

// 내 풀이
const solution = (array) => {
  const newObj = array.reduce(
    (acc, cur) => {
      acc.hasOwnProperty(cur) ? (acc[cur] += 1) : (acc[cur] = 1);
      return acc;
    },
    { 0: 0 }
  );

  const answer = Object.entries(newObj).filter((v) => {
    return v[1] === Math.max(...Object.values(newObj));
  });

  return answer.length > 1 ? -1 : Number(answer[0][0]);
};

// 다른 사람 풀이 (Map, set활용)
function solution2(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
