(function () {
  let number = 4827;
  const result = [];

  do {
    result.push(number % 10);
    number = Math.floor(number / 10);
  } while (number > 0);

  console.log(result.join(","));
})();
