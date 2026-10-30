(function () {
  let number = 90876554;
  let count = 0;
  let even = 0;
  let odd = 0;

  while (number > 0) {
    const digit = number % 10;
    count++;
    if (digit % 2 === 0) {
      even++;
    } else {
      odd++;
    }
    number = Math.floor(number / 10);
  }

  console.log("Total digits:", count);
  console.log("Even digits:", even);
  console.log("Odd digits:", odd);
})();
