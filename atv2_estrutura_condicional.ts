/*2-Fazer um programa para ler um número inteiro e dizer se este número é par ou ímpar.*/

let teclado = require (`prompt-sync`)();

let numero: number = parseInt(teclado(`Digite um número inteiro: `));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

if (numero % 2 == 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}