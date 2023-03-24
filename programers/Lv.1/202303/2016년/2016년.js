// 내 풀이
const solution = (a, b) => {
  const DAYS = {
    0: "SUN",
    1: "MON",
    2: "TUE",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT",
  };
  const dayNum = new Date(2016, a - 1, b).getDay();
  return DAYS[dayNum];
};

// 다른 사람 풀이
function getDayName(a, b) {
  var tempDate = new Date(2016, a - 1, b);

  return tempDate.toString().slice(0, 3).toUpperCase();
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5, 24));
