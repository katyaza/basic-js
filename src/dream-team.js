const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr=[];
  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach(element => {
    if(typeof element == 'string'){
    arr.push(element.trim()[0].toUpperCase())
    }
});
arr.sort()
return arr.join('')
}

console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']))


module.exports = {
  createDreamTeam
};
