// 내 풀이
const solution = (myStr) =>
  myStr
    .split("x")
    .filter((el) => el)
    .sort();
