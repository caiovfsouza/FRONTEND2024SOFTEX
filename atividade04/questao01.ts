//Questão 01
let nI: string | null = prompt(`Entre com um número inteiro: `);
if (nI !== null && !isNaN(Number(nI)) && nI.trim() !== ``) {
  let nI1: number = Number(nI);
  if (nI1 > 0) {
    console.log(`Você digitou um número positivo.`);
  } else if (nI1 < 0) {
    console.log(`Você digitou um número negativo.`);
  } else {
    console.log(`Você digitou o número zero.`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
