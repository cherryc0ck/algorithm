// 내 풀이
const solution = (sides) => {
  sides.sort((a, b) => a - b);
  let result = 0;
  for (let i = sides[1] - sides[0] + 1; i < sides[1] + sides[0]; i++) {
    result++;
  }
  return result;
};
// 다른사람 풀이
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}
