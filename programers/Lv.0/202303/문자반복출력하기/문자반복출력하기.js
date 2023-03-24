const solution = (myStr, n) => {
  return [...myStr]
    .map((v) => {
      let loop = n;
      let result = "";
      while (loop > 0) {
        result += v;
        loop--;
      }
      return result;
    })
    .join("");
};

function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}
