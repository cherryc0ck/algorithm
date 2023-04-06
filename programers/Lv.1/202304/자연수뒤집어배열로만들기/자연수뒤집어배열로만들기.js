// 내 풀이
const solution = (n) => [...(n + "")].reverse().map((el) => Number(el));

// 다른 사람 풀이
function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
