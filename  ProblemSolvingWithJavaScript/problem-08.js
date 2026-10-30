(function () {
  const result = [];

  for (let num = 100; num <= 999; num++) {
    let temp = num;
    let sum = 0;

    while (temp > 0) {
      const digit = temp % 10;
      sum += digit * digit * digit;
      temp = Math.floor(temp / 10);
    }

    if (sum === num) {
      result.push(num);
    }
  }

  console.log("Armstrong numbers between 100 and 999:");
  console.log(result.join(", "));
})();
