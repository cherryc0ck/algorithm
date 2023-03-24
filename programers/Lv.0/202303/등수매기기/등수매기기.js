// 내 풀이
const solution = (score) => {
  let answer = [];
  let avg = score.map((v) => (v[0] + v[1]) / 2);

  for (let i = 0; i < avg.length; i++) {
    let ranking = 1;

    for (let j = 0; j < avg.length; j++) {
      if (avg[i] < avg[j]) {
        ranking++;
      } else {
        continue;
      }
    }
    answer.push(ranking);
    ranking = 0;
  }
  return answer;
};

// 다른 사람 풀이 1
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}

// 다른 사람 풀이 2
function solution(score) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);
  let sorted = avg.slice().sort((a, b) => b - a);
  return avg.map((v) => sorted.indexOf(v) + 1);
}
