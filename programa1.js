/*Você vai escrever uma função que irá selecionar um nome aleatório de uma lista de nomes. A pessoa selecionada terá que pagar a conta da comida de todo mundo.

Importante:
A saída deve ser retornada pela função e você não precisa usar alert, prompt ou console.log.
A saída deve corresponder exatamente ao exemplo, incluindo letras maiúsculas e pontuação.

Example Input

["Angela", "Ben", "Jenny", "Michael", "Chloe"]

Example Output

Michael is going to buy lunch today!

*/
//-----------------------------------------------------------------------------------------------------------------------------------------



function selecionarNome(
  nome1 = "nome",
  nome2 = "nome2",
  nome3 = "nome3",
  nome4 = "nome4",
  nome5 = "nome5",
  nome6 = "nome6",
) {
  var lista_nomes = [nome1, nome2, nome3, nome4, nome5, nome6];
  var quant_pessoas_lista = lista_nomes.length;
  var sorteio = Math.floor(Math.random(lista_nomes.length) * 7);
  quant_pessoas_lista = sorteio;
  var resultado=lista_nomes[sorteio]
  var mensagem=" Terá que pagar a conta hoje!";
  return resultado+mensagem;
}
selecionarNome("Angela", "Ben", "Jenny", "Michael", "Chloe");