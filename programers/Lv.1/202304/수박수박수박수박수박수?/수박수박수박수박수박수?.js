// 내 풀이
const solution = (n, str = "수박") =>
  str.repeat(n / 2) + (n % 2 === 0 ? "" : "수");
