const os = require("os");
// here it will give the information about the pc
const user = os.userInfo();
console.log(user);

//method to see the up time of system
console.log(`The system has been running for ${os.uptime()} second`);

const info = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  availableMemory: os.freemem(),
};
console.log(info);
