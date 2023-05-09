// 내 풀이
const solution = (arr) => {
  const STANDARD = 50;
  return arr.map((el) => {
    if (el >= STANDARD && el % 2 === 0) {
      return (el /= 2);
    } else if (el < STANDARD && el % 2 !== 0) {
      return (el *= 2);
    } else return el;
  });
};
