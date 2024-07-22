//Questão 21
let metro: string | null = prompt(`Entre com um valor em metros: `);
try {
  if (metro !== null && !isNaN(Number(metro)) && metro.trim() !== ``) {
    let metro1: number = Number(metro);
    console.log(`${metro1} m corresponde a ${metro1 * 100} cm.`);
    console.log(`${metro1} m corresponde a ${metro1 * 1000} mm.`);
    console.log(`${metro1} m corresponde a ${metro1 / 1000} km.`);
  } else {
    throw new Error();
  }
} catch (error) {
  console.log(`Entre com um dado válido!`);
}
