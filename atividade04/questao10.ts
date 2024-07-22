//Questão 10
let mes: string | null = prompt(`Entre com um número entre 1 e 12: `);
if (mes !== null && !isNaN(Number(mes)) && mes.trim() !== ``) {
  let mes1: number = Number(mes);
  if (mes1 >= 1 && mes1 <= 12) {
    switch (mes1) {
      case 1:
        console.log(`O mês digitado foi Janeiro.`);
        break;
      case 2:
        console.log(`O mês digitado foi Fevereiro.`);
        break;
      case 3:
        console.log(`O mês digitado foi Março.`);
        break;
      case 4:
        console.log(`O mês digitado foi Abril.`);
        break;
      case 5:
        console.log(`O mês digitado foi Maio.`);
        break;
      case 6:
        console.log(`O mês digitado foi Junho.`);
        break;
      case 7:
        console.log(`O mês digitado foi Julho.`);
        break;
      case 8:
        console.log(`O mês digitado foi Agosto.`);
        break;
      case 9:
        console.log(`O mês digitado foi Setembro.`);
        break;
      case 10:
        console.log(`O mês digitado foi Outubro.`);
        break;
      case 11:
        console.log(`O mês digitado foi Novembro.`);
        break;
      case 12:
        console.log(`O mês digitado foi Dezembro.`);
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
