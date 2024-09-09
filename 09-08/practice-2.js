const Errow = (num, bool) => {
  if (bool === true) return "-".repeat(num) + ">";
  return "<" + "-".repeat(num);
};

// console.log(Errow(5, true));

const collectNumbers = () => {
  const nums = [];
  let input;

  while (true) {
    input = prompt("Enter a number (or 0 to stop):");
    let number = parseInt(input);

    if (isNaN(number)) {
      console.log("Invalid input! Please enter a valid number.");
      continue;
    }

    if (number === 0) break;

    nums.push(number);
  }

  if (nums.length === 0) {
    console.log("You must enter at least one number.");
    return;
  }

  const maxNumber = Math.max(...nums);

  const totalNumbers = nums.length;

  const sumNumbers = nums.reduce((sum, num) => sum + num, 0);

  const average = sumNumbers / totalNumbers;

  const fourthNumber = nums[3] !== undefined ? nums[3] : nums[nums.length - 1];

  console.log("The maximum number is:", maxNumber);
  console.log("The total number of numbers entered:", totalNumbers);
  console.log("The sum of the numbers is:", sumNumbers);
  console.log("The average of the numbers is:", average);
  console.log(
    "The fourth number (or the last one if less than 4):",
    fourthNumber
  );
};

//collectNumbers();

const printRightTriangle = (rows) => {
    for (let i = 1; i <= rows; i++) {
      console.log("* ".repeat(i).trim());
    }
  };
  
printRightTriangle(5);

const lowerLeftTriangle = (rows) => {
    for (let i = rows; i >= 1; i--) {
      console.log("* ".repeat(i).trim());
    }
  };
  
  lowerLeftTriangle(5);
  



  const printMultiplicationTable = (num) => {
    for (let i = 1; i <= num; i++) {
      let row = "";
      for (let j = 1; j <= num; j++) {
        row += (i * j).toString().padStart(4, " ");
      }
      console.log(row);
    }
  };
  
  
  printMultiplicationTable(10);

  const checkString = (str) => {
    if (str === null || str === "") {
        return "";
    }
    if (str.trim() === "") {return " "}
    return str.trim();
  }

  console.log(checkString("  hello   world     "));