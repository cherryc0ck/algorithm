// 내 풀이
const solution = (n1, d1, n2, d2) => {
  const parent = d1 * d2;
  const child = n1 * (parent / d1) + n2 * (parent / d2);
  let j = 1;

  for (let i = 1; i <= parent; i++) {
    if (parent % i === 0 && child % i === 0) {
      j = i;
    }
  }

  return [child / j, parent / j];
};

// 다른사람 풀이
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}
