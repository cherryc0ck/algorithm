// 내 풀이
const solution = (ineq, eq, n, m) => {
  if (ineq === "<") {
    if (eq === "=") return n - m <= 0 ? 1 : 0;

    return n - m < 0 ? 1 : 0;
  } else {
    if (eq === "=") return n - m >= 0 ? 1 : 0;

    return n - m > 0 ? 1 : 0;
  }
};

// 다른사람풀이 (훨씬 더 직관적)
const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}
