function solution(keymap, targets) {
  const answer = [];
  const keyMap = new Map();
  keymap.forEach((map) => {
    for (let i = 0; i < map.length; i++) {
      if (keyMap.has(map[i])) {
        const idx = Math.min(i + 1, keyMap.get(map[i]));
        keyMap.set(map[i], idx);
      } else {
        keyMap.set(map[i], i + 1);
      }
    }
  });

  targets.forEach((target) => {
    let cnt = 0;
    for (let i = 0; i < target.length; i++) {
      const temp = keyMap.get(target[i]);
      if (temp) cnt += temp;
      else {
        cnt = -1;
        break;
      }
    }
    answer.push(cnt);
  });

  return answer;
}
