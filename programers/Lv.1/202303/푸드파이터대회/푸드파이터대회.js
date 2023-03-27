// 내 풀이
const solution = (food) => {
  food.shift();
  let left = [];
  food.forEach((v, i) => {
    v % 2 === 0
      ? left.push(addWord(v / 2, i))
      : left.push(addWord(Math.floor(v / 2), i));
  });
  return left
    .concat(0)
    .concat([...left].reverse())
    .join("");
};

const addWord = (count, i) => {
  let word = "";
  while (count) {
    word += i + 1;
    count--;
  }
  return word;
};

// 다른사람 풀이1 (간결)
function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + [...res].reverse().join("");
}

// 다른사람 풀이2 (누가봐도 이해하기 쉬움)
function solution(food) {
  let player1 = [];
  let player2 = [];
  let repeat = 0;
  for (let i = 1; i <= food.length; i++) {
    if (food[i] > 1) {
      repeat = Math.floor(food[i] / 2);
      for (let j = 0; j < repeat; j++) player1.push(i);
      for (let k = 0; k < repeat; k++) player2.unshift(i);
    }
  }
  player1.push(0);
  player1 = player1.concat(player2);
  return player1.join("");
}
