import { readNumber, readString, display } from '../../../lib/dom-io.js';

import repeatString from './utils/repeat-string.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  // debugger;

  // get user inputs
  const text = readString('user-text');
  const repeatations = readNumber('number-of-times');

  const finalString = repeatString(text, repeatations);

  display('repeated-output', finalString);
});
