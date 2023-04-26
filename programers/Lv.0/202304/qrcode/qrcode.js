// 내 풀이
const solution = (q, r, code) =>
  [...code].filter((el, i) => i % q === r).join("");
