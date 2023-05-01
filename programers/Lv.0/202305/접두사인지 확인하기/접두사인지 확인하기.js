// 내 풀이
const solution = (myStr, isPrefix) => {
  return [...myStr].some((el, i) => myStr.slice(0, i) === isPrefix) ? 1 : 0;
};
