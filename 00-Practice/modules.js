// in order to use the exported modules we need to first access it in app.js by keyword require.
const name = require("./names");
const sayHi = require("./utils");
const data = require("./alternative");

require("./addNumberModule");

/// here calling the function which is in utils module
// sayHi(name.adil);
// sayHi("abrar");
// sayHi(name.faisal);

// console.log(data);
