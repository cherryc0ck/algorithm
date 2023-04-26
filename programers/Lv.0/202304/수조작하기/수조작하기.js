// 내 풀이
const solution = (n, control) => {
  const obj = {
    w: +1,
    s: -1,
    d: +10,
    a: -10,
  };
  control.split("").forEach((v) => (n += obj[v]));
  return n;
};
