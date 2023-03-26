// 내 풀이
const solution = (price, money, count) => {
  let answer = 0;
  while (count !== 0) {
    answer += price * count;
    count--;
  }
  return money - answer >= 0 ? 0 : Math.abs(money - answer);
};

// 다른사람풀이 (가우스 공식)
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
