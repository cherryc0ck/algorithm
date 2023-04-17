// 내 풀이
const solution = (num, limit, power) => {
  return (knight = Array.from({ length: num }, (_, index) => {
    let dv = [];
    for (let i = 1; i <= Math.sqrt(index + 1); i++) {
      if ((index + 1) % i === 0) {
        dv.push(i);
        if ((index + 1) / i !== i) dv.push((index + 1) / i);
      }
    }
    return dv.length;
  }).reduce((acc, cur) => (cur <= limit ? acc + cur : acc + power)));
};
