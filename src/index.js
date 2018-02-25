module.exports = function solveEquation(equation) {
  // your implementation
  let a, b, c, d;
  let temp = [];
  let solutions = [];
  temp = equation.split(" ");
  a = parseInt(temp[0]);
  temp[3] == "-" ? b = (parseInt(temp[4]) * -1) : b = parseInt(temp[4]);
  temp[7] == "-" ? c = (parseInt(temp[8]) * -1) : c = parseInt(temp[8]);
  d = Math.sqrt((b * b) - (4 * a * c));
  solutions[0] = Math.round((-b + d) / (2 * a));
  solutions[1] = Math.round((-b - d) / (2 * a));
  if (solutions[0] > solutions[1]) {
    let z = solutions[0];
    solutions[0] = solutions[1];
    solutions[1] = z;
  }
  return solutions;
}
