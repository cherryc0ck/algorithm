const solution = (my_string) => {
  return my_string
    .split("")
    .map((v, i) => {
      return v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase();
    })
    .join("");
};
