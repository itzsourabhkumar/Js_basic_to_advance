/* 
 
       ADDED ELEMENT IN AN ARRAY

*/
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//using javascript push method

// let subject = ["maths", "english"];

// console.log(subject);

// subject.push("physics");

// console.log(subject);

// subject.push("chemistry", "Hindi", "Social Sciece");

// console.log(subject);

// console.log(typeof subject);

//using javascript unshift() method

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//using javascript pop method

// let subject = [
//   "maths",
//   "english",
//   "physics",
//   "chemistry",
//   "Hindi",
//   "Social Sciece",
// ];

// console.log(subject);

// subject.pop();

// console.log(subject);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//using javascript unshift() method

// let subject = ["maths", "english"];

// console.log(subject);

// subject.unshift("PHYSICS");

// console.log(subject);

// subject.unshift("chemistry", "Hindi", "Social Sciece");

// console.log(subject);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//using javascript shift method

// let subject = ["maths", "english"];

// console.log(subject);

// subject.push("physics");

// console.log(subject);

// subject.push("chemistry", "Hindi", "Social Sciece");

// console.log(subject);

// console.log(typeof subject);

//using javascript unshift() method

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//using Splice method
// let group1 = [1, 2, 3, 4, 5];

// console.log(group1);

// const group2 = group1.splice(0, 6);

// console.log("group1 <", group1, ">");
// console.log("group2 <", group2, ">");

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//using concat method
// let group1 = [1, 2, 3, 4, 5];
// let group2 = [11, 12, 13, 14, 15];
// let group3 = [21, 22, 23, 24, 25];
// let group4 = [31, 32, 33, 34, 35];
// let group5 = [41, 42, 43, 44, 45];

// console.log(group1);
// let newgroup = group1.concat(group2, group3, group4, group5);
// console.log(newgroup);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//using spread operator
// let group1 = [1, 2, 3, 4, 5];
// let group2 = [11, 12, 13, 14, 15];
// let group3 = [21, 22, 23, 24, 25];
// let group4 = [31, 32, 33, 34, 35];
// let group5 = [41, 42, 43, 44, 45];

// console.log(group1);
// const newgroup = [...group1, ...group2, ...group3, ...group4, ...group5];
//const newgroup = [...group1, ...group2, ...group3, group4, [group5]];

// console.log(newgroup);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
 
       REMOVE ELEMENT IN AN ARRAY

*/

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//using pop element in javascript

// let subject = [
//   "maths",
//   "english",
//   "physics",
//   "chemistry",
//   "Hindi",
//   "Social Sciece",
// ];

// console.log(subject);

// const deleteEle = subject.pop();

// console.log(subject);
// console.log(deleteEle);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//using shift method

// let subject = [
//   "maths",
//   "english",
//   "physics",
//   "chemistry",
//   "Hindi",
//   "Social Sciece",
// ];

// console.log(subject);

// const deleteEle = subject.shift();

// console.log(subject);
// console.log(deleteEle);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//using splice method
// let subject = [
//   "maths",
//   "english",
//   "physics",
//   "chemistry",
//   "Hindi",
//   "Social Sciece",
// ];

// console.table(subject);

// const deleteEle = subject.splice(0, 2);

// console.log("new Subject ", subject);
// console.log("deleted subject ", deleteEle);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//using filter method
let num = [1, 2, 3, 4, 5];

console.log("old num ", num);

const deleteEle = num.filter((n) => {
  if (n > 2) {
    return n;
  }
});

console.log("new num ", num);
console.log("deleteEle ", deleteEle);
