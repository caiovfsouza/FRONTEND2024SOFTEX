//Questão 13
let nomeAnimal: string | null = prompt(`Entre com o nome de um animal: `);
if (nomeAnimal !== null && nomeAnimal.trim() !== ``) {
  console.log(`O animal digitado foi ${nomeAnimal}.`);
} else {
  console.log(`Entre com um dado válido!`);
}
