/*Fazer um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por
hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas
decimais.*/

let teclado = require('prompt-sync')();

let numeroFuncionario = parseInt(teclado("Digite o número do funcionário:"));
let horasTrabalhadas = parseInt(teclado("Digite o número de horas trabalhadas:"));  
let valorPorHora = parseFloat(teclado("Digite o valor que recebe por hora:"));

let salario = horasTrabalhadas * valorPorHora;

console.log(`NÚMERO = ${numeroFuncionario}`);

console.log(`SALÁRIO = R$ ${salario}`);