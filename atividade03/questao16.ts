//Questão 16
let numParImpar: string | null = prompt(`Entre com um número: `);
if (
  numParImpar !== null &&
  !isNaN(Number(numParImpar)) &&
  numParImpar.trim() !== ``
) {
  let numParImpar1: number = Number(numParImpar);
  if (numParImpar1 % 2 == 0) {
    console.log(`${numParImpar1} é um número par.`);
  } else {
    console.log(`${numParImpar1} é um número ímpar.`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
