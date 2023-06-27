const lodash = require("lodash");
const item = [1, [2, [3, [4]]]];

console.log(item);
const newArray = lodash.flattenDeep(item);
console.log(newArray);
console.log("he");

// const arr = item.flat(3);
// console.log(arr);
