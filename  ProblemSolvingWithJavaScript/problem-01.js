(function () {
  function processInput(value) {
    switch (typeof value) {
      case "number":
        console.log(value);
        break;
      case "string": {
        const trimmed = value.trim();
        switch (true) {
          case trimmed !== "" && !isNaN(trimmed):
            console.log(Number(trimmed));
            break;
          default:
            console.log(trimmed);
            break;
        }
        break;
      }
      default:
        console.log(value);
        break;
    }
  }

  processInput(25);
  processInput(12.75);
  processInput("   42   ");
  processInput("  3.14  ");
  processInput("   hello world   ");
})();
