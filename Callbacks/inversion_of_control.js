function billing(data, cb) {
  console.log("Processing.....");
  setTimeout(() => {
    cb(true, data);
  }, 2000);
  //read the user data and charge the credit card
}

function callBack(val, data, cb) {
  if (val == null) {
    console.log("err");
    return;
  } else {
    console.log(`Hello ${data.name} Welcome to EYBusiness Services`);
    console.log(`Your Total Amount is ${data.Amt}`);
  }
  setTimeout(() => {
    console.log("Your total Billing amt: 4000");
    cb(false, data);
  });
}

function chargeCC(val, data) {
  //some logic it  charge the card
  if (val == null) {
    console.log("err");
    return;
  }
  console.log("CC charged");
  data.Amt = data.Amt - 4000;
  console.log(`You amt after debit is: ${data.Amt}`);
}

let data = {
  name: "Sourabh Kumar",
  age: 24,
  Acc_no: 12345,
  Amt: 4000,
};

billing(data, function (val, data, cb) {
  setTimeout(() => {
    callBack(val, data, function (val, data) {
      setTimeout(() => {
        chargeCC(val, data);
        chargeCC(val, data);
      }, 2000);
    });
  }, 2000);
});
