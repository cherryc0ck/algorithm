// 내 풀이
const solution = (numList) => numList.reverse();

// 내 풀이 (리버스 안쓴)
const solution2 = (numList) =>
  numList.map((n, i) => numList[numList.length - 1 - i]);
