// 내 풀이
const solution = (a, b) => {
  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);
  let answer = 0;
  while (a.length) {
    answer += a.shift() * b.shift();
  }
  return answer;
};

// 다른사람풀이 (a, b length는 같으니 a의 렝쓰만큼 리듀서 )
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
