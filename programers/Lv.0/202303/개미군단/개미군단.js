// 내 풀이
const solution = (hp) => {
  let answer = 0;

  while (hp > 0) {
    answer += Math.floor(hp / 5);
    hp = Math.floor(hp % 5);

    answer += Math.floor(hp / 3);
    hp = Math.floor(hp % 3);

    answer += Math.floor(hp / 1);
    hp = Math.floor(hp % 1);
  }

  return answer;
};

// 다른 사람 풀이

function solution2(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

function solution3(hp) {
  const 장군개미 = Math.floor(hp / 5);
  const 병정개미 = Math.floor((hp - 장군개미 * 5) / 3);
  const 일개미 = hp - (장군개미 * 5 + 병정개미 * 3);
  return 장군개미 + 병정개미 + 일개미;
}
