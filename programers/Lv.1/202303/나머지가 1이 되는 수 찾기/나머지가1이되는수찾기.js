const solution = (n) => {
  let x = 0;
  let answer = false;
  while (!answer) n % x === 1 ? (answer = true) : x++;
  return x;
};
