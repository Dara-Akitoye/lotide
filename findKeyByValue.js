const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failes: ${actual} !== ${expected}`)
  }
}

const findKeyByValue = function (object, value) {
  let arr = Object.keys(object)
  for (item of arr) {
    for (const [key, values] of Object.entries(object)) {
      if (values === value) {
        return key;
      }
    }
  }
}




