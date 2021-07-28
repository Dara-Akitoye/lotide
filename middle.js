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

const middle = function (array) {
  const index = Math.floor(array.length / 2)
  for (let i = 0; i < array.length; i++) {
    if (array.length % 2 !== 0) {
      return [array[index]]
    } else if (array.length % 2 === 0) {
      return [array[index - 1], array[index]];
    }
  }
}

