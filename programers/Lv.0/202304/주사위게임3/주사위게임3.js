// 내 풀이
const solution = (...rest) => {
  const diceSet = new Set(rest);

  switch (diceSet.size) {
    case 1:
      return rest[0] * 1111;
    case 2:
      rest.sort();
      if (rest[1] === rest[2]) {
        diceSet.delete(rest[1]);
        return Math.pow(10 * rest[1] + [...diceSet][0], 2);
      } else {
        return (rest[0] + rest[2]) * Math.abs(rest[0] - rest[2]);
      }

    case 3:
      rest.sort();
      return rest[0] === rest[1]
        ? rest[2] * rest[3]
        : rest[1] === rest[2]
        ? rest[0] * rest[3]
        : rest[0] * rest[1];
    default:
      return Math.min(...rest); // 다 다른경우
  }
};
