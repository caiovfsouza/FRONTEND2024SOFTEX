//Questão 03
let nu1: string | null = prompt(`Entre com o primeiro número inteiro: `);
if (nu1 !== null && !isNaN(Number(nu1)) && nu1.trim() !== ``) {
  let nu2: string | null = prompt(`Entre com o segundo número inteiro: `);
  if (nu2 !== null && !isNaN(Number(nu2)) && nu2.trim() !== ``) {
    let nu11: number = Number(nu1);
    let nu21: number = Number(nu2);
    if (nu11 > nu21) {
      console.log(`${nu11} foi o maior número digitado.`);
    } else if (nu11 < nu21) {
      console.log(`${nu21} foi o maior número digitado.`);
    } else {
      console.log(`Os números digitados são iguais.`);
    }
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
