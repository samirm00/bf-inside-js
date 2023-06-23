import { readString, display } from '../../../lib/dom-io.js';

import createPyramid from './utils/create-pyramid.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  // debugger;

  // get user input
  const text = readString('to-pyramid');

  const pyramid = createPyramid(text);

  display('pyramided', pyramid);
});
