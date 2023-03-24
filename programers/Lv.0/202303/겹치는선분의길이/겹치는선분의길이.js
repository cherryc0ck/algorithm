// 내 풀이
const solution = (lines) => {
  const arr = lines.flatMap(([x1, x2]) =>
    Array.from({ length: Math.abs(x2 - x1) }, (_, i) => i + x1)
  );
  const freq = arr.reduce(
    (acc, cur) => ({ ...acc, [cur]: acc[cur] ? acc[cur] + 1 : 1 }),
    {}
  );

  return Object.entries(freq).filter(([key, value]) => value >= 2).length;
};

// 다른 사람 풀이
function solution2(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}
