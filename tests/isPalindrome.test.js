const { isPalindrome } = require('../src/isPalindrome');

describe('isPalindrome function', () => {

  test('devrait retourner true pour un palindrome simple', () => {
    expect(isPalindrome('radar')).toBe(true);
    expect(isPalindrome('kayak')).toBe(true);
  });

  test('devrait retourner false pour un mot non palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('monde')).toBe(false);
  });

  test('devrait retourner true pour une chaîne vide', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('devrait être insensible à la casse lower/upper quoi', () => {
    expect(isPalindrome('Kayak')).toBe(true);
    expect(isPalindrome('RadAr')).toBe(true);
  });

  test('devrait ignorer les espaces', () => {
    expect(isPalindrome('a man a plan a canal panama')).toBe(true);
  });
});