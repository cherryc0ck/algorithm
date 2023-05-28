// 내 풀이
const solution = (picture, k) => {
  let answer = [];
  picture.forEach((v) => {
    const str = v
      .split("")
      .map((v2) => v2.repeat(k))
      .join("");
    for (let i = 0; i < k; i++) answer.push(str);
  });

  return answer;
};
