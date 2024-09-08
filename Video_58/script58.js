console.log("I'm a tutorial on JavaScript Functions");

// function printStatements() {
//   console.log("Hello, this is a statement!");
//   console.log("Another statement here.");
//   console.log("Yet another statement here.");
// }
// // Call the function to execute the statements
// printStatements();

// function addNumbers(a, b) {
//   return a + b;
// }
// const result = addNumbers(3, 5);
// console.log("Sum:", result);

// function calculateAverage(a, b) {
//   return (a + b) / 2;
// }
// const result1 = calculateAverage(3, 5);
// console.log("Average:", result1);

// console.log("Hey Shani you are nice!");
// console.log("Hey Shani you are good!");
// console.log("Hey Shani your tshirt are nice!");
// console.log("Hey Shani your work is good too!");
// Shani -> Variable

// function niceStatements(name) {
//   console.log("Hey " + name + " you are nice!");
//   console.log("Hey " + name + " you are good!");
//   console.log("Hey " + name + " your tshirt are nice!");
//   console.log("Hey " + name + " your work is good too!");
// }
// niceStatements("Zeeshan");
// niceStatements("Javed");

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(3,5)

function sum(a, b, c = 3) {
  // so 3 is default value of C called default parameter, one function has default value of argument. And when we do c is equal to 3. Then default value of c will be 3
  console.log(a, b, c);
  // b is undefined
  return a + b + c;
  //Return keyword is to return a value.
}
result1 = sum(3); // Error NaN // undefined b
result2 = sum(6, 8);
result3 = sum(9, 11, 2);
console.log("The sum of these number is: ", result1);
console.log("The sum of these number is: ", result2);
console.log("The sum of these number is: ", result3);

const function1 = (x)=>{
console.log("I'm an arrow function", x)
}
function1(10)
function1(20)
function1(30)