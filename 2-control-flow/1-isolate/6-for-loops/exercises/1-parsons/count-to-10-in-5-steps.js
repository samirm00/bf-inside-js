'use strict';
/*
  which body will pass the assertion?
*/

let count = 0;
for (let i = 0; i < 5; i++) {
  count = count + i;
}
console.log(count === 10);
