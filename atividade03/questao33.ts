//Questão 33
let email: string | null = prompt(`Entre com o endereço de e-mail: `);
if (email !== null && email.trim() !== ``) {
  console.log(`O e-mail ${email} foi cadastrado com sucesso!`);
} else {
  console.log(`Entre com um dado válido!`);
}
