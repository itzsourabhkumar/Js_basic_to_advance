function x(y) {
  console.log("inside x function");
  y();
}

x(function y() {
  console.log("inside y function");
});



