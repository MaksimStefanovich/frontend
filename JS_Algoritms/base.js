// Известно, что X кг конфет стоит A рублей. Определить, сколько стоит 1 кг и Y кг этих же конфет.


function oneKg(a, x) {
  return a / x
}

function task1a(a, x, y) {
  const oneKgData = oneKg(a, x);
  const yKg = oneKgData * y;
  console.log(yKg)
}

function task1b(a, b, x, y) {
  const oneKgA = oneKg(a, x);
  const oneKgB = oneKg(b, y);
  return oneKgA / oneKgB;
}

function triangle(a, b, c) {
  return a === b || a === c || b === c;
}

function distance(a, b, c) {
  if ((c - a) < (b - a)) {
    return Math.abs(c - a)
  } else {
    return Math.abs(b - a);
  }
}

function sFact(n) {
  let rval = 1, sum = 0;
  for (let i = 2; i <= n; i++){
    rval = rval * i;
    sum += rval
  }

  return sum;
}

console.log(sFact(5))