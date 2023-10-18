function add() {
  let count = 0;
  document.getElementById("clickme").addEventListener("click", function xyz() {
    console.log("Button is clicked", ++count);
  });
}

add(); 
