const strAlteration = (input) => {
  // 1. String to Uppercase
  const upperCaseLetters = input.toUpperCase();

  // 2. String to alternate upper and lower case
  const alternateCaseLetters = input.split("");
  for (let i = 1; i < alternateCaseLetters.length; i += 2) {
    alternateCaseLetters[i] = alternateCaseLetters[i].toUpperCase();
  }

  // 3. String converted to csv file
  let csvCols = "data:text/csv;charset=utf-8,";

  [...input].forEach(function (col) {
    csvCols += col + ",";
  });

  const encodedURI = encodeURI(csvCols);
  console.log("Click to download CSV file - ", encodedURI);

  return `${upperCaseLetters}\n${alternateCaseLetters.join("")}\nCSV created!`;
};

console.log(strAlteration("hello world"));
