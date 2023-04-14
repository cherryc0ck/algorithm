// 내 풀이
const solution = (n, arr1, arr2) => {
  const arr1Map = arr1.map((v) => {
    v = v.toString(2);
    for (let i = v.length; i < n; i++) {
      v = 0 + v;
    }
    return v;
  });

  const arr2Map = arr2.map((v) => {
    v = v.toString(2);
    for (let i = v.length; i < n; i++) {
      v = 0 + v;
    }
    return v;
  });

  return arr1Map.map((v, vIdx) => {
    return [...v]
      .map((el, idx) => {
        return el === "1" ? "#" : el !== [...arr2Map][vIdx][idx] ? "#" : " ";
      })
      .join("");
  });
};

// 다른사람 풀이 1
function solution1(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};

// 다른사람 풀이2
var solution2 = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );
