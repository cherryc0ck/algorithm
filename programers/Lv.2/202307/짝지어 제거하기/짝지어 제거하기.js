// 내 풀이
const solution = (s) => {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.at(-1) === s[i] ? arr.pop() : arr.push(s[i]);
  }

  return arr.length > 0 ? 0 : 1;
};
