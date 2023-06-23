import { readString, display } from '../../../lib/dom-io.js';

import reverseString from './utils/reverse-string.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  // debugger;

  // get user input
  const text = readString('user-text');

  const finalString = reverseString(text);

  display('reversed-output', finalString);
});
