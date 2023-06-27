/**
 * Search a query in a text
 * @param {string} [text=''] - the text to search
 * @param {string} [query=''] - the query to search
 * @returns {boolean} the query existed in a string or not
 */

export const searchQuery = (text = '', query = '') => {
  return text.includes(query);
};
