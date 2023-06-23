// #todo

import { reverse } from './utils/reverse.js';

/* reverse text or words

  reverse either the whole text, or each word individually

*/

/* ===== main program (use functions) ===== */

alert(
  'enter some text, then decide if you want to reverse the whole thing or each word',
);

let original = null;
while (original === null) {
  original = prompt('enter the text to reverse');
}

const reverseWords = confirm(`what do you want to remove?

- each word: "ok"
- whole thing: "cancel"`);

let reversed = '';
if (reverseWords) {
  const splitText = original.split(' ');
  const newWords = [];
  for (const word of splitText) {
    const reversedWord = reverse(word);

    newWords.push(reversedWord);
  }
  reversed = newWords.join(' ');
} else {
  const reversedText = reverse(original);

  reversed = reversedText;
}

alert(`before: ${original}
after: ${reversed}`);
