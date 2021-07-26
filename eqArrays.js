const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failes: ${actual} !== ${expected}`)
  }
}



let eqArrays = function (arrOne, arrTwo) {
  let ans = arrOne.length === arrTwo.length &&
    arrOne.every(function (element, index) {
      return element === arrTwo[index];
    })
  return ans;
}






