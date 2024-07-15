//Questão 28
let cidade1: string | null = prompt(`Entre com o nome da cidade: `);
if (cidade1 !== null && cidade1.trim() !== ``) {
  let estado1: string | null = prompt(`Entre com o nome do estado: `);
  if (estado1 !== null && estado1.trim() !== ``) {
    console.log(`Você mora em ${cidade1}, ${estado1}.`);
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
