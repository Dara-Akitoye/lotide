const assertArrayEqual = require('./assertArraysEqual');

const middle = function (array) {
  const step = Math.floor(array.length / 2)
  for (let i = 0; i < array.length; i++) {
    if (array.length % 2 !== 0) {
      return [array[step]]
    } else if (array.length % 2 === 0) {
      return [array[step - 1], array[step]];
    }
  }
}




module.exports = middle;
