// 내 풀이
const solution = (poly) => {
  let [xNum, x, num, answer] = [[], [], [], []];
  poly.split(" + ").map((v) => {
    if (Number(v)) num.push(v);
    else if (v.length > 1) xNum.push(v.replace("x", ""));
    else x.push(v);
  });

  xNum = xNum.reduce((acc, cur) => Number(acc) + Number(cur), 0);
  num = num.reduce((acc, cur) => Number(acc) + Number(cur), 0);

  if (xNum > 0) answer.push(`${xNum + x.length}x`);
  else if (x.length > 0) answer.push(x.length === 1 ? `x` : `${x.length}x`);
  num > 0 && answer.push(num + "");

  return answer.join(" + ");
};
