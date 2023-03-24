// 내 풀이
const solution = (nums, dir) => {
  if (dir === "right") {
    return [nums.pop(), ...nums];
  } else {
    nums.push(nums.shift());
    return nums;
  }
};
