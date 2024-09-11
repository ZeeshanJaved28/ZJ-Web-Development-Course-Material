console.log("JavaScript Strings");
console.log("This is strings tutorial");

// let a = "Shani";
// console.log(a)

// Accessing Characters:
let a = "Shani";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

// Length of an Array:
console.log(a.length);

// Template Literals:

let real_name = "Shani";
let friend = "Aaddi";
console.log("His name is " + real_name + " and his friend name is " + friend);
// Using Backtick and ${}.
console.log(`His name is ${real_name} and his friend name is ${friend}`);

// Uppercase:
// let b = "Ajaz";
// console.log(b.toUpperCase());

// Lowercase:
// console.log(b.toLowerCase());

// Length
// console.log(b.length);

// Slice
let b = "Ajaz";
console.log(b.slice(1, 2));
// 1 included and 2 excluded
console.log(b.slice(1));
// 1 excluded
console.log(b.slice(0, 3));
// 0 included and 3 excluded

// Replace
console.log(b.replace("Aja", "1101"));
// Both the currencies are not replaced.
let c = "AjazAja";
console.log(c.replace("Aja", "1101"));

// Concatenation
let d = "Zeeshan";
let e = "Javed";
console.log(d.concat(e));
console.log(d.concat(e, "Shani"));

// Remove Whitespace
let f = "   SHANI   ";
let g = f.trim();
console.log(g);

// Exploring More Methods
console.log(g.charAt(0));
// Output: S
console.log(g.indexOf("HA"));
// Output: 1
console.log(g.indexOf("ha"));
// Output: -1
console.log(g.startsWith("SH"));
// Output: true
console.log(g.startsWith("AN"));
// Output: false
console.log(g.endsWith("AN"));
// Output: false
console.log(g.endsWith("ANI"));
// Output: true
