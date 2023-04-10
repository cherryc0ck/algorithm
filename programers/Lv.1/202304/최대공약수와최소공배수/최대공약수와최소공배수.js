// 내 풀이 1 ( 유클리드 알고리즘 사용 ) => 33.4mb ~ 33.5mb
const solution = (n, m) => {
  let a = Math.max(n, m);
  let b = Math.min(n, m);

  let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  let lcm = (a, b) => (a * b) / gcd(a, b);

  return [gcd(a, b), lcm(a, b)];
};

// 내 풀이 2 ( for, while 사용) => 33.4mb ~ 36.5mb
const solution2 = (n, m) => {
  let answer = [];

  for (let i = Math.min(n, m); i >= 1; i--) {
    if (n % i === 0 && m % i === 0) {
      answer.push(i);
      break;
    }
  }

  let i = 1;
  while (true) {
    if (i % n === 0 && i % m === 0) {
      answer.push(i);
      break;
    }
    i++;
  }

  return answer;
};

// 다른 사람 풀이1
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}

// 다른 사람 풀이2
function solution3(n, m) {
  function greatestCommonDivisor(a, b) {
    return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
  }
  function leastCommonMultipleOfTwo(a, b) {
    return (a * b) / greatestCommonDivisor(a, b);
  }
  function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
  }
}
