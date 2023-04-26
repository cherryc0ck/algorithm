// 내 풀이
const solution = (log) => {
  const obj = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };
  return log.map((el, i) => obj[log[i + 1] - el]).join("");
};
