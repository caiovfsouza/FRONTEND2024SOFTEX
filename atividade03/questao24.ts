//Questão 24
let pNumero: string | null = prompt(`Entre com o primeiro número decimal: `);
if (pNumero !== null && !isNaN(Number(pNumero)) && pNumero.trim() !== ``) {
  let sNumero: string | null = prompt(`Entre com o segundo número decimal: `);
  if (sNumero !== null && !isNaN(Number(sNumero)) && sNumero.trim() !== ``) {
    let pNumero1: number = Number(pNumero);
    let sNumero1: number = Number(sNumero);

    let restoDaDivisao: number = pNumero1 % sNumero1;
    console.log(
      `O resto da divisão entre ${pNumero1} e ${sNumero1} é ${restoDaDivisao.toFixed(
        2
      )}.`
    );
  } else {
    console.log(`Entre com um número válido!`);
  }
} else {
  console.log(`Entre com um número válido!`);
}
