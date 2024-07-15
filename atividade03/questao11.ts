//Questão 11
let nome: string | null = prompt(`Entre com seu nome: `);
if (nome !== null && nome.trim() !== ``) {
  let sobrenome: string | null = prompt(`Entre com seu sobrenome: `);
  if (sobrenome !== null && sobrenome.trim() !== ``) {
    let nomeCompleto: string = nome + ` ` + sobrenome;
    console.log(`Seu nome completo é ${nomeCompleto}.`);
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
