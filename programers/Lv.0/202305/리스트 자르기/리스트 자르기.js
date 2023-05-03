// 내 풀이
const solution = (n, slicer, numList) => {
  const [a, b, c] = slicer;
  switch (n) {
    case 1:
      return numList.splice(0, b + 1);

    case 2:
      return numList.splice(a);

    case 3:
      return numList.splice(a, b - a + 1);

    case 4:
      return numList.splice(a, b - a + 1).filter((_, i) => i % c === 0);
  }
};
