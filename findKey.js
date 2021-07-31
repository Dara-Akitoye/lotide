const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failes: ${actual} !== ${expected}`)
  }
}

const findKey = function (object, callback) {
  for (key in object) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
}

//test code below

/*let test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 4 },
  "Ora": { stars: 4 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 8)

assertEqual(test, undefined)*/