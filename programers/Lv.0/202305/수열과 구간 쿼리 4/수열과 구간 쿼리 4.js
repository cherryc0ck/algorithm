// 내 풀이
const solution = (arr, queries) => {
  queries.forEach(([s, e, k]) => {
    arr = arr.map((el, i) => {
      if (s <= i && i <= e) {
        el += i % k === 0 && 1;
      }
      return el;
    });
  });
  return arr;
};
