// 내 풀이
const solution = (myStr, pat) => {
  return [...myStr].reduce((acc, cur, idx) => {
    return myStr.slice(idx, pat.length + idx) === pat ? acc + 1 : acc;
  }, 0);
};
