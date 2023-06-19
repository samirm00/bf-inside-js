import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  // get user inputs
  const leftNumber = readNumber('left');
  const rightNumber = readNumber('right');

  // calculate the result
  const result = leftNumber * rightNumber;

  // display the result

  display('product', result);
});
