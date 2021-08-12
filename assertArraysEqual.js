const eqArrays = require('./eqArrays');

const assertArrayEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failes: ${arrOne} !== ${arrTwo}`)
  }
}

module.exports = assertArrayEqual;