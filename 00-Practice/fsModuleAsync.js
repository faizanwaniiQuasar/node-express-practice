const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf-8", (err, data) => {
  setTimeout(() => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    writeFile(
      "./content/asyncNew.txt",
      `This file is created using asyn method ${data}`,
      "utf-8",
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
  }, 1000);
});
console.log("will start now reading the file");
