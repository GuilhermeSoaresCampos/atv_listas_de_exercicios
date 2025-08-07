/*Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema
cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo
menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).*/


let teclado = require('prompt-sync')();

let x = 0;
let y = 0;      

while (true) {
    x = parseFloat(teclado('Digite a coordenada X: '));
    y = parseFloat(teclado('Digite a coordenada Y: '));

    if (x == 0 || y == 0) {
         
    }

    if (x > 0 && y > 0) {
        console.log('Primeiro Quadrante');
    } else if (x < 0 && y > 0) {
        console.log('Segundo Quadrante');
    } else if (x < 0 && y < 0) {
        console.log('Terceiro Quadrante');
    } else if (x > 0 && y < 0) {
        console.log('Quarto Quadrante');
    }
}
