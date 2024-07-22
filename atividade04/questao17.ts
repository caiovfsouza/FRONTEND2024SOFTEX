//Questão 17
let ida: string | null = prompt(`Entre com a sua idade: `);
if (ida !== null && !isNaN(Number(ida)) && ida.trim() !== ``) {
  let ida1 = Number(ida);
  if (ida1 >= 0 && ida1 < 1) {
    console.log(`Você é um bebê!`);
  } else if (ida1 >= 1 && ida1 <= 12) {
    console.log(`Você é uma criança!`);
  } else if (ida1 >= 13 && ida1 <= 18) {
    console.log(`Você é um adolescente!`);
  } else if (ida1 > 18) {
    console.log(`Você é um adulto!`);
  } else {
    console.log(`Idade inválida... Tente novamente!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
