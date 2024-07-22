//Questão 04
let nPnI: string | null = prompt(`Entre com um número: `);
if (nPnI !== null && !isNaN(Number(nPnI)) && nPnI.trim() !== ``) {
  let nPnI1: number = Number(nPnI);
  if (nPnI1 % 2 === 0) {
    console.log(`Você digitou um número par.`);
  } else {
    console.log(`Você digitou um número ímpar.`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
