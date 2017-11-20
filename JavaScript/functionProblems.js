function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    fac = 1;
    for (i = number; i >= 1; i--) {
      fac = fac * i;
    }
    return fac;
  }
}

function kebabToSnake(str) {
  snake = str.replace(/-/g, '_');

  return snake;
}
