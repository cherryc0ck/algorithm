// 내풀이
const solution = (angle) => {
  return angle >= 90 ? (angle === 90 ? 2 : angle === 180 ? 4 : 3) : 1;
};

// 다른사람 풀이
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
