// 내 풀이
const solution = (start, end) => {
  return Array.from({ length: start - end + 1 }, (_, i) => start - i);
};
