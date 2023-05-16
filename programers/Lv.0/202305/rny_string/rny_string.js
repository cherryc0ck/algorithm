// 내 풀이
const solution = (rnyStr) => {
  return rnyStr.replace(/m/g, "rn"); // 정규 표현식으로 replaceAll과 같이
  return rnyStr.replaceAll("m", "rn");
};
