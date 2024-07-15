//Questão 15
let cor: string | null = prompt(`Entre com uma cor: `);
if (cor !== null && cor.trim() !== ``) {
  console.log(`${cor} tem ${cor.length} caracteres.`);
} else {
  console.log(`Entre com um dado válido!`);
}
