//Questão 16
let nDec: string | null = prompt(`Entre com um número decimal: `);
try {
  if (nDec !== null && !isNaN(Number(nDec)) && nDec.trim() !== ``) {
    let nDec1: number = Number(nDec);
    console.log(
      `O inteiro mais próximo de ${Number(nDec)} é ${Math.round(nDec1)}.`
    );
  } else {
    throw new Error();
  }
} catch (error) {
  console.log(`Entre com um dado válido!`);
}
