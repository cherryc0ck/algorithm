// 문제 설명
// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

// 제한사항
// 1 ≤ num ≤ 100
// 0 ≤ total ≤ 1000
// num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.
// 입출력 예
// num	total	result
// 3	12	[3, 4, 5]
// 5	15	[1, 2, 3, 4, 5]
// 4	14	[2, 3, 4, 5]
// 5	5	[-1, 0, 1, 2, 3]

const solution = (num, total) => {
  let answer = Array(num).fill(0);

  if (num % 2 === 0) {
    const tn = Math.floor(total / num);
    const centerLeft = num / 2 - 1;
    const centerRight = num / 2;

    answer[centerLeft] = tn;
    answer[centerRight] = tn + 1;

    for (let i = 1; i <= centerLeft; i++) {
      answer[centerLeft - i] = tn - i;
      answer[centerRight + i] = tn + 1 + i;
    }

    return answer;
  } else {
    const centerIdx = Math.floor(num / 2);
    const centerNum = total / num;
    const j = (num - 1) / 2;

    answer[centerIdx] = centerNum;

    for (let i = 1; i <= j; i++) {
      answer[j - i] = centerNum - i;
      answer[j + i] = centerNum + i;
    }

    return answer;
  }
};
