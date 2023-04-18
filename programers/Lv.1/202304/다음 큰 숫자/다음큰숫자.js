// 내 풀이
const solution = (n) => {
  const a = [...n.toString(2)].filter((el) => el === "1").length;
  let nextNum = n + 1;

  while (true) {
    const b = [...nextNum.toString(2)].filter((el) => el === "1").length;
    if (a === b) {
      break;
    }
    nextNum++;
  }
  return nextNum;
};

// 다른 사람 풀이1 (shift 연산)
function nextBigNumber(n) {
  var i, j;
  for (i = 0; !(n & 1); i++) {
    n = n >> 1;
  } // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i
  for (j = 0; n & 1; i++, j++) {
    n = n >> 1;
  } // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j
  for (j--, n++; i !== j; i--) {
    n = n << 1;
  } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
  for (i; i; i--, n++) {
    n = n << 1;
  } // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입
  return n;
}

// 다른 사람 풀이2 (정규 표현식 + 재귀)
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
