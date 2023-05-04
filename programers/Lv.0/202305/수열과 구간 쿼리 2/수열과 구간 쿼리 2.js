// 내 풀이
const solution = (arr, queries) => {
  let answer = [];
  queries.forEach(([s, e, k], i) => {
    const find = arr.slice(s, e + 1).filter((el) => el > k);
    find.length ? answer.push(Math.min(...find)) : answer.push(-1);
  });
  return answer;
};
