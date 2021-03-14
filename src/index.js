
// You should implement your task here.

module.exports = function towelSort (matrix =[]) {
  let result = [];
  for (let str = 0; str < matrix.length; str++) {
    if ((str + 1) % 2 === 0) {
      matrix[str].reverse();
    } 
   matrix[str].forEach(e => result.push(e));
  }
  return result;
}
