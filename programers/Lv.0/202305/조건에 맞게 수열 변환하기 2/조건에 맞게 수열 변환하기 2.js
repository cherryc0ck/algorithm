// 내 풀이
const solution = (arr) => {
  let test = 0;
  while (true) {
    let cnt = 0;
    arr = arr.map((el) => {
      if (el >= 50 && el % 2 === 0) {
        cnt += 1;
        return (el /= 2);
      } else if (el < 50 && el % 2 !== 0) {
        cnt += 1;
        return (el *= 2 + 1);
      }
      return el;
    });
    if (cnt === 0) {
      break;
    }
    test += 1;
  }
  return test === 0 ? test : test + 1;
};
