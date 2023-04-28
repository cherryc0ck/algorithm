// 내 풀이
const solution = (nums, k, s, l) => {
  let answer = [];
  nums.forEach((num) => {
    let find = Number(num.slice(s, s + l));
    find > k && answer.push(find);
  });
  return answer;
};
