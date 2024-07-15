//Questão 31
let nomeProduto: string | null = prompt(`Entre com o nome do produto: `);
if (nomeProduto !== null && nomeProduto.trim() !== ``) {
  let precoProduto: string | null = prompt(`Entre com o preço do produto: `);
  if (
    precoProduto !== null &&
    !isNaN(Number(precoProduto)) &&
    precoProduto.trim() !== ``
  ) {
    let precoProdutoReal: number = Number(precoProduto);
    console.log(`${nomeProduto} - R$ ${precoProdutoReal.toFixed(2)}`);
  } else {
    console.log(`Entre com um dado válido!`);
  }
} else {
  console.log(`Entre com um dado válido!`);
}
