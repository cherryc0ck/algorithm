// 내 풀이
const solution = (myStr, suffix) => {
  return myStr.split("").some((el, i) => {
    return myStr.slice(i, myStr.length) === suffix;
  })
    ? 1
    : 0;
};
