//Questão 07
let numeroInteiro: string | null = prompt(`Entre com um número inteiro: `);
if (
  numeroInteiro !== null &&
  !isNaN(Number(numeroInteiro)) &&
  numeroInteiro.trim() !== ``
) {
  let numeroInteiro1: number = parseInt(numeroInteiro);
  let numeroDecimal: number = parseFloat(numeroInteiro);

  console.log(`Número inteiro: ${numeroInteiro1}.`);
  console.log(`Número decimal: ${numeroDecimal}.`);
} else {
  console.log(`Entre com um número válido!`);
}
