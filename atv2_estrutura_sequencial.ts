/*Fazer um programa para ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o
código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Calcule e mostre o valor a ser pago.*/


let teclado = require (`prompt-sync`)();

let codigo1: number = parseInt(teclado(`Digite o código da peça 1: `));
let quantidade1: number = parseInt(teclado(`Digite o número de peças 1: `));
let valorUnitario1: number = parseInt(teclado(` Digite o valor unitário da peça 1`));

let codigo2: number = parseInt(teclado(`Digite o código da peça 2: `));
let quantidade2: number = parseInt(teclado(`Digite o número de peças 2: `));
let valorUnitario2: number = parseInt(teclado(`Digite o valor unitário da peça 2: `));


let total = (quantidade1 * valorUnitario1) + (quantidade2 * valorUnitario2);

console.log(`VALOR A PAGAR: R$ ${total}`);

