console.log("JavaScript Exercise 11 - Solution");

// let n = 5;
// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//   factorial = factorial * i;
//   console.log(factorial);
// }

// let a = 6;

// function factorialCalculate(number) {
//   let arr = Array.from(Array(number + 1).keys());
//   console.log(arr.slice(1,));
//   let c = arr.slice(1,).reduce((a, b) => {
//     return a * b;
//   });
//   console.log(c);
// }
// console.log(factorialCalculate(a));

// let a = 2;

// function factorialCalculate(number) {
//   let arr = Array.from(Array(number + 1).keys());
//   console.log(arr.slice(1,));
//   let c = arr.slice(1,).reduce((a, b) => {
//     return a * b;
//   });
//   return c
// }
// console.log(factorialCalculate(a));

let a = 5;

function factorialCalculate(number) {
  let arr = Array.from(Array(number + 1).keys());
  console.log(arr.slice(1));
  let c = arr.slice(1).reduce((a, b) => a * b); // Short Method Arrow Function
  return c;
}
console.log(factorialCalculate(a));

function factForLoop(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log("The Factorial of " + a + " is:", factForLoop(a));
