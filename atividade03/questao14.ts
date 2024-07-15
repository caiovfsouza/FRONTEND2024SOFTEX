//Questão 14
let nomePessoa: string | null = prompt(`Entre com o seu nome: `);
if (nomePessoa !== null && nomePessoa.trim() !== ``) {
  let sobrenomePessoa: string | null = prompt(`Entre com o seu sobrenome: `);
  if (sobrenomePessoa !== null && sobrenomePessoa.trim() !== ``) {
    let nomeCompletoInvertido: string = sobrenomePessoa + ` ` + nomePessoa;
    console.log(`Seu nome completo invertido é ${nomeCompletoInvertido}.`);
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
