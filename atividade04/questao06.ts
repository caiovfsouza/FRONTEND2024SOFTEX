//Questão 06
let p1: string | null = prompt(`Entre com o nome da primeira pessoa: `);
if (p1 !== null && isNaN(Number(p1)) && p1.trim() !== ``) {
  let p2: string | null = prompt(`Entre com o nome da segunda pessoa: `);
  if (p2 !== null && isNaN(Number(p2)) && p2.trim() !== ``) {
    if (p1.length > p2.length) {
      console.log(`${p1} possui o maior número de caracteres.`);
    } else if (p2.length > p1.length) {
      console.log(`${p2} possui o maior número de caracteres.`);
    } else {
      console.log(`${p1} e ${p2} possuem o mesmo número de caracteres.`);
    }
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
