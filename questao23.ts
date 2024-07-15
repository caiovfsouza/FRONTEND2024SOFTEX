//Questão 23
let cidade: string | null = prompt(`Entre com o nome da sua cidade: `);
if (cidade !== null && cidade.trim() !== ``) {
  if (cidade.charAt(0).toLowerCase() === `r`) {
    console.log(`Que legal!! ${cidade} começa com a letra "R".`);
  } else {
    console.log(`Que pena!! ${cidade} não começa com a letra "R".`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
