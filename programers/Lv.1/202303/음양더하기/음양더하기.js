// 내 풀이
const solution = (nums, signs) => {
  return nums.reduce(
    (acc, cur, idx) => (signs[idx] ? acc + cur : acc - cur),
    0
  );
};
