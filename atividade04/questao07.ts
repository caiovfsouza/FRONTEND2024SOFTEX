//Questão 07
let vOrC: string | null = prompt(`Entre com uma letra: `);
if (
  vOrC !== null &&
  vOrC.length === 1 &&
  /^[a-zA-z]$/.test(vOrC) &&
  vOrC.trim() !== ``
) {
  if (`aeiou`.includes(vOrC.toLowerCase())) {
    console.log(`A letra digitada é uma vogal.`);
  } else {
    console.log(`A letra digitada é uma consoante.`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
