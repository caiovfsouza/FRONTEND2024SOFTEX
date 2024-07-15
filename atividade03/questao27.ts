//Questão 27
let data: string | null = prompt(
  `Entre com uma data no formato "dd/mm/aaaa": `
);
if (data !== null && data.trim() !== ``) {
  let pedaco: string[] = data.split(`/`);
  if (pedaco.length === 3) {
    let dia: number = Number(pedaco[0]);
    let mes: number = Number(pedaco[1]);
    let ano: number = Number(pedaco[2]);

    if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
      console.log(`Dia: ${dia}\nMês: ${mes}\nAno: ${ano}`);
    } else {
      console.log(`Infelizmente a data inserida contém valores inválidos!`);
    }
  } else {
    console.log(
      `Formato de data inválido! Por favor, entre com uma data no formato "dd/mm/aaaa".`
    );
  }
} else {
  console.log(`Entre com uma data válida!`);
}
