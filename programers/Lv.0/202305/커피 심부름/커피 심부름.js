// 내 풀이
const solution = (order) => {
  return order.reduce((acc, cur) => {
    return (acc += cur.includes("cafelatte") ? 5000 : 4500);
  }, 0);
};
