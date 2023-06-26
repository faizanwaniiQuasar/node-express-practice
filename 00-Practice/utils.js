const sayHi = function (name) {
  console.log(`Hello there my name is ${name}`);
};
//exporting function so that it can be used in module app.js
module.exports = sayHi;
