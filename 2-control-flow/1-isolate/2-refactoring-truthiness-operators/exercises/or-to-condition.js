'use strict';

console.log('-- begin --');

// refactor this code to use a condition instead of ||

// try different values and different types
const firstName = 'Adam';
const lastName = 'Tim';
console.log(firstName, lastName);

let hasAnAName;
if (firstName[0] === 'A' || lastName[0] === 'A') {
  hasAnAName = true;
}
console.log(hasAnAName);

console.log('-- end --');
