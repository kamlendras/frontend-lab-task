(function () {
  const numbers = [12, -5, 0, 23, -18, 0, 7, -2];
  let positiveSum = 0;
  let negativeSum = 0;
  let zeroCount = 0;

  for (const num of numbers) {
    if (num > 0) {
      positiveSum += num;
    } else if (num < 0) {
      negativeSum += num;
    } else {
      zeroCount++;
    }
  }

  console.log("Sum of positive numbers:", positiveSum);
  console.log("Sum of negative numbers:", negativeSum);
  console.log("Count of zeros:", zeroCount);
})();
