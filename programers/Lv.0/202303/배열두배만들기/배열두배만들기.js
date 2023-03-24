// 내 풀이 (Map 사용)
const solution = (numbers) => numbers.map((v) => v * 2);

// 다른사람 풀이 (Reduce 사용)
function solution2(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
