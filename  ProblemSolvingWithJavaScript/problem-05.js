(function () {
  const input = "1,2,3,,2,1,";
  const digits = input.split(",").filter(function (item) {
    return item !== "";
  });

  let isPalindrome = true;

  for (let left = 0, right = digits.length - 1; left < right; left++, right--) {
    if (digits[left] !== digits[right]) {
      isPalindrome = false;
      break;
    }
  }

  console.log("Sequence:", digits.join(""));
  console.log(isPalindrome ? "It is a palindrome" : "It is not a palindrome");
})();
