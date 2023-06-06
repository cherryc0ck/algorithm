// 내 풀이
const solution = (board, k) => {
  let answer = 0;
  for (let i = 0; i < board.length; i++) {
    if (i > k) break;
    for (let j = 0; j < board[0].length; j++) {
      if (i + j > k) break;

      answer += board[i][j];
    }
  }
  return answer;
};
