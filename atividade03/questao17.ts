//Questão 17
let numPosNeg: string | null = prompt(`Entre com um número: `);
if (
  numPosNeg !== null &&
  !isNaN(Number(numPosNeg)) &&
  numPosNeg.trim() !== ``
) {
  let numPosNeg1: number = Number(numPosNeg);
  if (numPosNeg1 >= 0) {
    console.log(`${numPosNeg1} é um número positivo.`);
  } else {
    console.log(`${numPosNeg1} é um número negativo.`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
