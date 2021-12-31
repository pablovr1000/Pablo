'use strict';
/*
 * Complete a função 'converteTemperatura' abaixo.
 *
 * O retorno da função é uma variável do tipo FLOAT.
 * Os parâmetros da função são os seguintes:
 *  1. FLOAT temperatura
 *  2. STRING escalaOrigem
 *  3. STRING escalaDesejada
 */

function converteTemperatura(temperatura, escalaOrigem, escalaDesejada) {
    // Escreva seu código aqui
    if (escalaOrigem === "celsius" && escalaDesejada === "kelvin"){
        temperatura = temperatura + 273.15;
    } else if (escalaOrigem === "kelvin" && escalaDesejada === "celsius") {
        temperatura = temperatura - 273.15;
    } else if (escalaOrigem === "celsius" && escalaDesejada === "fahrenheit"){
        temperatura = (temperatura*1.8) + 32;
    } else if (escalaOrigem === "fahrenheit" && escalaDesejada === "celsius"){
        temperatura = (temperatura-32) / 1.8;
    } else if (escalaOrigem === "kelvin" && escalaDesejada === "fahrenheit"){
        temperatura = temperatura - 273.15;
        temperatura = (temperatura*1.8) + 32;
    } else if (escalaOrigem === "fahrenheit" && escalaDesejada === "kelvin"){
        temperatura = (temperatura-32) / 1.8;
        temperatura = temperatura + 273.15;
    }
    return temperatura;
}

function main() {
    const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
}