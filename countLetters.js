const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failes: ${actual} !== ${expected}`)
  }
}

const countLetters = function (string) {
  const results = {};
  for (const letters of string) {
    if (results[letters]) {
      results[letters] += 1
    } else {
      results[letters] = 1
    }
    delete results[' ']
  }
  return results;
}
