// 내 풀이
const solution = (s) => {
  s = s.toLowerCase();
  const p = [...s].filter((el) => el === "p").length;
  const y = [...s].filter((el) => el === "y").length;

  return p === y ? true : false;
};

// 다른사람 풀이
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
