//Questão 11
let sal: string | null = prompt(`Entre com o salário do funcionário: `);
if (sal !== null && !isNaN(Number(sal)) && sal.trim() !== ``) {
  let sal1: number = Number(sal);
  if (sal1 > 1500) {
    sal1 = sal1 * 1.1;
    console.log(
      `Salário com aumento: ${sal1.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`,
      })}`
    );
  } else {
    sal1 = sal1 * 1.15;
    console.log(
      `Salário com aumento: ${sal1.toLocaleString(`pt-BR`, {
        style: `currency`,
        currency: `BRL`,
      })}`
    );
  }
} else {
  console.log(`Entre com um dado válido!`);
}
