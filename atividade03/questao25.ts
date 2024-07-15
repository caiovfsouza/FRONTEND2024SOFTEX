//Questão 25
let decimal: string | null = prompt(`Entre com um número decimal: `);
if (decimal !== null && !isNaN(Number(decimal)) && decimal.trim() !== ``) {
  let decimal1: number = Number(decimal);
  let inteiro: number = parseInt(decimal);

  console.log(`${decimal1} convertido para inteiro fica ${inteiro}.`);
} else {
  console.log(`Entre com um número válido!`);
}
