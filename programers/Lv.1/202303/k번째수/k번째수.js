// 내 풀이
const solution = (arr, comm) =>
  comm.map((v) => {
    return arr.slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1];
  });

// 다른 사람 풀이
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
