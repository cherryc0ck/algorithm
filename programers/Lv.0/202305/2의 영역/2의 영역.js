const solution = (arr) => {
  const answer = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
  return answer.length > 1 ? answer : answer.length > 0 ? [2] : [-1];
};
