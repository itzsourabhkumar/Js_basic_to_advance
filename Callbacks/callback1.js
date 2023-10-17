function demo(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i);
  }
}

let arr = [10, 20, 30, 40, 50];

demo(arr, (element, idx) => {
  console.log(element, idx);
});
