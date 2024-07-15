//Questão 21
let estadoCivil: string | null = prompt(`Entre com seu estado civil: `);
if (estadoCivil !== null && estadoCivil.trim() !== ``) {
  if (estadoCivil.toLowerCase() === `solteiro`) {
    console.log(`Você é solteiro(a).`);
  } else if (estadoCivil.toLowerCase() === `casado`) {
    console.log(`Você é casado(a).`);
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
