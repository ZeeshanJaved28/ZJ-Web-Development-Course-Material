console.log("Exercise 15 - Clear the Clutter");

// You have to write a Node.js program to clear the clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:
// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. shani.zip
// 5. zee.zip
// 6. cat.jpg
// 7. shani.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf, pdf/shani.pdf
// zip/shani.zip, zip/zee.zip

import fs from "fs/promises";
import fsn from "fs";
import path from "path";
// console.log(fs);

const basepath = "D:\\Sigma Web Development Course\\Video_93";

let files = await fs.readdir(basepath);
// console.log(files);

for (const item of files) {
  console.log("running for ", item);

  let ext = item.split(".")[item.split(".").length - 1];
  //   console.log(ext);
  if (ext != "js" && ext != "json" && item.split(".").length > 1) {
    if (fsn.existsSync(path.join(basepath, ext))) {
      // Move the file to this directory if its  not a js or json files.
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    } else {
      fs.mkdir(ext);
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    }
  }
  //   console.log(item);
}
