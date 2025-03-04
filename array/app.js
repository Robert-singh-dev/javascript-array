// empty array is created
const myArray = [];

myArray[0] = "Robert";
myArray[1] = "Web Developer";
myArray[2] = 6012001;
myArray[3] = true;

//      to log all aray value
// console.log(myArray);

//      to log particular array element
// console.log(myArray[2]);

//      to get the length of an array
// console.log(myArray.length);

//      to add new element in array last
// myArray.push("pulser");
// console.log(myArray);

//      to delete last element in array
// myArray.pop();
// console.log(myArray);

//       to add new element in array first
// myArray.unshift("new element");
// console.log(myArray);

//        to delete element in array first
// myArray.shift();
// console.log(myArray);

//          what happen when you store a array element in const and log it. it will give a length of an array
// const lastItem = myArray.push("singh");
// console.log(lastItem);
// console.log(myArray);

// const firstItem = myArray.unshift("W");
// console.log(firstItem);
// console.log(myArray);

//          the same above one when we use for remove element
// const lastItem2 = myArray.pop();
// console.log(lastItem2);

// const firstItem2 = myArray.shift();
// console.log(firstItem2);

//           how to remove a particular array
// delete myArray[2];
// console.log(myArray);
// if we delete using like the above this create a "empty" space in array
// to aviod this we use "  splice(2.1)  "

//            how to remove a particular array
// this "2" represet the array index and next number represent till how many numbers it to be removez
// myArray.splice(2, 1);
// console.log(myArray);

//             how to replae an array element
// myArray.splice(2, 1, "data added to an array element");
// console.log(myArray);

// //           how to add an array element
// // this just add an element in that area also dont remove it
// myArray.splice(3, 0, "another data added to an array element");
// console.log(myArray);

// //       slice
// console.log(myArray);
// // this help us to get the set of array from this to that
// const newArray = myArray.slice(1, 3);
// console.log(newArray);

// //       reverse
// console.log(myArray);
// // this help us to get the set of array from this to that
// const newArray = myArray.reverse();
// console.log(newArray);

//           join
// console.log(myArray);
// this help us to get the set of array from this to that
// const newArray = myArray.join();
// console.log(newArray);
//           split change join to array

//            joining two arrays
myArrayTwo = ["sudhakar", "nellai", "desiger"];
newArray = myArray.concat(myArrayTwo);

console.log(newArray);
