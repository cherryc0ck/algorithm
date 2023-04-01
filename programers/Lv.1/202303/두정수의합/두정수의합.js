// 내 풀이
const solution = (a, b) => {
  return Array.from(
    { length: Math.abs(a - b) + 1 },
    (_, i) => i + Math.min(a, b)
  ).reduce((acc, cur) => acc + cur);
};

// 다른사람 풀이 (가우스 공식)
function adder(a, b) {
  var result = 0;
  //함수를 완성하세요
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
