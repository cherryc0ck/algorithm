// 내 풀이
const solution = (s) => {
  s = s.split(" ").map((el) => Number(el));
  return `${Math.min(...s)} ${Math.max(...s)}`;
};

// 다른 사람 풀이 (굳이 map 한번 더 돌릴필요없음)
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}
