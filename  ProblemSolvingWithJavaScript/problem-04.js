(function () {
  const n = 27n;
  let factorial = 1n;
  let i = 1n;

  while (i <= n) {
    factorial *= i;
    i++;
  }

  console.log("27! =", factorial.toString());
})();
