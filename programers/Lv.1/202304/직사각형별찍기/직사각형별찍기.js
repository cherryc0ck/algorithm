// 내 풀이
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  const solution = (a, b) => {
    let star = "";
    let answer = "";

    while (b !== 0) {
      while (a !== 0) {
        star += "*";
        a -= 1;
      }
      answer += `${star}\n`;
      b -= 1;
    }
    console.log(answer);
  };

  solution(a, b);
});

// 다른 사람 풀이
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
