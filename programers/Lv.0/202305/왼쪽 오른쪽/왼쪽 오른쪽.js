// 내 풀이
const solution = (strList) => {
  let idx = 0;
  return strList.find((el, i) => {
    idx = i;
    return ["l", "r"].includes(el);
  }) === "l"
    ? strList.slice(0, idx)
    : strList.slice(idx + 1);
};
