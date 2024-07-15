//Questão 20
let nomeUsuario: string | null = prompt(`Entre com o seu nome: `);
if (nomeUsuario !== null && nomeUsuario.trim() !== ``) {
  if (nomeUsuario.length > 5) {
    console.log(`Seu nome contém mais de cinco caracteres.`);
  } else if (nomeUsuario.length === 5) {
    console.log(`Seu nome contém cinco caracteres.`);
  } else {
    console.log(`Seu nome contém menos de cinco caracteres.`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
