const assertEqual = require('./assertEqual');



const eqArrays = function (arrOne, arrTwo) {
  const ans = arrOne.length === arrTwo.length &&
    arrOne.every(function (element, index) {
      return element === arrTwo[index];
    })
  return ans;
}

module.exports = eqArrays;
