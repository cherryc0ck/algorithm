// 내 풀이
const solution = (s) => {
  return s
    .split(" ")
    .map((v) => {
      return [...v]
        .map((el, idx) => {
          return idx === 0 ? el.toUpperCase() : el.toLowerCase();
        })
        .join("");
    })
    .join(" ");
};
