// 내 풀이
const solution = (myStr, s, e) => {
  const change = myStr
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join("");
  myStr = myStr.replace(myStr.slice(s, e + 1), change);
  return myStr;
};
