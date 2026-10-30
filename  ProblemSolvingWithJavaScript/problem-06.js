(function () {
  let number = 5837462;
  let evenSum = 0;
  let oddSum = 0;

  while (number > 0) {
    const digit = number % 10;
    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
    number = Math.floor(number / 10);
  }

  console.log("Sum of even digits:", evenSum);
  console.log("Sum of odd digits:", oddSum);
})();
