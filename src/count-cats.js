const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
let matrix=([
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
  ])

function countCats(matrix) {
  let count=0;
  matrix.forEach(item => {
    item.forEach(e => {
      typeof e === 'string' && e.includes('^^') && e.length == 2 ? count += 1 : null;
    })
    })
  return count
}



console.log(countCats(matrix))

module.exports = {
  countCats
};
