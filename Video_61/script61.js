console.log("Exercise#09: Faulty Calculator Solution");
/* Create a faulty calculator using javascript 

This faulty calculator does following: 
=> It takes two numbers as an input from the user.
=>  It performs wrong operations as follows:
(+) Addition --> (-) Subtraction
(*) Multiplication --> (+) Addition
(-) Subtraction --> (/) Division
(/) Division --> (**) Exponentiation
=> It performs wrong operation 10% of the times.
*/

let random = Math.random();

let a = prompt("Enter First Number: ");
let c = prompt("Enter Operation: ");
let b = prompt("Enter Second Number: ");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

console.log(random)
if (random > 0.1) {
  // Perform correct calculation
  console.log(`The result is ${a} ${c} ${b}`)
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    // Perform wrong calculation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
