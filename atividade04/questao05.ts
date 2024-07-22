//Questão 05
let nota1: string | null = prompt(`Entre com a primeira nota: `);
if (nota1 !== null && !isNaN(Number(nota1)) && nota1.trim() !== ``) {
  let nota2: string | null = prompt(`Entre com a segunda nota: `);
  if (nota2 !== null && !isNaN(Number(nota2)) && nota2.trim() !== ``) {
    let nota3: string | null = prompt(`Entre com a terceira nota: `);
    if (nota3 !== null && !isNaN(Number(nota3)) && nota3.trim() !== ``) {
      let nota11: number = Number(nota1);
      let nota21: number = Number(nota2);
      let nota31: number = Number(nota3);
      let media: number = (nota11 + nota21 + nota31) / 3;
      if (media >= 7) {
        console.log(
          `A média do aluno foi ${media.toFixed(1)}. O aluno está aprovado!`
        );
      } else {
        console.log(
          `A média do aluno foi ${media.toFixed(1)}. O aluno está reprovado!`
        );
      }
    } else {
      console.log(`Entre com um dado válido!`);
    }
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
