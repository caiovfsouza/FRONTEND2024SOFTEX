//Questão 18
let num1: string | null = prompt(`Entre com o primeiro número: `);
if (num1 !== null && !isNaN(Number(num1)) && num1.trim() !== ``) {
  let num2: string | null = prompt(`Entre com o segundo número: `);
  if (num2 !== null && !isNaN(Number(num2)) && num2.trim() !== ``) {
    let num11: number = Number(num1);
    let num21: number = Number(num2);

    let maior: number;
    if (num11 > num21) {
      maior = num11;
    } else {
      maior = num21;
    }
    console.log(`O maior número informado foi ${maior}.`);
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
