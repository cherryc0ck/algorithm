const solution = (arr, deleteList) =>
  arr.filter((el) => !deleteList.includes(el));
