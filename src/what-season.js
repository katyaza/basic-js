const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


 function getSeason(date) {
  let seasons = ['winter', 'spring', 'summer', 'fall', 'winter'];
   if (!date) {
     return 'Unable to determine the time of year!';
   }
 
   if (!Date.parse(date)) {
     throw new Error('Invalid date!');
   }
 
   try {
     date.getUTCSeconds()
   } catch { 
     throw new Error('Invalid date!')
   };
 
   let month = date.getMonth();
 
   return seasons[parseInt((month + 1) / 3)];
 }
 
console.log(getSeason(new Date(2020, 02, 31)))


module.exports = {
  getSeason
};
