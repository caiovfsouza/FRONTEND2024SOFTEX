//Questão 37
let baseRetangulo: string | null = prompt(`Entre com a base do retângulo: `);
if (
  baseRetangulo !== null &&
  !isNaN(Number(baseRetangulo)) &&
  baseRetangulo.trim() !== ``
) {
  let alturaRetangulo: string | null = prompt(
    `Entre com a altura do retângulo: `
  );
  if (
    alturaRetangulo !== null &&
    !isNaN(Number(alturaRetangulo)) &&
    alturaRetangulo.trim() !== ``
  ) {
    let baseRetangulo1: number = Number(baseRetangulo);
    let alturaRetangulo1: number = Number(alturaRetangulo);

    let perimetroRetangulo: number = (baseRetangulo1 + alturaRetangulo1) * 2;
    console.log(`O perímetro do retângulo é ${perimetroRetangulo.toFixed(2)}`);
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
