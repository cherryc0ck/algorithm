// 내 풀이
const solution = (arr, k) => {
  const set = [...new Set(arr)];
  if (set.length > k) {
    return set.splice(0, k);
  } else if (set.length < k) {
    while (set.length !== k) {
      set.push(-1);
    }
    return set;
  }
  return set;
};
