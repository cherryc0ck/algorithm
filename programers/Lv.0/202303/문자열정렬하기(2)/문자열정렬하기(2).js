// 내 풀이
const solution = (my_string) => {
  let answer = [];
  my_string.split("").forEach((v) => !isNaN(+v) && answer.push(+v));
  return answer.sort();
};

// 다른사람풀이
function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => !isNaN(v))
    .map((v) => v * 1)
    .sort((a, b) => a - b);
}
