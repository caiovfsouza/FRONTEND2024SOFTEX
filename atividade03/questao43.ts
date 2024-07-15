//Questão 43
let temp: string | null = prompt(
  `Entre com uma temperatura em graus Celsius: `
);
if (temp !== null && !isNaN(Number(temp)) && temp.trim() !== ``) {
  let tempC: number = Number(temp);
  let tempF: number = (Number(tempC) * 9) / 5 + 32;
  console.log(`${tempC}°C é igual a ${tempF}°F.`);
} else {
  console.log(`Entre com um dado válido!`);
}
