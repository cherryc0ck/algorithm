// 내 풀이
const solution = (arr) => {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let sequence = "";
    while (!isNaN(Number(arr[i]))) {
      sequence += arr[i];
      i++;
    }
    answer += Number(sequence);
  }
  return answer;
};
