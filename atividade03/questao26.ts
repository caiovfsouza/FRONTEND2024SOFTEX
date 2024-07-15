//Questão 26
let variavel: string | null = prompt(`Entre com um número inteiro: `);
if (variavel !== null && !isNaN(Number(variavel)) && variavel.trim() !== ``) {
  let variavel1: number = Number(variavel);
  let variavelSoma: number = variavel1 + 10;
  console.log(`O resultado da soma é ${variavelSoma.toString()}`);
} else {
  console.log(`Entre com um número válido!`);
}
