const assertArrayEqual = require('../assertArraysEqual');
const middle = require('../middle');


const list = [1, 2, 3, 4, 5];
const result = middle(list);
assertArrayEqual(result, [3]);