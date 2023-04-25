// 내 풀이
const solution = (numList) => {
  const a = numList.at(-2);
  const b = numList.at(-1);
  b > a ? numList.push(b - a) : numList.push(b * 2);

  return numList;
};

// 다른 사람 풀이
function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}
