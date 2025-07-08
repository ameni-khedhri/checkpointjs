function findMax(arr) {
  return Math.max(...arr);
}


function findMin(arr) {
  return Math.min(...arr);
}

function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}