// 내 풀이
const solution = (code) => {
  let mode = false;
  let ret = "";

  code.split("").forEach((v, i) => {
    if (v === "1") return (mode = !mode);

    ret += !mode && i % 2 === 0 ? v : "";
    ret += mode && i % 2 !== 0 ? v : "";
  });
  return ret || "EMPTY";
};
