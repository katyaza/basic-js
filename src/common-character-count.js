const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let arr = [];
  arr = s2.split('');
  let length2 = arr.length;
  for (let i = 0; i < s1.length; i++) {
    if (arr.includes(s1[i])) {
      let a = arr.indexOf(s1[i]);
      arr.splice(a, 1);
    }
  }
  let length1 = arr.length;
  return length2 - length1
}

module.exports = {
  getCommonCharacterCount
};
