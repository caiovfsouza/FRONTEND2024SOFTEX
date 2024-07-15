//Questão 08
let numero1: string | null = prompt(`Entre com o primeiro número inteiro: `);
if (numero1 !== null && !isNaN(Number(numero1)) && numero1.trim() !== ``) {
  let numero2: string | null = prompt(`Entre com o segundo número inteiro: `);
  if (numero2 !== null && !isNaN(Number(numero2)) && numero2.trim() !== ``) {
    let numero11: number = Number(numero1);
    let numero21: number = Number(numero2);

    let soma: number = numero11 + numero21;
    console.log(
      `O resultado da soma de ${numero11} com ${numero21} é ${soma}.`
    );
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
