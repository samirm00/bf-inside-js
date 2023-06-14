'use strict';

// console.log('-- begin --');

// // refactor this code to use || instead of a conditional

// // try different values and different types
// const isAfterFive = true;
// const isTheWeekend = true;
// console.log(isAfterFive, isTheWeekend);

// let stopWorking = isAfterFive === true || sTheWeekend === true;
// console.log(stopWorking);

// console.log('-- end --');

'use strict';
// console.log('-- begin --');
// // refactor this code to use || instead of a conditional
// // try different values and different types
// const isAfterFive = true;
// const isTheWeekend = true;
// console.log(isAfterFive, isTheWeekend);
// let stopWorking = isAfterFive === true;
// if ( stopWorking === false || isTheWeekend === false ) {
//   stopWorking = isTheWeekend === false;
// }
// console.log(stopWorking);
// console.log('-- end --');

const name = 'Jane';

console.time('if stat');
if (name[0] === 'A') {
  console.log('You are first');
} else {
  console.log('You are not  first');
}
console.timeEnd('if stat');

console.time('if ternary ');
name[0] === 'A'
  ? console.log('You are first')
  : console.log('You are not  first');
console.timeEnd('if ternary');
