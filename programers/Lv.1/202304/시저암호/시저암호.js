const solution = (s, n) => {
  const lower = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return s
    .split("")
    .map((v) => {
      if (v === " ") {
        return " ";
      } else if (v.toUpperCase() === v) {
        return upper[upper.indexOf(v) + n];
      } else if (v.toLowerCase() === v) {
        return lower[lower.indexOf(v) + n];
      }
    })
    .join("");
};
