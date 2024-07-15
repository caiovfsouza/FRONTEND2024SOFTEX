//Questão 39
let idadeUsuario: string | null = prompt(`Entre com a sua idade: `);
if (
  idadeUsuario !== null &&
  !isNaN(Number(idadeUsuario)) &&
  idadeUsuario.trim() !== ``
) {
  let idadeUsuario1: number = Number(idadeUsuario);
  let mesesUsuario: number = idadeUsuario1 * 12;
  let diasUsuario: number = idadeUsuario1 * 365;
  console.log(`Você já viveu ${mesesUsuario} meses e ${diasUsuario} dias.`);
} else {
  console.log(`Entre com um dado válido!`);
}
