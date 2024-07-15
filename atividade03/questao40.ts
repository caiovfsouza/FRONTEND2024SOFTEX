//Questão 40
let valorReal: string | null = prompt(`Entre com um valor em reais: `);
if (
  valorReal !== null &&
  !isNaN(Number(valorReal)) &&
  valorReal.trim() !== ``
) {
  let valorReal1: number = Number(valorReal);
  let cotacaoDolar: number = 5.43;
  let valorDolar: number = valorReal1 / cotacaoDolar;
  console.log(
    `${valorReal1.toLocaleString(`pt-BR`, {
      style: `currency`,
      currency: `BRL`,
    })} corresponde a ${valorDolar.toLocaleString(`en-US`, {
      style: `currency`,
      currency: `USD`,
    })}`
  );
} else {
  console.log(`Entre com um dado válido!`);
}
