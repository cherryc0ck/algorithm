// 내 풀이
const solution = (players, callings) => {
  const rankMap = new Map();
  const nameMap = new Map();
  let result = [];

  players.forEach((v, i) => {
    rankMap.set(v, i);
    nameMap.set(i, v);
  });
  for (let i = 0; i < callings.length; i++) {
    const prevRank = rankMap.get(callings[i]) - 1;
    const prevName = nameMap.get(prevRank);
    const curRank = rankMap.get(callings[i]);

    nameMap.set(curRank, prevName);
    nameMap.set(prevRank, callings[i]);

    rankMap.set(prevName, curRank);
    rankMap.set(callings[i], prevRank);
  }

  for (let [key, value] of rankMap.entries()) {
    result[value] = key;
  }
  return result;
};
