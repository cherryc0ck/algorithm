const solution = (arr) => {
  const t = arr.length - arr[0].length;
  if (t > 0) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < t; j++) {
        arr[i].push(0);
      }
    }
  } else if (t < 0) {
    const s = Array.from({ length: arr[0].length }, (_) => 0);
    for (let i = 0; i < Math.abs(t); i++) {
      arr.push(s);
    }
  }
  return arr;
};
