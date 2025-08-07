/*Ler um valor N. Calcular e escrever seu respectivo fatorial. Fatorial de N = N * (N-1) * (N-2) * (N-3) * ... * 1.
Lembrando que, por definição, fatorial de 0 é 1.*/

let teclado = require('prompt-sync')();
let n: number = Number(teclado('Digite um número: '));

if (n < 0) {
    console.log('Fatorial não é definido para números negativos');
} else {
    let fatorial: number = 1;
    for (let i = n; i > 1; i--) {
        fatorial = i;
    }
    console.log(`Fatorial de ${n} é: ${fatorial}`);
}
