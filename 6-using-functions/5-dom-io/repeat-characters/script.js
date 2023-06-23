import { readNumber, readString, display } from '../../../lib/dom-io.js';

import repeatCharacters from './utils/repeat-characters.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  // debugger;

  // get input form the user
  const text = readString('user-text');
  const reparations = readNumber('number-of-times');

  const finalText = repeatCharacters(text, reparations);

  display('repeated-output', finalText);
});
