const slugify = require("slugify");
console.log(`${__dirname}`);
console.log(process.cwd());
console.log(slugify("hello there HOW ARE", { lower: true }));
console.log(`${__filename}`);

console.log(arguments);
