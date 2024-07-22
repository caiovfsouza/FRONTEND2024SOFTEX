//Questão 12
let div: string | null = prompt(`Entre com um número inteiro: `);
if (div !== null && !isNaN(Number(div)) && div.trim() !== ``) {
  let div1: number = Number(div);
  if (div1 % 3 === 0 && div1 % 5 === 0) {
    console.log(`${div1} é divisível por 3 e por 5 ao mesmo tempo.`);
  } else {
    console.log(
      `Infelizmente ${div1} não é divisível por 3 e por 5 ao mesmo tempo.`
    );
  }
} else {
  console.log(`Entre com um dado válido!`);
}
