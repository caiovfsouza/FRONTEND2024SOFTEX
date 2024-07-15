//Questão 19
let altura: string | null = prompt(`Entre com a altura: `);
if (altura !== null && !isNaN(Number(altura)) && altura.trim() !== ``) {
  let peso: string | null = prompt(`Entre com o peso: `);
  if (peso !== null && !isNaN(Number(peso)) && peso.trim() !== ``) {
    let altura1: number = Number(altura);
    let peso1: number = Number(peso);

    let imc: number = peso1 / altura1 ** 2;
    console.log(`Seu IMC é ${imc.toFixed(2)}.`);
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
