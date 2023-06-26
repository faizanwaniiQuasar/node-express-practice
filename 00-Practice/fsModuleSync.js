// const fs = require("fs");
// const text = fs.readFileSync(`./content/first.txt`, "utf-8");

// console.log(text);
// const textOut = `new file `;
// fs.writeFileSync(`./content/output.txt`, textOut);
// console.log("file has been written");

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync(`./content/subfolder/test.txt`, "utf-8");
const second = readFileSync("./content/first.txt", "utf-8");

console.log(first);
console.log(second);

const file = ` hell0 from the new file ${second} and this file is created on ${Date.now()}`;
writeFileSync(
  "./content/new.txt",
  `Created a new file and it is awesome ${file}`
);
