console.log("JavaScript Interview Questions");

// 01 Solution:

// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = [
  "Zeeshan",
  "Ajaz",
  "Shahbaz",
  "Zubair",
  "Asad",
  "Idrees",
  "Kamran",
  "Iftikhar",
  "Bilal",
  "Tauqir",
  "Hammad",
  "Jawad",
  "Abdullah",
  "Mir Taqi Mir",
];

let houses = [];

for (const student of students) {
  if (student.length < 6) {
    houses.push("Gryffindor");
  } else if (student.length < 8) {
    houses.push("Hufflepuff");
  } else if (student.length < 12) {
    houses.push("Ravenclaw");
  } else {
    houses.push("Slytherin");
  }
}
console.log(houses);

// 02 Solution:

// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleValues(array) {
  return array.concat.apply(
    [],
    array.map(function (el) {
      return [el, el];
    })
  );
}

console.log(doubleValues([1, 2, 3, 4, 4, 5, 5, 5]));

// 03 Soultion:

// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function reverseWordsForLoop(str) {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseWordsForLoop("Zeeshan"));

// 04 Solution:

// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// To check a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter

// function CheckPassword(inputtxt)
// {
// var passw=  /^[A-Za-z]\w{7,14}$/;
// if(inputtxt.value.match(passw))
// {
// alert('Correct, try another...')
// return true;
// }
// else
// {
// alert('Wrong...!')
// return false;
// }
// }

// To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter

// function CheckPassword(inputtxt)
// {
// var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
// if(inputtxt.value.match(passw))
// {
// alert('Correct, try another...')
// return true;
// }
// else
// {
// alert('Wrong...!')
// return false;
// }
// }

// To check a password between 7 to 15 characters which contain at least one numeric digit and a special character

// function CheckPassword(inputtxt)
// {
// var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
// if(inputtxt.value.match(paswd))
// {
// alert('Correct, try another...')
// return true;
// }
// else
// {
// alert('Wrong...!')
// return false;
// }
// }

// To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.

function CheckPassword(inputtxt) {
  var decimal =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (inputtxt.value.match(decimal)) {
    alert("Correct, try another...");
    return true;
  } else {
    alert("Wrong...!");
    return false;
  }
}

// 05 Solution:

// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      break;
    }
    sum += arr[i];
  }

  return sum;
}
const numbers = [-1, -2, -3, -5, -4, -6];
document.write(sumUntilNegative(numbers));

// 06 Solution:

// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowel(str) {
  // find the count of vowels
  const count = str.match(/[aeiou]/gi).length;

  // return number of vowels
  return count;
}

// take input
// const string = prompt('Enter a string: ');
const string = "Enter a string: ";
const result = countVowel(string);

console.log(result);

// 07 Solution:

// The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

function saveNoteToLocalStorage(note) {
  localStorage.setItem("note", note);
}
let note = localStorage.getItem("note");
if (note) {
  document.querySelector(".note").innerHTML = note;
}

document.querySelector("button").addEventListener("click", () => {
  let note = prompt("Enter your note");
  saveNoteToLocalStorage(note);
  document.querySelector(".note").innerHTML = note;
});

// let a = prompt("Enter your name");
// if (localStorage.getItem("name", a)) {
//   a = localStorage.getItem("name");
//   document.write("Welcome " + a);
// } else {
//   localStorage.setItem("name", a);
//   document.write("Welcome " + a);
// }

// let b = {
//   Shani: 1,
//   Shan: 2,
// };
// console.log(b);
// console.log(JSON.stringify(b));
// console.log(localStorage.setItem("guys", b));
// console.log(localStorage.getItem("guys", b));

// console.log(localStorage.setItem("guys", JSON.stringify(b)));
// console.log(localStorage.getItem("guys"));
// console.log(JSON.parse(localStorage.getItem("guys")));

// 08 Solution:

// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function delayMultiplyByTwo(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 500);
  });
}

async function asyncArrayMapping(arr) {
  return Promise.all(
    arr.map(async (num) => {
      return await delayMultiplyByTwo(num);
    })
  );
}
const number = [1, 2, 3, 4, 5];
asyncArrayMapping(number).then((result) => {
  console.log(result); // Output after ~500ms: [2, 4, 6, 8, 10]
});

// 09 Solution:

// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function placeOrder(orderId) {
  return new Promise((resolve) => {
    // Simulate random delay between 1 and 3 seconds
    const delay = Math.floor(Math.random() * 2000) + 1000;

    setTimeout(() => {
      resolve(`Order ${orderId} has been placed successfully!`);
    }, delay);
  });
}
placeOrder(12345).then((confirmation) => {
  console.log(confirmation); // Output: "Order 12345 has been placed successfully!" (after random delay)
});

// 10 Solution:

// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function brewCoffee(coffeeType) {
  return new Promise((resolve) => {
    // Simulate random brewing time between 2 and 5 seconds
    const brewingTime = Math.floor(Math.random() * 3000) + 2000;

    setTimeout(() => {
      resolve(`Your ${coffeeType} is ready!`);
    }, brewingTime);
  });
}

brewCoffee("Latte").then((message) => {
  console.log(message); // Output: "Your Latte is ready!" (after random delay)
});

// 11 Solution:

// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products, criterion) {
  return products.filter((product) => {
    return Object.keys(criterion).every((key) => {
      if (Array.isArray(product[key])) {
        // If the product property is an array, check for at least one matching element
        return product[key].some((item) => item.includes(criterion[key]));
      } else {
        // For string properties, check if they include the criterion value
        return product[key].includes(criterion[key]);
      }
    });
  });
}
const products = [
  { name: "Laptop", category: "Electronics", tags: ["computer", "portable"] },
  { name: "Smartphone", category: "Electronics", tags: ["phone", "mobile"] },
  { name: "T-shirt", category: "Clothing", tags: ["apparel", "shirt"] },
  {
    name: "Coffee Maker",
    category: "Home Appliances",
    tags: ["kitchen", "coffee"],
  },
];

const criterion = { category: "Electronics", tags: "mobile" };
const filteredProducts = filterProducts(products, criterion);
console.log(filteredProducts);
// Output: [{ name: 'Smartphone', category: 'Electronics', tags: ['phone', 'mobile'] }]

// 12 Solution:

// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token, expiresInMinutes) {
  const expirationTime = new Date().getTime() + expiresInMinutes * 60 * 1000;

  const tokenData = {
    token: token,
    expiresAt: expirationTime,
  };

  localStorage.setItem("authToken", JSON.stringify(tokenData));
}
setAuthToken("your-auth-token", 60); // Token valid for 60 minutes

function getAuthToken() {
  const tokenData = JSON.parse(localStorage.getItem("authToken"));

  if (tokenData && new Date().getTime() < tokenData.expiresAt) {
    return tokenData.token;
  } else {
    // Token has expired or doesn't exist
    localStorage.removeItem("authToken");
    return null;
  }
}

const token = getAuthToken();
if (token) {
  console.log("Valid token:", token);
} else {
  console.log("Token is expired or doesn't exist.");
}

// 13 Solution:

// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(cartItems) {
  return cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}
const cart = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Smartphone", price: 600, quantity: 2 },
  { name: "Headphones", price: 200, quantity: 3 },
];

const totalCost = calculateTotal(cart);
console.log(totalCost); // Output: 3200

// 14 Solution:

// The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
smoothScrollToTop();
