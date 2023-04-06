// 내 풀이 1 => 33.4mb ~ 33.5mb
const solution = (n) => {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + +cur, 0);
};

// 내 풀이 2 => 33.6mb
const solution2 = (n) => {
  n = n.toString().split("");
  let answer = 0;
  while (n.length) answer += +n.pop();

  return answer;
};
