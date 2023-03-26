// 내 풀이
const solution = (nums) => {
  return Array.from({ length: 10 }, (_, i) => i)
    .filter((el) => !nums.includes(el))
    .reduce((acc, cur) => acc + cur);
};

// 다른사람 풀이
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
