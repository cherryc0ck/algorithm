// 내 풀이
const solution = (phoneNum) => {
  return phoneNum
    .split("")
    .map((v, i) => {
      return i >= phoneNum.length - 4 ? v : "*";
    })
    .join("");
};

// 다른사람 풀이
const solution2 = (n) => [...n].fill("*", 0, n.length - 4).join("");
