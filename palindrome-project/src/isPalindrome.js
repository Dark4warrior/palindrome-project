/**
 * @param {string} str 
 * @returns {boolean} 
 */
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/\s/g, '');

  const reversedStr = cleanStr.split('').reverse().join('');

  return cleanStr === reversedStr;
}

// Jsut s

module.exports = { isPalindrome };