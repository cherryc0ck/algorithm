// 내 풀이1 (길지만 조금 더 직관적?)
const solution = (a, b) => {
  const count = [a, b].reduce((acc, cur) => (acc += cur % 2 === 0 ? 1 : 0), 0);
  return countEven(a, b, count);
};

// 짝수 카운트
const countEven = (a, b, count) => {
  switch (count) {
    case 0:
      return Math.pow(a, 2) + Math.pow(b, 2);
    case 1:
      return 2 * (a + b);
    case 2:
      return Math.abs(a - b);
  }
};

// 내 풀이2 (간단)
if ((a + b) % 2 === 0) {
  return a % 2 === 0 ? Math.abs(a - b) : Math.pow(a, 2) + Math.pow(b, 2);
}
return (a + b) * 2;
