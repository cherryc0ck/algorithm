// 내 풀이
const solution = (strList, ex) =>
  strList.filter((el) => !el.includes(ex)).join("");
