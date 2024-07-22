//Questão 15
let di: string | null = prompt(`Entre com um número inteiro entre 1 e 7: `);
if (di !== null && !isNaN(Number(di)) && di.trim() !== ``) {
  let di1: number = Number(di);
  if (di1 >= 1 && di1 <= 7) {
    switch (di1) {
      case 1:
        console.log(
          `O dia da semana correspondente ao número ${di1} é: Domingo.`
        );
        break;
      case 2:
        console.log(
          `O dia da semana correspondente ao número ${di1} é: Segunda-feira.`
        );
        break;
      case 3:
        console.log(
          `O dia da semana correspondente ao número ${di1} é: Terça-feira.`
        );
        break;
      case 4:
        console.log(
          `O dia da semana correspondente ao número ${di1} é: Quarta-feira.`
        );
        break;
      case 5:
        console.log(
          `O dia da semana correspondente ao número ${di1} é: Quinta-feira.`
        );
        break;
      case 6:
        console.log(
          `O dia da semana correspondente ao número ${di1} é: Sexta-feira.`
        );
        break;
      case 7:
        console.log(
          `O dia da semana correspondente ao número ${di1} é: Sábado.`
        );
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
