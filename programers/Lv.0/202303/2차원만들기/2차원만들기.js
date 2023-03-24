// 내풀이
const solution = (list, n) => {
  let answer = [];
  let task = [];

  while (list.length > 1) {
    let task = [];
    for (let i = 0; i < n; i++) {
      task.push(list.shift());
    }

    answer.push(task);
    task = [];
  }
  return answer;
};

// 다른 사람 풀이
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
