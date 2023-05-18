// 내 풀이
const solution = (arr, flag) => {
  return flag.reduce((acc, cur, idx) => {
    return cur
      ? [...acc, Array(arr[idx] * 2).fill(arr[idx])].flat()
      : acc.splice(0, acc.length - arr[idx]);
  }, []);
};
