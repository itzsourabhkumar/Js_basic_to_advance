const fs = require('fs');

fs.readFile('input1.txt',function(err,data) {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
})