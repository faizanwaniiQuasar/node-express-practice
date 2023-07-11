//console.time needs console.timeEnd in order ti show the ecxecution time overall
console.time();
console.log("hello world");
setInterval(() => {
  console.log("bye");
}, 1000);
console.timeEnd();
