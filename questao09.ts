//Questão 09
let numDec: string | null = prompt(`Entre com um número decimal: `);
if (numDec !== null && !isNaN(Number(numDec)) && numDec.trim() !== ``) {
  let numDec1: number = Number(numDec);
  let quadrado: number = numDec1 ** 2;
  console.log(`O quadrado de ${numDec1} é ${quadrado.toFixed(2)}.`);
} else {
  console.log(`Entre com um dado válido!`);
}
