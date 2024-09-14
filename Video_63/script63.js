console.log("JavaScript Arrays");

let arr = [1, 2, 3, 4, 5, 6, 7];
// Index : 0, 1, 2, 3, 4, 5, 6

// arr[0] = 1234567;
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);
// console.log(arr[6]);

// let a = "Shani";
// a[0] = "A";
// console.log(a);
// Output: Shani

// console.log(typeof arr);

console.log(arr.toString());
// Output: 1,2,3,4,5,6,7

console.log(arr.join(" and "));
// Output: 1 and 2 and 3 and 4 and 5 and 6 and 7

console.log(arr.pop());
// Output: 7
console.log(arr);
// Output: (6) [1,2,3,4,5,6]
// pop brother is shift.

console.log(arr.push(8));
// Output: 7
console.log(arr);
// Output: (7) [1,2,3,4,5,6,8]

console.log(arr.push("Shani"));
// Output: 8
console.log(arr);
// Output: (8) [1,2,3,4,5,6,8,'Shani']
// push brother is unshift.

console.log(arr.shift());
// Output: 1
console.log(arr);
// Output: (7) [2,3,4,5,6,8,'Shani']
// shift brother is pop.

console.log(arr.unshift("Z"));
// Output: 8
console.log(arr);
// Output: (8) ['Z',2,3,4,5,6,8,'Shani']
// unshift brother is push.

console.log(delete arr[6]);
// Output: true
console.log(arr);
// Output: (8) ['Z', 2, 3, 4, 5, 6, empty, 'Shani']
console.log(arr[6]);
// Output: undefined

let z1 = [1, 2, 3];
let z2 = [4, 5, 6];
let z3 = [7, 8, 9];

console.log(z1.concat(z2, z3));
// Output: (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

let b = [987, 123, 456];
console.log(b.sort());
// Output: (3) [123, 456, 987]

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice(1, 2));
console.log(numbers);
// Output: (3) [1, 4, 5]
// console.log(numbers.splice(1, 3));
// console.log(numbers);
console.log(numbers.splice(1, 1, 7, 8, 9));
console.log(numbers);
// Output: (5) [1, 7, 8, 9, 5]

let c = [1, 2, 3, 4];
console.log(c.slice(2));
// Output: (2) [3,4]

let d = [1, 2, 3, 4];
console.log(c.slice(1, 3));
// Output: (2) [2,3]

let e = [5, 4, 3, 2, 1];
console.log(e.reverse());
// Output: (5) [1, 2, 3, 4, 5]
