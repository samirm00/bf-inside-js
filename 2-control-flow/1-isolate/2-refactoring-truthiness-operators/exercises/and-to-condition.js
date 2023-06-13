'use strict';

console.log('-- begin --');

// refactor this code to use a conditional instead of &&

// try different values and different types
const a = 2000;
console.log(a);
let isBigNumber = false;
if (typeof a === 'number' && a > 1000) {
  isBigNumber = true;
  console.log(isBigNumber);
}

console.log('-- end --');
