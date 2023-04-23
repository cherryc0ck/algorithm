// 내 풀이
const solution = (myStr, overStr, s) => {
  return myStr
    .split("")
    .map((v, i) => {
      if (i >= s) {
        return overStr[i - s] || v;
      }
      return v;
    })
    .join("");
};

// 다른 사람 풀이
function solution(my_string, overwrite_string, s) {
  return (
    my_string.slice(0, s) +
    overwrite_string +
    my_string.slice(s + overwrite_string.length)
  );
}
