//Questão 02
let i: string | null = prompt(`Entre com a sua idade:`);
if (i !== null && !isNaN(Number(i)) && i.trim() !== ``) {
  let i1: number = Number(i);
  if (i1 >= 18) {
    console.log(`Você é maior de idade.`);
  } else {
    console.log(`Você é menor de idade.`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
