const eqArrays = function (arrOne, arrTwo) {
  const ans = arrOne.length === arrTwo.length &&
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
  let newArr = [];

  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      newArr.push(item);
    }
  }

  return newArr;
}



