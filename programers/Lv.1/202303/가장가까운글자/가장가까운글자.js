// 내 풀이
const solution = (s) => {
  return s.split("").map((v, i) => {
    const find = s.slice(0, i).lastIndexOf(v);
    return find === -1 ? -1 : i - find;
  });
};
