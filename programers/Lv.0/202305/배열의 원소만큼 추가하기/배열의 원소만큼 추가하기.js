// 내 풀이
const solution = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.from({ length: cur }, (_) => cur));
  }, []);
};

// 다른 사람 풀이
function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}
