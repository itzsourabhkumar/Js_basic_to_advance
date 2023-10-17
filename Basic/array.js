const myArray = [1,2,3,"hello",true,9+2,"Sourabh",{name: "sk", age: 22}];

const newArray = new Array(1,2,3,4,5);

//console.log(myArray);
console.log(newArray);

//array methods

const obj = [{name: "sk", age: 22}];

myArray.push("hello");
//const joinArray = myArray.join();
const joinArray = obj.join();
//console.log(myArray);

newArray.unshift(10);
newArray.shift();
newArray.shift();


//console.log(newArray);

console.log(joinArray);
console.log(typeof joinArray);