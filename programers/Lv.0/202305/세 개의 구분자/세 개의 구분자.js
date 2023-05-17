// 내 풀이
const solution = (myStr) => {
  const result = [...myStr]
    .map((el) => (["a", "b", "c"].includes(el) ? "X" : el))
    .join("")
    .split("X")
    .filter((el) => el);

  return result.length ? result : ["EMPTY"];
};

// 다른 사람 풀이 (정규 표현식)
const solution = (s) => s.match(/[^a-c]+/g) || ["EMPTY"];
