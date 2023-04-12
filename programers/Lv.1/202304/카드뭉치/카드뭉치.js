// 내 풀이
const solution = (cards1, cards2, goal) => {
  return goal.every((el, idx) => {
    if (el === cards1[0]) {
      cards1.shift();
      return true;
    } else if (el === cards2[0]) {
      cards2.shift();
      return true;
    }
  })
    ? "Yes"
    : "No";
};
