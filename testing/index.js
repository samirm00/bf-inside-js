'use strict';

// every
// const array1 = [5, 31, 39, 29, 11, 13];

// const result = array1.every((item) => item > 3);

// forEach

// const result = array1.forEach((item) => console.log(item));

// reduce

// let i = 1;
// const result = array1.reduce((item, sum) => sum * item, i)

// some
// const result = array1.some(item => item % 2 === 0);
// console.log(result);

// const result = array1.map((item, index) => {
//   return {
//     id: index + 1,
//     item: item,
//     test: true,
//   };
// });
// console.log(result);

// const result = array1.filter((item) => item > 15);
// console.log(result);

// let num1 = 10;
// const num2 = num1;
// console.log(num1);
// console.log(num2);

// num1 = 100;

// console.log(num1);
// console.log(num2);

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr1.push(4);

console.log(arr1);
console.log(arr2);
