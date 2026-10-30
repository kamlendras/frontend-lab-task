(function () {
  const original = 12345;
  let number = original;
  let reversed = 0;
  let sum = 0;

  while (number > 0) {
    const digit = number % 10;
    reversed = reversed * 10 + digit;
    sum += digit;
    number = Math.floor(number / 10);
  }

  console.log("Number:", original);
  console.log("Reversed:", reversed);
  console.log("Digit sum:", sum);
})();
