const solution = (array, n) => {
  return array.reduce((acc, cur) => {
    return Math.abs(acc - n) === Math.abs(cur - n)
      ? acc > cur
        ? cur
        : acc
      : Math.abs(acc - n) > Math.abs(cur - n)
      ? cur
      : acc;
  }, array[0]);
};
