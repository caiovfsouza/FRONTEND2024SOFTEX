//Questão 20
let d1: string | null = prompt(`Entre com o nome: `);
if (d1 !== null && isNaN(Number(d1)) && d1.trim() !== ``) {
  let d2: string | null = prompt(`Entre com a idade`);
  try {
    if (d2 !== null && !isNaN(Number(d2)) && d2.trim() !== ``) {
      let d21: number = parseInt(d2);
      if (Number.isInteger(d21) && d21 > 0 && d2 === d21.toString()) {
        console.log(`Você se chama ${d1} e tem ${d2} anos.`);
      } else {
        throw new Error();
      }
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(
      `Idade inválida... Tente novamente com um número inteiro positivo!`
    );
  }
} else {
  console.log(`Entre com um dado válido!`);
}
