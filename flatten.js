let eqArrays = function (arrOne, arrTwo) {
  let ans = arrOne.length === arrTwo.length &&
    arrOne.every(function (element, index) {
      return element === arrTwo[index];
    })
  return ans;
}


const assertArrayEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    return `✅✅✅ Assertion Passed: ${arrOne} === ${arrTwo}`
  } else {
    return `🛑🛑🛑 Assertion Failes: ${arrOne} !== ${arrTwo}`
  }
}


const flatten = function (source) {
  let flattened = [].concat(...source)
  return flattened
}

