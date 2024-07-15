//Questão 05
let nom: string | null = prompt(`Entre com o seu nome: `);
if (nom !== null && nom.trim() !== ``) {
  let mensagem: string = `Seja bem-vindo(a), ` + nom + `.`;
  console.log(mensagem);
} else {
  console.log(`Entre com um dado válido!`);
}
