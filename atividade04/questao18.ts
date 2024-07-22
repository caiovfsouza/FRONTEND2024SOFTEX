//Questão 18
let eCivil: string | null = prompt(`Entre com o seu estado civil: `);
if (eCivil !== null && isNaN(Number(eCivil)) && eCivil.trim() !== ``) {
  switch (eCivil.toLowerCase()) {
    case `solteiro`:
      console.log(`Você é solteiro.`);
      break;
    case `casado`:
      console.log(`Você é casado.`);
      break;
    case `divorciado`:
      console.log(`Você é divorciado.`);
      break;
    case `viúvo`:
      console.log(`Você é viúvo.`);
      break;
    default:
      console.log(`Estado civil inválido... Tente novamente.`);
      break;
  }
} else {
  console.log(`Entre com um dado válido!`);
}
