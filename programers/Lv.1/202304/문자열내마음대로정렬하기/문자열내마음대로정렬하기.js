// 내 풀이
const solution = (strings, n) =>
  strings.sort((b, a) => {
    if (a[n] > b[n]) return -1;
    else if (a[n] < b[n]) return 1;
    else return a > b ? -1 : 1;
  });

// 다른 사람풀이
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

// 다른 사람 풀이2
function solution(strings, n) {
  return strings.sort((a, b) => {
    const chr1 = a.charAt(n);
    const chr2 = b.charAt(n);

    if (chr1 == chr2) {
      return (a > b) - (a < b);
    } else {
      return (chr1 > chr2) - (chr1 < chr2);
    }
  });
}
