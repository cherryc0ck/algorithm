// 내 풀이
const solution = (sizes) => {
  let [w, h] = [[], []];
  sizes.map((v, i) => {
    w[i] = Math.max(...v);
    h[i] = Math.min(...v);
  });

  return Math.max(...w) * Math.max(...h);
};

// 다른사람 풀이 1
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}

// 다른사람 풀이 2
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}
