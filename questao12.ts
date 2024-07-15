//Questão 12
let numeros: number[] = [];
let sequencia: string | null = prompt(
  `Entre com uma sequência de números separados por vígula: `
);
if (sequencia !== null && sequencia.trim() !== ``) {
  let partes: string[] = sequencia.split(`,`);
  numeros = partes.map(Number).filter((num) => !isNaN(num));
  console.log(`Foram digitados ${numeros.length} números.`);
} else {
  console.log(`Entre com um dado válido!`);
}
