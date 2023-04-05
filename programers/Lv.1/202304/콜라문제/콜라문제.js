// 내 풀이
// a: 마트에주어야하는 병수, b: 교환시 주는 콜라 병수
const solution = (a, b, n) => {
  let myCoke = n; // 가지고 있는 콜라
  let receivedCoke = 0; // 받은 콜라

  while (myCoke >= a) {
    receivedCoke += Math.floor(myCoke / a) * b;
    myCoke = (myCoke % a) + Math.floor(myCoke / a) * b;
  }
  return receivedCoke;
};

// 다른 사람 풀이
const solution2 = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
