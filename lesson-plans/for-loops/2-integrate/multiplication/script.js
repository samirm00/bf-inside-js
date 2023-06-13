import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  // read user values
  const left = readNumber('left');
  const right = readNumber('right');

  // calculate the result
  const result = left * right;

  // display the product
  display('product', result);
});
