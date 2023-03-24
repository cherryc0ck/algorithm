const solution = (order) => {
  return order
    .toString()
    .split("")
    .reduce((acc, cur) => (cur > 0 && cur % 3 === 0 ? acc + 1 : acc), 0);
};
