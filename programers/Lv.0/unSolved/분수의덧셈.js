// 분수의 덧셈

// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 <numer1, denom1, numer2, denom2 < 1,000

// 입출력 예
// numer1	denom1	numer2	denom2	result
// 1	2	3	4	[5, 4]
// 9	2	1	3	[29, 6]

const solution = (num1, den1, num2, den2) => {
  const n1 = num1;
  const n2 = num2;
  const d1 = den1;
  const d2 = den2;
  let answer = [];
  if (d1 % d2 === 0 || d2 % d1 === 0) {
    while (den1 !== den2) {
      console.log(den1, den2);
      if (den1 < den2) {
        den1 += d1;
        num1 += n1;
      } else {
        den2 += d2;
        num2 += n2;
      }
    }
    answer.push(num1 + num2, den1);
  } else {
    const sum = den1 * den2;
    answer.push(num1 * (sum / den1) + num2 * (sum / den2), sum);
  }

  if (answer[1] % answer[0] === 0) {
    console.log("if", answer);
    return [
      answer[0] / (answer[1] / (answer[1] / answer[0])),
      answer[1] / answer[0],
    ];
  }

  return answer;
};
