// 내 풀이
const solution = (s) => {
  let n = s;
  let [cnt, rm] = [0, 0];
  while (n !== "1") {
    const zeroLength = [...n].filter((el) => el === "0").length;
    const oneLength = [...n].filter((el) => el === "1").length;

    n = parseInt(oneLength.toString(2), 10) + "";
    cnt++;
    rm += zeroLength;
  }
  return [cnt, rm];
};

// 다른사람 풀이
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
