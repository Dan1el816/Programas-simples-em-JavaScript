for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/*Esse programa percorre os números de 1 até 100 usando um laço `for` e, para cada número, verifica se ele é divisível por 3, por 5 ou por ambos. Se for divisível por 3 e 5 ao mesmo tempo, ele imprime "FizzBuzz"; se for apenas por 3, imprime "Fizz"; se for apenas por 5, imprime "Buzz". Caso não seja divisível por nenhum dos dois, ele simplesmente mostra o próprio número no console.
*/