//Questão 22
let baseTrianguloR: string | null = prompt(`Entre com a base do triângulo: `);
if (
  baseTrianguloR !== null &&
  !isNaN(Number(baseTrianguloR)) &&
  baseTrianguloR.trim() !== ``
) {
  let alturaTrianguloR: string | null = prompt(
    `Entre com a altura do triângulo: `
  );
  if (
    alturaTrianguloR !== null &&
    !isNaN(Number(alturaTrianguloR)) &&
    alturaTrianguloR.trim() !== ``
  ) {
    let baseTrianguloR1: number = Number(baseTrianguloR);
    let alturaTrianguloR1: number = Number(alturaTrianguloR);

    let areaTriangulo: number = (baseTrianguloR1 * alturaTrianguloR1) / 2;
    console.log(`A área do triângulo retângulo é ${areaTriangulo.toFixed(2)}.`);
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
