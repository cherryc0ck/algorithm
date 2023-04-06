// 내 풀이
const solution = (s) => {
  return s
    .split(" ")
    .map((el) => {
      return [...el]
        .map((v, i) => {
          return i % 2 === 0 ? v.toUpperCase() : v.toLowerCase();
        })
        .join("");
    })
    .join(" ");
};
