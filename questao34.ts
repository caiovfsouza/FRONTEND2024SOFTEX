//Questão 34
let n1: string | null = prompt(`Entre com o primeiro número inteiro: `);
if (n1 !== null && !isNaN(Number(n1)) && n1.trim() !== ``) {
  let n2: string | null = prompt(`Entre com o segundo número inteiro: `);
  if (n2 !== null && !isNaN(Number(n2)) && n2.trim() !== ``) {
    let n11: number = Number(n1);
    let n21: number = Number(n2);

    let soma1: number = n11 + n21;
    let diferenca1: number = n11 - n21;
    let produto1: number = n11 * n21;
    let quociente1: number = n11 / n21;

    console.log(`${n11} + ${n21} = ${soma1}`);
    console.log(`${n11} - ${n21} = ${diferenca1}`);
    console.log(`${n11} * ${n21} = ${produto1}`);
    if (n21 !== 0) {
      console.log(`${n11} / ${n21} = ${quociente1}`);
    } else {
      console.log(`Nenhum número pode ser dividido por zero!`);
    }
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
