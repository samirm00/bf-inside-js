/**
 * returns true if no values are numbers, otherwise returns false
 * does not modify the argument array
 * @param {Array} arr - the array of values to check
 * @returns {boolean}
 */
export const containsNoNumbers = (arr = []) => {
  return arr.every((item) => typeof item !== 'number');
};
