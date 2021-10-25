function IncrementNumber(number) {
  let add = true;
  const base = 10;
  const res = number
    .slice()
    .reverse()
    .map((x) => {
      if (x >= base) {
        console.error("Error: The diggit " + x + " is bigger than " + base);
      }
      if (add) {
        add = x === base - 1;
        return ++x % base;
      }
      return x;
    });
  return add ? [1, ...res.slice().reverse()] : res.slice().reverse();
}
