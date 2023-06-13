'use strict';

/* Running its

  For the first time, you will be using code that relies on LIBRARIES
  libraries are code that other people wrote, and you use
    you are not expected to read the source code for these libraries
    or to understand how they are implemented

  libraries will make certain parts of your life much easier
  but other parts will become more complicated

  all exercises that have its (file.it.js) in this repository have 3 global dependencies:
  - describe
  - it or test
  - expect
  these files WILL NOT RUN IN JS TUTOR

  to run ited files you will need to either:
  - use `study-lenses` + your browser's debugger
  - use terminal with the command `npm run it -- ./path/to/file.it.js`
*/

// go ahead and try running these lines of code with and without its enabled:

describe('boolean values', () => {
  it('true is true', () => {
    expect(true).toEqual(true);
  });
  it('false is false', () => {
    expect(false).toEqual(false);
  });
  it('greater or equal to 2 ', () => {
    expect(3).toBeGreaterThanOrEqual(2);
  });
  it('to be truthy', () => {
    expect(3).toBeTruthy();
  });
});
