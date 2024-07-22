//Questão 08
let numb1: string | null = prompt(`Entre com o primeiro número: `);
if (numb1 !== null && !isNaN(Number(numb1)) && numb1.trim() !== ``) {
  let numb2: string | null = prompt(`Entre com o segundo número: `);
  if (numb2 !== null && !isNaN(Number(numb2)) && numb2.trim() !== ``) {
    let numb3: string | null = prompt(`Entre com o terceiro número: `);
    if (numb3 !== null && !isNaN(Number(numb3)) && numb3.trim() !== ``) {
      let numb11: number = Number(numb1);
      let numb21: number = Number(numb2);
      let numb31: number = Number(numb3);
      let ordem: number[] = [numb11, numb21, numb31];
      ordem.sort((a, b) => a - b);
      console.log(`Os números em ordem crescente são: ${ordem}`);
    } else {
      console.log(`Entre com um dado válido!`);
    }
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
