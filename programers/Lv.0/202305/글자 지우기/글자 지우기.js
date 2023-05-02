// 내 풀이
const solution = (myStr, arr) => {
  return [...myStr].filter((el, i) => !arr.includes(i)).join("");
};
