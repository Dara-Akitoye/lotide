const eqArrays = function (arrOne, arrTwo) {
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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



const results1 = map(words, word => word[0]);
console.log(results1);

//test code below
//console.log(assertArrayEqual(results1, ['g', 'c', 't', 'm', 't']));
//console.log(assertArrayEqual(results1, words.map(word => word[0])));
