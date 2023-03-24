// 내 풀이
const solution = (my_string) => {
  const VOWEL = ["a", "e", "i", "o", "u"];
  return my_string
    .split("")
    .filter((v) => !VOWEL.includes(v))
    .join("");
};
