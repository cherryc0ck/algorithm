// 내 풀이
const solution = (s) => {
  return ([4, 6].includes(s.length) && [...s].every((el) => el >= 0)) || false;
};
