//Questão 42
let nume1: string | null = prompt(`Entre com o primeiro número inteiro: `);
if (nume1 !== null && !isNaN(Number(nume1)) && nume1.trim() !== ``) {
  let nume2: string | null = prompt(`Entre com o segundo número inteiro: `);
  if (nume2 !== null && !isNaN(Number(nume2)) && nume2.trim() !== ``) {
    let nume3: string | null = prompt(`Entre com o terceiro número inteiro: `);
    if (nume3 !== null && !isNaN(Number(nume3)) && nume3.trim() !== ``) {
      let nume11: number = Number(nume1);
      let nume12: number = Number(nume2);
      let nume13: number = Number(nume3);

      let operacao: number = (nume11 + nume12) * nume13;
      console.log(
        `O resultado de (${nume11} + ${nume12}) * ${nume13} é igual a ${operacao}.`
      );
    } else {
      console.log(`Entre com um dado válido!`);
    }
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
