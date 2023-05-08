// 내 풀이
const solution = (todoList, finished) =>
  todoList.filter((el, i) => !finished[i]);
