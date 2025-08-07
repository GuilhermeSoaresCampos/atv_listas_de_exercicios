/*Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes. Escreva
um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel
4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até
que seja válido). O programa será encerrado quando o código informado for o número 4. Deve ser escrito a
mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, conforme
exemplo.*/



let teclado = require('prompt-sync')();

let alcool = 0;
let gasolina = 0;
let diesel = 0;
let codigo = 0;

while (codigo != 4) {
    codigo = parseInt(teclado ('Informe o código do combustível (1-Álcool, 2-Gasolina, 3-Diesel, 4-Fim): '));

    if (codigo === 1) {
        alcool++;
    } else if (codigo === 2) {
        gasolina++;
    } else if (codigo === 3) {
        diesel++;
    } else {
        console.log('Código inválido! Tente novamente.');
    }
}

console.log('MUITO OBRIGADO');
console.log(`Álcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);