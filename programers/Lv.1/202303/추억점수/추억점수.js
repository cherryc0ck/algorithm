const solution = (name, score, photo) => {
  let obj = {};
  name.map((v, i) => (obj[v] = score[i]));

  return photo.map((v, i) => {
    return v
      .map((el) => {
        return obj.hasOwnProperty(el) ? obj[el] : 0;
      })
      .reduce((acc, cur) => acc + cur);
  });
};
