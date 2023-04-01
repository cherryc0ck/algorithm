const solution = (nums) => {
  const set = new Set(nums);
  return nums.length / 2 < [...set].length ? nums.length / 2 : [...set].length;
};
