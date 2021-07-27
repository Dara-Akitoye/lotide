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

const without = function (source, itemsToRemove) {
  let newArr = source.slice(0);
  for (let item of itemsToRemove) {
    for (let i = 0; i < newArr.length; i++) {
      if (item === newArr[i]) {
        newArr.splice(i, 1)
      }
    }

  }
  return newArr;
}

console.log(without(["1", "2", "3"], ["3", "2"])) // expected return:["1", "2"]

