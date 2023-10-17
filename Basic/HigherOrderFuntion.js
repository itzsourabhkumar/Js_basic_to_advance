const arr = [1,2,3,4,5];

for(const val of arr) {
    //console.log(val);
}

//console.log("Hello");

const greetings = "Hello World!";

// for(const greet of greetings) {
//     if(greet == ' ') continue;
//     console.log(`Each char is ${greet}`);
// }

const obj1 = {
    name: "sourabh",
    age: 22
};

for(const key in obj1) {
    //console.log(obj1[key]);
}

const coding = ['js','cpp','rudy','java','python'];

//coding.forEach((item,index,arr)=>{console.log(item,index,arr)});

const myCoding = [
    {
        language: "javascript",
        languageFileName: 'js'
    },
    {
        language: "Python",
        languageFileName: 'py'
    },
    {
        language: "c++",
        languageFileName: 'cpp'
    }
];

myCoding.forEach((item,index)=>{
    console.log(`----${index}------`);
    for(const key in item) {
        console.log(`Key: ${key} 🔑`);
        console.log(`Value: ${item[key]}`);
    }
    console.log(`----------`);
});