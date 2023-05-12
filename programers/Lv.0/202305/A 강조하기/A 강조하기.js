// 내 풀이
const solution = (myStr) => {
  return [...myStr]
    .map((el) => {
      if (el === "a") return "A";
      else if (el === "A") return el;
      else if (el.toUpperCase() === el) return el.toLowerCase();
      return el;
    })
    .join("");
};

// 다른사람 풀이
function solution(myString) {
  return [...myString]
    .map((str) => (["a", "A"].includes(str) ? "A" : str.toLowerCase()))
    .join("");
}
