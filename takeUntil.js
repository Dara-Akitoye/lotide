const takeUntil = function (array, callback) {
  let ans = [];
  for (let item of array) {
    if (callback(item) !== true) {
      ans.push(item);
    } else {
      break;
    }
  }
  return ans;
}


