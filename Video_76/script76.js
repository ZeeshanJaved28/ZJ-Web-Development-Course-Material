console.log("Async/Await & Fetch API in JavaScript with Examples");

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 53500);
//   });
// }

// async function getData() {
//     // Simulate getting data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

// Settle means resolve or reject
// resolve means promise has settled successfully.
// reject means promise has not settled successfully.

async function getData() {
  // Simulate getting data from a server
  //   let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   let data = await x.json();
  //   let data = await x.text();

  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  let data = await x.json();
  //   console.log(data);
  return data;
  //   console.log(x);
  //   return 455;
  // .then((response) => response.json())
  // .then((json) => console.log(json));
}

async function main() {
  console.log("Loading Modules");

  console.log("Do something else");

  console.log("Load Data");
  // let data = getData();
  //   let data = await getData();
  //   let data = getData();
  let data = await getData();

  // 1st Method/Approach
  // data.then((v) => {
  //   console.log(data);

  //   console.log("Process Data");

  //   console.log("Task 2");
  // });

  console.log(data);

  console.log("Process Data");

  console.log("Task 2");
}

main();
