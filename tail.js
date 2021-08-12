const assertEqual = require('./assertEqual');

const tail = function (list) {
  let newList = list.slice(1);
  return newList;
}


module.exports = tail;