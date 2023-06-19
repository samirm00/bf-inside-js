'use strict';

// alert displays whatever you pass as an argument
//  the value will be cast to a string

// const alertMessage = 'alert!';
// const alertValue = alert(alertMessage);

// console.log('alertValue:', typeof alertValue, alertValue);

// if (alertValue === undefined) {
//   alert('you have been alerted');
// } else {
//   // unreachable path!
//   // alert always returns undefined
// }

//

// const age = 18;
// if (age < 18) {
//   console.log('You need to go to school'); // 1
// } else if (age <= 25 && age >= 18) {
//   console.log('You need to go to party'); //2
// } else if (age <= 35 && age >= 26) {
//   console.log('You need to code.'); // 3
// } else {
//   console.log('You still need to work sorry for that.'); // 4
// }

// const cat = {
//   name: 'Oliver',
//   age: 1,
//   isOld: false,
//   meow: () => {
//     console.log(`${cat.name} meeeeow`);
//     console.log(this);
//   },
// };

// const cat = {
//   name: 'Oliver',
//   age: 1,
//   isOld: false,
//   meow: function (sound) {
//     console.log(`${this.name} ${sound}`);
//   },
// };

// console.log( cat["age"] )
// cat.meow('Meaoooooo');

// for (const t in cat) {
//   console.log(t + ' : ' + cat[t]);
// }

// const numbers = [1, 2, 'test'];

// numbers.forEach((num) => {
//   console.log(num);
// });

// function declaration

function sayHello(names) {
  if (!Array.isArray(names)) {
    return;
  }

  names.forEach((name) => {
    console.log(name);
  });
}

sayHello();
