'use strict';

let firstName;
while (true) {
  firstName = prompt('Please enter your namr');
  if (!firstName) {
    continue;
  } else {
    break;
  }
}

alert('Hello, ' + firstName);
