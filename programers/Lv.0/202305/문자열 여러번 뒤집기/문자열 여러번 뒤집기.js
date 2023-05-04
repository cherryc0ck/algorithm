// 내 풀이
const solution = (myStr, queries) => {
  myStr = myStr.split("");
  queries.forEach(([s, e]) => {
    let origin = myStr.slice(s, e + 1).reverse();
    myStr.splice(s, e - s + 1, ...origin);
  });

  return myStr.join("");
};
