// 내 풀이
const solution = (dart) => {
  let arr = [];
  const num = "23456789".split("");

  let tmp = 0;
  dart.split("").forEach((v, i) => {
    if (num.includes(v)) {
      tmp = Number(v);
    }
    if (v === "1") {
      if (dart[i + 1] === "0") {
        tmp = 10;
      } else {
        tmp = 1;
      }
    }

    if (v === "S") {
      arr.push(tmp);
      tmp = 0;
    }
    if (v === "D") {
      arr.push(Math.pow(tmp, 2));
      tmp = 0;
    }
    if (v === "T") {
      arr.push(Math.pow(tmp, 3));
      tmp = 0;
    }

    if (v === "*") {
      if (arr[arr.length - 2]) {
        const a = arr.pop() * 2;
        const b = arr.pop() * 2;
        arr.push(b);
        arr.push(a);
      } else {
        arr.push(arr.pop() * 2);
      }
    }

    if (v === "#") {
      arr.push(arr.pop() * -1);
    }
  });
  const rd = arr.reduce((acc, cur) => acc + cur);
  return rd;
};
