function fun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Timer Ended");
      resolve("Sourabh");
      reject(false);
    }, 4000);
  });
}

fun()
  .then((data) => {
    console.log("promise resolved ", data);
  })
  .catch((data) => {
    console.log("promise reject ", data);
  });
