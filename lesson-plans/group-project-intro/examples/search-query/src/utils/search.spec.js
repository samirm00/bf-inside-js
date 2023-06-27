import { searchQuery } from './search.js';

describe('search a query in a string', () => {
  describe('works only with strings', () => {
    it('default parameters', () => {
      expect(searchQuery('', '')).toEqual(true);
    });
    it('case sensitive', () => {
      expect(searchQuery('hello', 'H')).toEqual(false);
    });
  });
});
