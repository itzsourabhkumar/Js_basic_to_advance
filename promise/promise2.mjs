import fetch from "node-fetch2";

function fetchingData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1"); 
}

const response = fetchingData();

response
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log("Something went wrong"))
  .finally(() => {
    console.log("Ended Finally");
  });
