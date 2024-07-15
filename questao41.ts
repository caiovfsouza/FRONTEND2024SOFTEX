//Questão 41
let dec: string | null = prompt(`Entre com um número decimal: `);
if (dec !== null && !isNaN(Number(dec)) && dec.trim() !== ``) {
  let dec1: number = Number(dec);
  console.log(
    `O número inteiro mais próximo de ${dec1} é ${Math.round(dec1)}.`
  );
} else {
  console.log(`Entre com um dado válido!`);
}
