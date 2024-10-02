console.log("Advanced JavaScript");

// 1. Destructuring is very important in our work
// 2.  Spread Operator is more useful
// 3. In JavaScript we have IIFE. It is the concept of Hoisting
// 4. Block / Local (function) / Global Scopes

// console.log(a1); hoisting 2,3

// async function sleep() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(45);
//     }, 1000);
//   });
// }

(async function main() {
  // var a1; hoisting 1
  // console.log(a1); hoisting 1
  //   let a = await sleep();
  //   console.log(a);
  //   let b = await sleep();
  //   console.log(b);
  // let [x, y, ...rest] = [1, 5, 7, 8, 9, 10]
  // console.log(x,y,rest);

  //   let obj = {
  //       a:1,
  //       b: 2
  //   }
  //   let {a,b} = obj
  //   console.log(a,b);

  // Quiz Quiz:
  // Output of the following:
  // const a = "the";
  // const b = "no";
  // const c = {a, b}
  // console.log(c);
  // Sol: {a: 'the', b: 'no'}

  //   function sum(a, b, c){
  //       return a + b + c
  //   }

  let arr = [1, 5, 14];
  // console.log(arr[0]+arr[1]+arr[2]);
  console.log(sum(arr[0], arr[1], arr[2]));
  console.log(sum(...arr));
  // var a1 = 6; hoisting 1,2
  // a1 = 6; hoisting 1
})();

// var a1; hoisting 3

const sleep = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
};

const sum = async (a, b, c) => {
  return a + b + c;
};
