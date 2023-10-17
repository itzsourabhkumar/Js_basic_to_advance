function syncnature() {
    console.log("inside function");
    for(let i=0;i<1000000000;i++) {
        //some code
    }
    console.log("outside function");
}

console.log("start");
syncnature();
console.log("end");
