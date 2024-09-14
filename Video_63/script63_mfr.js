console.log("Map, Filter and Reduce in Arrays");

let arr = [1, 13, 5, 7, 11];
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   newArr.push(element ** 2);
// }
// console.log(newArr);

let newArr = arr.map((e, index, arr) => {
  return e ** 2;
});
console.log(newArr);
// Output: (5) [1, 169, 25, 49, 121]

const greaterThanSevem = (e) => {
  if (e > 7) {
    return true;
  }
  return false;
};
console.log(arr.filter(greaterThanSevem));
// Output: (2) [13, 11]

// OR

// console.log(arr.filter(greaterThanSevem = (e) => {
//     if (e > 7) {
//       return true;
//     }
//     return false;
//   }));
// Output: (2) [13, 11]

let arr2 = [1, 2, 3, 4, 5, 6];
const red1 = (a, b) => {
  return a * b ;
};
console.log(arr2.reduce(red1))
// Output: 720

let arr3 = [1, 2, 3, 4, 5, 6];
const red2 = (a, b) => {
  return a + b ;
};
console.log(arr2.reduce(red2))
// Output: 21

console.log(Array.from("Shani"));
// Output: (5) ['S', 'h', 'a', 'n', 'i']