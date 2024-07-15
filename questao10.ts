//Questão 10
let dataNascimento: string | null = prompt(`Entre com o ano de nascimento: `);
if (
  dataNascimento !== null &&
  !isNaN(Number(dataNascimento)) &&
  dataNascimento.trim() !== ``
) {
  let dataNascimento1: number = Number(dataNascimento);

  let idade: number = new Date().getFullYear() - dataNascimento1;
  console.log(`Você tem ${idade} anos de idade.`);
} else {
  console.log(`Entre com um número válido!`);
}
