//Questão 09
let pe: string | null = prompt(`Entre com o peso: `);
if (pe !== null && !isNaN(Number(pe)) && pe.trim() !== ``) {
  let al: string | null = prompt(`Entre com a altura: `);
  if (al !== null && !isNaN(Number(al)) && al.trim() !== ``) {
    let pe1: number = Number(pe);
    let al1: number = Number(al);
    let imc: number = pe1 / al1 ** 2;
    if (imc < 20) {
      console.log(`Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`);
    } else if (imc >= 20 && imc <= 25) {
      console.log(`Seu IMC é ${imc.toFixed(2)}. Você está com o peso normal.`);
    } else if (imc >= 25.1 && imc <= 30) {
      console.log(`Seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso.`);
    } else if (imc >= 30.1 && imc <= 40) {
      console.log(`Seu IMC é ${imc.toFixed(2)}. Você está obeso(a).`);
    } else {
      console.log(`Seu IMC é ${imc.toFixed(2)}. Você está muito obeso(a).`);
    }
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
