// const fetch = require('node-fetch2');
import fetch from "node-fetch2";

let result = fetch("https://jsonplaceholder.typicode.com/todos/1");

// console.log(result);
// setTimeout(() => {
//   console.log(result);
// }, 2000);
console.log("start");
result
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
console.log("end");
