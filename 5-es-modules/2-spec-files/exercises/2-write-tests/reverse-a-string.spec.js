import { reverseAString } from './reverse-a-string.js';

describe('reverser: reverses a string', () => {
  it('reverses one letter', () => {
    const returned = reverseAString('a');
    expect(returned).toEqual('a');
  });
  it('reverses the empty string', () => {
    const returned = reverseAString('');
    expect(returned).toEqual('');
  });
  it('reverses words with punctuation', () => {
    const returned = reverseAString('hoy!');
    expect(returned).toEqual('!yoh');
  });
  it('reverses long strings', () => {
    const returned = reverseAString('!! How is LOUD ??');
    expect(returned).toEqual('?? DUOL si woH !!');
  });
  it('reverses one letter', () => {
    const returned = reverseAString('a');
    expect(returned).toEqual('a');
  });
  it('has a default parameter', () => {
    const returned = reverseAString();
    expect(returned).toEqual('');
  });
});
