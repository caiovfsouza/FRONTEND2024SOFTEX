//Questão 35
let baseTriangulo: string | null = prompt(`Entre com a base do triângulo: `);
if (
  baseTriangulo !== null &&
  !isNaN(Number(baseTriangulo)) &&
  baseTriangulo.trim() !== ``
) {
  let alturaTriangulo: string | null = prompt(
    `Entre com a altura do triângulo: `
  );
  if (
    alturaTriangulo !== null &&
    !isNaN(Number(alturaTriangulo)) &&
    alturaTriangulo.trim() !== ``
  ) {
    let baseTriangulo1: number = Number(baseTriangulo);
    let alturaTriangulo1: number = Number(alturaTriangulo);

    let areaDoTriangulo: number = (baseTriangulo1 * alturaTriangulo1) / 2;
    console.log(`Á área do triângulo é ${areaDoTriangulo.toFixed(2)}.`);
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
