//Questão 19
let pNum: string | null = prompt(`Entre com o primeiro número inteiro: `);
if (pNum !== null && !isNaN(Number(pNum)) && pNum.trim() !== ``) {
  let sNum: string | null = prompt(`Entre com o segundo número: `);
  if (sNum !== null && !isNaN(Number(sNum)) && sNum.trim() !== ``) {
    let op: string | null = prompt(
      `Agora escolha uma das opções:\n
      1 - SOMA\n
      2 - SUBTRAÇÃO\n
      3 - MULTIPLICAÇÃO\n
      4 - DIVISÃO`
    );
    if (
      op !== null &&
      !isNaN(Number(op)) &&
      op.trim() !== `` &&
      Number(op) >= 1 &&
      Number(op) <= 4
    ) {
      let pNum1: number = Number(pNum);
      let sNum1: number = Number(sNum);
      let op1: number = Number(op);

      switch (op1) {
        case 1:
          console.log(`Resultado: ${pNum1 + sNum1}`);
          break;
        case 2:
          console.log(`Resultado: ${pNum1 - sNum1}`);
          break;
        case 3:
          console.log(`Resultado: ${pNum1 * sNum1}`);
          break;
        case 4:
          if (sNum1 !== 0) {
            console.log(`Resultado: ${(pNum1 / sNum1).toFixed(2)}`);
          } else {
            console.log(`Nenhum número pode ser divido por zero!`);
          }
          break;
      }
    } else {
      console.log(`Opção inválida... Tente novamente!`);
    }
  } else {
    console.log(`Entre um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
