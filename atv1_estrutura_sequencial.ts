/*1-Faça um programa para ler dois valores inteiros, e depois mostrar na tela a soma desses números com uma
mensagem explicativa, conforme exemplos.*/




let teclado = require (`prompt-sync`)();

let a: number = parseInt(teclado(`Digite o primeiro número: `));
let b: number = parseInt(teclado(`Digite o segundo número: `));

const soma: number = a + b;

console.log(`A soma entre ${a} e ${b} é igual a ${soma}.`);
