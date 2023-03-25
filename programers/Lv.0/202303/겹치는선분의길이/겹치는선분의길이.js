// 내 풀이
const solution = (lines) => {
  const result = [];
  const arr = lines
    .map((line) => {
      const len = Math.abs(line[0] - line[1]);
      return Array(len)
        .fill(line[0])
        .map((v, i) => v + i);
    })
    .flat()
    .sort()
    .reduce((acc, cur) => {
      acc === cur && result.push(cur);
      return cur;
    });

  return [...new Set(result)].length;
};

// 다른 사람 풀이
const solution2 = (lines) => {
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
function solution3(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}
