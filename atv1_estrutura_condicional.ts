/*1-Fazer um programa para ler um número inteiro, e depois dizer se este número é negativo ou não.*/




let teclado = require (`prompt-sync`)();

let numero: number = parseInt(teclado(`Digite um número inteiro: `));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

if (numero < 0) {
    console.log("O número é nagativo.");
} else {
    console.log("O número é positivo.");
}



