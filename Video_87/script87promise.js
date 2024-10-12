import { writeFile } from "fs";
import fs from "fs/promises";

// let a = await fs.readFile("Shani87.txt");
let a = await fs.readFile("Shani87_2.txt");
// let b = await fs.writeFile("Shani87_2.txt","\n\n\n\n\nThis is amazing promise")
let b = await fs.appendFile("Shani87_2.txt","\n\n\n\n\nThis is amazing promise")

console.log(a.toString(),b);
