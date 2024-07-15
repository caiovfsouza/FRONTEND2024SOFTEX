//Questão 38
let primeiroNumero: string | null = prompt(
  `Entre com o primeiro número decimal: `
);
if (
  primeiroNumero !== null &&
  !isNaN(Number(primeiroNumero)) &&
  primeiroNumero.trim() !== ``
) {
  let segundoNumero: string | null = prompt(
    `Entre com o segundo número decimal: `
  );
  if (
    segundoNumero !== null &&
    !isNaN(Number(segundoNumero)) &&
    segundoNumero.trim() !== ``
  ) {
    let terceiroNumero: string | null = prompt(
      `Entre com o terceiro número decimal: `
    );
    if (
      terceiroNumero !== null &&
      !isNaN(Number(terceiroNumero)) &&
      terceiroNumero.trim() !== ``
    ) {
      let primeiroNumero1: number = Number(primeiroNumero);
      let segundoNumero1: number = Number(segundoNumero);
      let terceiroNumero1: number = Number(terceiroNumero);

      let mediaAritmetica: number =
        (primeiroNumero1 + segundoNumero1 + terceiroNumero1) / 3;
      console.log(
        `A média entre os três números digitados é ${mediaAritmetica.toFixed(
          2
        )}.`
      );
    } else {
      console.log(`Entre com um dado válido!`);
    }
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
