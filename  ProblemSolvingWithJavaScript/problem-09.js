(function () {
  const student = {
    Rahul: 85,
    Priya: 92,
    Amit: 76,
    Ram: 89,
    Kiran: 68
  };

  let total = 0;
  let count = 0;
  let topName = "";
  let topMarks = -Infinity;

  for (const name in student) {
    total += student[name];
    count++;
    if (student[name] > topMarks) {
      topMarks = student[name];
      topName = name;
    }
  }

  console.log("Total marks:", total);
  console.log("Average marks:", total / count);
  console.log("Highest marks:", topName, "-", topMarks);
})();
