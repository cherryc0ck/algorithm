// 내 풀이
const solution = (a, b) => a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
