// 내 풀이
const solution = (nums) => {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      answer.push(nums[i] + nums[j]);
    }
  }
  return [...new Set(answer.sort((a, b) => a - b))];
};
