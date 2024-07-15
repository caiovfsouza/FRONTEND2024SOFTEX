//Questão 36
const PI: number = 3.14159;
let raioCircunferencia: string | null = prompt(
  `Entre com o raio da circunferência: `
);
if (
  raioCircunferencia !== null &&
  !isNaN(Number(raioCircunferencia)) &&
  raioCircunferencia.trim() !== ``
) {
  let raioCircunferencia1: number = Number(raioCircunferencia);
  let perimetroCircunferencia: number = 2 * PI * raioCircunferencia1;
  console.log(
    `O perímetro da circunferência é ${perimetroCircunferencia.toFixed(2)}.`
  );
} else {
  console.log(`Entre com um dado válido!`);
}
