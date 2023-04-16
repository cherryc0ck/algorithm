// 내 풀이
const solution = (k, score) => {
  let hall = [];
  let answer = [];

  while (score.length) {
    const currentScore = score.shift();
    if (hall.length === k) {
      if (Math.min(...hall) < currentScore) {
        hall.sort((a, b) => b - a);
        hall.pop();
        hall.push(currentScore);
      }
    } else {
      hall.push(currentScore);
    }
    answer.push(Math.min(...hall));
  }

  return answer;
};

// 다른 사람 풀이
function solution(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}
