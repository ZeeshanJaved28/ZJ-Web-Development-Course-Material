// console.log(''); --> clog
// alert('Shani'); --> alt

console.log("This is Promises");

// let prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Yes I am done");
//     resolve("Shani");
//   }, 3000);
// });

// let prom1 = new Promise((resolve, reject) => {
//   let a = Math.random();
//   if (a < 0.5) {
//     reject("No random number was not supporting you");
//   } else {
//     setTimeout(() => {
//       console.log("Yes I am done");
//       resolve("Shani");
//     }, 3000);
//   }
// });

// prom1
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Shani");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you 2");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolve("Shani 2");
    }, 1000);
  }
});

// let prom3 = Promise.all([prom1, prom2]);
// prom3
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let prom3 = Promise.allSettled([prom1, prom2]);
// prom3
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let prom3 = Promise.race([prom1, prom2]);
// prom3
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let prom3 = Promise.any([prom1, prom2]);
// prom3
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let prom3 = Promise.resolve([prom1, prom2]);
// prom3
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let prom3 = Promise.reject([prom1, prom2]);
prom3
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });
