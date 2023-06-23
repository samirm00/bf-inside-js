/**
 * Returns a new string with only the given characters left in it.
 *
 * @param {string} [text=''] - Some text to remove characters from.
 * @param {string} [chars=''] - The characters to keep.
 * @returns {string} Text with only the given characters still in it.
 */
export const keepCharacters = (text = '', chars = '') => {
  let newText = '';

  for (const char of text) {
    if (chars.indexOf(char) !== -1) {
      newText += char;
    }
  }

  return newText;
};
