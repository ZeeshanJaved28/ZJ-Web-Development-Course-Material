console.log("Looping through Arrays");

let a = [1, 93, 5, 6, 88];

// for (let index = 0; index < a.length; index++) {
//   const element = a[index];
//   console.log(element);
// }

// a.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

// Output:
// 1 0 (5) [1, 93, 5, 6, 88]
// 93 1 (5) [1, 93, 5, 6, 88]
// 5 2 (5) [1, 93, 5, 6, 88]
// 6 3 (5) [1, 93, 5, 6, 88]
// 88 4 (5) [1, 93, 5, 6, 88]

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// for (const key in obj) {
//   if (Object.prototype.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(key, element);
//   }
// }
// Output:
// a 1
// b 2
// c 3

for (const element of a) {
  console.log(element);
}
// element or iterator or value
