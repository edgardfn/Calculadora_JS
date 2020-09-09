
const calculadora = require("./calc"); /* importar modulo */

/* CRIAR PACOTE: 
  no terminal digitar npm init ;
  ENTRY POINT: ARQUIVO QUE VAI INICIAR PROJETO INTEIRO;
  depois que preencher tudo vai criar aquivo package.json com dados que foram preenchidos nessa fase;

*/

/*
  instalar biblioteca do prompt: npm install prompt-sync;
  cria pasta node_modules;
*/

/* importar prompt */
const prompt = require("prompt-sync")();



function options() {
  console.log(`
  1 - somar
  2 - subtrair
  3 - multiplicar
  4 - dividir
  0 - sair
  `);
}



function optionSelected(opcao) {
  const num1 = Number(prompt("Digite numero 1: ")); /* CONVERTER DE STRING PARA NÚMERO */
  const num2 = Number(prompt("Digite numero 2: "));

  if (opcao == "1") {
    return calculadora.soma(num1, num2);
  }

  if (opcao == "2") {
    return calculadora.subtracao(num1, num2);
  }

  if (opcao == "3"){
    return calculadora.multiplicacao(num1, num2);
  }

  if(opcao == "4"){
    return calculadora.divisao(num1, num2)
  }
}

let opcao;
while (opcao != "0") {
  options();
  opcao = prompt("Qual a opção? ");
  const resultado = optionSelected(opcao);

  console.log(`O resultado é ${resultado}`);
}