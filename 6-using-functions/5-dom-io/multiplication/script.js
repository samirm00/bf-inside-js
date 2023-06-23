import { readNumber, display } from '../../../lib/dom-io.js';

import multiply from './utils/multiplication.js'



document.getElementById('do-math').addEventListener('click', () => {
  
  const left = readNumber('left');
  const right = readNumber('right');

  const result = multiply(left, right);
  display( 'product', result)
});
