//Questão 14
let numer: string | null = prompt(`Entre com um número inteiro entre 1 e 5: `);
if (numer !== null && !isNaN(Number(numer)) && numer.trim() !== ``) {
  let numer1: number = Number(numer);
  if (numer1 >= 1 && numer1 <= 5) {
    switch (numer1) {
      case 1:
        console.log(
          `O número digitado indica um desempenho muito insuficiente.`
        );
        break;
      case 2:
        console.log(`O número digitado indica um desempenho insuficiente.`);
        break;
      case 3:
        console.log(`O número digitado indica um desempenho regular.`);
        break;
      case 4:
        console.log(`O número digitado indica um desempenho bom.`);
        break;
      case 5:
        console.log(`O número digitado indica um desempenho muito bom.`);
        break;
    }
  } else {
    console.log(
      `Infelizmente, você digitou um número fora do intervalo especificado.`
    );
  }
} else {
  console.log(`Entre com um dado válido!`);
}
