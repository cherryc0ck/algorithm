// 내풀이
const solution = (rsp) => {
  return rsp
    .split("")
    .map((v) => {
      switch (v) {
        case "2":
          return "0";
        case "5":
          return "2";
        case "0":
          return "5";
      }
    })
    .join("");
};

// 다른사람 풀이
/*
 가위는 2 바위는 0 보는 5
*/
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}
