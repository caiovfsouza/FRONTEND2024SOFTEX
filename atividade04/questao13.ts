//Questão 13
let d: string | null = prompt(`Entre com o nome do dia da semana: `);
if (d !== null && isNaN(Number(d)) && d.trim() !== ``) {
  switch (d.toLowerCase()) {
    case `segunda`:
    case `segunda-feira`:
      console.log(`Segunda-feira é um dia útil.`);
      break;
    case `terça`:
    case `terça-feira`:
      console.log(`Terça-feira é um dia útil.`);
      break;
    case `quarta`:
    case `quarta-feira`:
      console.log(`Quarta-feira é um dia útil.`);
      break;
    case `quinta`:
    case `quinta-feira`:
      console.log(`Quinta-feira é um dia útil.`);
      break;
    case `sexta`:
    case `sexta-feira`:
      console.log(`Sexta-feira é um dia útil.`);
      break;
    case `sábado`:
      console.log(`Sábado é um fim de semana.`);
      break;
    case `domingo`:
      console.log(`Domingo é um fim de semana.`);
      break;
    default:
      console.log(`${d} não é um dia da semana.`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
