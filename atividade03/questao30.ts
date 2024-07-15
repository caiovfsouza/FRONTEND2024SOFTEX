//Questão 30
let numInt: string | null = prompt(`Entre com um número inteiro: `);
if (numInt !== null && !isNaN(Number(numInt)) && numInt.trim() !== ``) {
  let frase: string | null = prompt(`Entre com uma frase: `);
  if (frase !== null && frase.trim() !== ``) {
    let numInt1: number = Number(numInt);

    console.log(`${numInt1} ${frase}.`);
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
