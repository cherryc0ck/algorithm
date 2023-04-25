// 내 풀이
const solution = (l, r) => {
  const newArr = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(
    (el) => !el.toString().split("5").join("").split("0").join("")
  );

  return newArr.length ? newArr : [-1];
};
