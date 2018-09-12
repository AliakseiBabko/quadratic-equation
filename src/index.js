module.exports = function solveEquation(equation) {
  // your implementation
  let temp = equation.split(' ');
  let solutions = [];
  let a = parseInt(temp[0]), b, c, d;
  
  if (temp[3] === '-') {
    b = (parseInt(temp[4]) * -1)
   }
   else {
    b = parseInt(temp[4]);
   }
  if (temp[7] === '-') {
    c = (parseInt(temp[8]) * -1)
  }
  else {
    c = parseInt(temp[8]);
  }  
  d = Math.sqrt((b * b) - (4 * a * c));
  solutions.push(Math.round((-b + d) / (2 * a)));
  solutions.push(Math.round((-b - d) / (2 * a)));
  solutions.sort((a,b) => a-b);
  
  return solutions;
}
