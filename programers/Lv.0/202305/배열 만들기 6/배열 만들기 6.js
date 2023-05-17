// 내 풀이
const solution = (arr) => {
  const answer = arr.reduce((acc, cur) => {
    acc.at(-1) === cur ? acc.pop() : acc.push(cur);
    return acc;
  }, []);
  return answer.length ? answer : [-1];
};
