const eqObjects = function (object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let elem of arr1) {
    if (Array.isArray(object1[elem]) && Array.isArray(object2[elem])) {
      return eqArrays(object1[elem], object2[elem]);
    }
    if (object1[elem] !== object2[elem]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === true) {
    return `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`
  } else {
    return `🛑🛑🛑 Assertion Failes: ${inspect(object1)} !== ${inspect(object2)}`
  }
};

console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }))