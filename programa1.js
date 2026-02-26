/*Você vai escrever uma função que irá selecionar um nome aleatório de uma lista de nomes. A pessoa selecionada terá que pagar a conta da comida de todo mundo.

Importante:
A saída deve ser retornada pela função e você não precisa usar alert, prompt ou console.log.
A saída deve corresponder exatamente ao exemplo, incluindo letras maiúsculas e pontuação.*/
//-----------------------------------------------------------------------------------------------------------------------------------------



//Criando lista com os nomes

var lista_nomes=[];
function selecionarNome( lista_nomes ) {

    var quant_pessoas_lista=lista_nomes.length;
    var sorteio=Math.floor(Math.random(lista_nomes.length) * 7);
    quant_pessoas_lista=sorteio;
    console.log(lista_nomes[sorteio]);
}