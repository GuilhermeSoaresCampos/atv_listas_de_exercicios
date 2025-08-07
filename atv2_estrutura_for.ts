/*Ler um número inteiro N e calcular todos os seus divisores.*/

let teclado = require('prompt-sync')();
let n: number = 0;

n = Number(teclado('Digite um número inteiro: '));

console.log(`Divisores de ${n}:`);
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
    }
}