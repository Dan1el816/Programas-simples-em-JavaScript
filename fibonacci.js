function fibonacciGenerator(n) {
  var sequencia = [];
  var resultado;

  if (n === 0) {
    resultado = sequencia;
    return resultado;
  } else {
    sequencia[1] = 1;
    sequencia[0] = 0;
  }


  if (n === 1) {
    resultado = sequencia[0];
    return resultado;
  }

  for (var i = 2; i <= n; i++) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    resultado = sequencia;
  }

  return resultado;
}

fibonacciGenerator(10);
