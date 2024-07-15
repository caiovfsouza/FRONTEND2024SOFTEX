//Questão 32
let n: string | null = prompt(`Entre com um número inteiro: `);
if (n !== null && !isNaN(Number(n)) && n.trim() !== ``) {
  let nu1: number = Number(n);

  let dobro: number = nu1 * 2;
  console.log(`O dobro de ${nu1} é ${dobro}.`);
} else {
  console.log(`Entre com um número inteiro válido!`);
}
