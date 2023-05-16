// 내 풀이
const solution = (myStr, pat) => {
  return [...myStr]
    .map((el) => (el === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
};
