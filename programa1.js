/*
Função que seleciona aleatoriamente uma pessoa de uma lista para pagar o almoço.
A função aceita até 6 nomes como parâmetros e retorna quem irá pagar a conta.

Exemplo de uso:
selecionarNome("Angela", "Ben", "Jenny", "Michael", "Chloe")
Retorno esperado: "Michael is going to buy lunch today!"
*/

function selecionarNome(
  nome1 = "nome",    // Valor padrão caso não seja fornecido um nome
  nome2 = "nome2",   // Mantive valores padrão em português mesmo 
  nome3 = "nome3",   // porque foi assim que você escreveu originalmente
  nome4 = "nome4",
  nome5 = "nome5",
  nome6 = "nome6",
) {
  // Crio um array com todos os nomes fornecidos como parâmetros
  var lista_nomes = [nome1, nome2, nome3, nome4, nome5, nome6];
  
  // Variável para armazenar a quantidade de pessoas na lista
  var quant_pessoas_lista = lista_nomes.length;
  
  // Gero um número aleatório entre 0 e 6 (Math.random() * 7)
  // e arredondo para baixo com Math.floor()
  var sorteio = Math.floor(Math.random() * 7);
  
  
  
  // Uso o número sorteado como índice para selecionar um nome da lista
  var resultado = lista_nomes[sorteio];
  
  // Mensagem em português - mas o exercício pede em inglês
  var mensagem = " Terá que pagar a conta hoje!";
  
  // Retorno o nome + mensagem
  return resultado + mensagem;
}

// Teste da função com os nomes do exemplo
selecionarNome("Angela", "Ben", "Jenny", "Michael", "Chloe");