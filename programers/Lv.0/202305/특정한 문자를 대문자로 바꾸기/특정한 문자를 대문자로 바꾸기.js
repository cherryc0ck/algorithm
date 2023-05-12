// 내 풀이
const solution = (myStr, alp) => {
  return [...myStr]
    .map((str) => (str === alp ? str.toUpperCase() : str))
    .join("");
};
