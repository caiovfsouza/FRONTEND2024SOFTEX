//Questão 06
let idade: string | null = prompt(`Entre com a sua idade: `);
if (idade !== null && !isNaN(Number(idade)) && idade.trim() !== ``) {
  let idade1: number = Number(idade);
  console.log(`Você tem ${idade1} anos de idade.`);
} else {
  console.log(`Entre com um número válido!`);
}
