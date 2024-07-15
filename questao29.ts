//Questão 29
let anoNasc: string | null = prompt(`Entre com o seu ano de nascimento: `);
if (anoNasc !== null && !isNaN(Number(anoNasc)) && anoNasc.trim() !== ``) {
  let anoNasc1: number = Number(anoNasc);

  console.log(`Bem-vindo ao nosso programa, nascido em ${anoNasc1}.`);
} else {
  console.log(`Entre com um dado válido!`);
}
