const solution = (arr, k) =>
  k % 2 === 0 ? arr.map((v) => v + k) : arr.map((v) => v * k);
