/*Você vai escrever uma função que irá selecionar um nome aleatório de uma lista de nomes. A pessoa selecionada terá que pagar a conta da comida de todo mundo.

Importante:
A saída deve ser retornada pela função e você não precisa usar alert, prompt ou console.log.
A saída deve corresponder exatamente ao exemplo, incluindo letras maiúsculas e pontuação.*/
//-----------------------------------------------------------------------------------------------------------------------------------------



//Criando lista com os nomes
var lista_de_nomes=[ "Daniel", "William", "José", "Alexandre", "Carlos", "João"];

function selecionarNome() {

    var quant_pessoas_lista=lista_de_nomes.length;
    var sorteio=Math.floor(Math.random(lista_de_nomes.length) * 11);
}