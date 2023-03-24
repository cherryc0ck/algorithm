// 내 풀이
const solution = (sides) => {
  const sum = sides.reduce((acc, cur) => acc + cur) - Math.max(...sides);

  return sum > Math.max(...sides) ? 1 : 2;
};
// 다른사람 풀이
function solution1(sides) {
  sides = sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

// 다른사람 풀이
const solution2 = (slides) =>
  slides.every((v, i, arr) => {
    const hab = arr.reduce((acc, cur, idx) => (idx !== i ? acc + cur : acc), 0);

    return v < hab;
  })
    ? 1
    : 2;
