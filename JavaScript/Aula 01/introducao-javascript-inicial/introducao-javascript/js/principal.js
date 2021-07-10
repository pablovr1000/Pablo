var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValido = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso Inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido";
}

if(altura <= 0 || altura >= 3.00){
    console.log("Altura Inválido");
    alturaEhValido = false;
    tdImc.textContent = "Altura Inválido";
}

if (alturaEhValido && pesoEhValido){
    var imc = peso / (altura*altura);
    tdImc.textContent = imc;
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}

// console.log(paciente);
// console.log(tdPeso);
// console.log(peso);
// console.log(tdAltura);
// console.log(altura);

//console.log(imc);

