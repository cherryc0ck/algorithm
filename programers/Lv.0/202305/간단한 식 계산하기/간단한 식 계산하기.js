// 내 풀이
const solution = (binomial) => {
  if (binomial.includes("+")) {
    return binomial.split(" + ").reduce((a, b) => Number(a) + Number(b));
  } else if (binomial.includes("-")) {
    return binomial.split(" - ").reduce((a, b) => a - b);
  } else return binomial.split(" * ").reduce((a, b) => a * b);
};

// eval 사용
const solution = eval;

// 좋은 풀이
function solution(binomial) {
  var answer = 0;
  const s = binomial.split(" ");
  const n1 = parseInt(s[0]);
  const n2 = parseInt(s[2]);

  switch (s[1]) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
  }
}
