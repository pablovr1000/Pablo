// var tituloDoConteudo = "Teste";
// let tituloDois = "Oi";

// //Variáveis Constantes
// const duracaoMax = "12 meses";

// // String "Trybe"

// // Number 100, 200, 2.2

// // Boolean = True or False


// //String
// var nomeEstudate = "Ana";

// //Boolean
// var aprovada = true;

// //Number
// var turma = 1;
// var salario = 3500.70;

// //Tipo de dado
// typeof true;
// typeof 1;
// typeof "Ana";
// typeof salario;
// //---------------------------------------------------//
// //Operadores
// // + adição
// // - substração
// // / divisão
// // * multiplicação
// // ** potencia
// // % resto de uma divisão

// //Comparação
// // Maior >
// // Maior ou igual >=
// // Menor <
// // Menor ou igual <=
// // Igualdade ===
// // Desigualdade !==

// //Lógico
// // E &&
// // Ou ||

// //Condicionais
// //if
// //else
// //else if


// //Adioncionar elemento em uma array = push Exemplo: listaDeNome.push("José")'
// //Verificar tamanho do array = listaDeNomes.length

// //for



// if (anoDeNascimento < 1946) {
//     resultado = "Geração silenciosa"; 
// } else if (anoDeNascimento > 1996) {
//     resultado = "Geração Z";
// } else {
//     if (anoDeNascimento > 1964) {
//       if (anoDeNascimento > 1980){
//           resultado = "Millennials";
//       } else {
//           resultado = "Geração X";
//       }
//   } else {
//       resultado = "Boomers";
//   }
// }


// //função = function nomeDaFuncao(param1, param2) {
// //    return param1, param2;
// //}
// //nomeDaFuncao (10, 20)


function teste(n) {
    var palavra = "";
    for (var cont = 0; cont < n; cont++) {
        palavra = palavra+"*";
    }
    for (var cont2 =0; cont2 < n; cont2++){
        console.log(palavra);
    }
}


//------------------------------------------

function buscaNumeroPrimos(n) {
    //não altere a linha acima
    
    /*
     * Nas linhas a seguir, escreva um código que encontre todos
     * os números primos entre 0 e n e coloque-os num array chamado
     * `numerosPrimos`(você deve criar esse array)
     */
        
        var numerosPrimos = [0];
        for(cont = 0; cont < n; cont++){
            console.log("entrou no for");
            var controle = 0;
            var controle2 = 1;
            var controle3 = 0;
            for (cont2 = 0; cont2 = n; cont++){
                console.log("entrou no segundo for")
                if (n % controle2 === 0){
                    console.log("entrou no if 1");
                    controle3++;
                }
                controle2++;
            }
            if (controle3 === 2){
                console.log("entrou no if 2");
                if (n % 1 === 0 && n % n === 0){
                console.log("entrou no if 3");   
                numerosPrimos[controle] = n;
                controle++;    
                }
            }
        }
        
        
    
    //não altere as linhas abaixo
      return numerosPrimos;
    }






    function buscaNumeroPrimos(n) {
        //não altere a linha acima
        
        /*
         * Nas linhas a seguir, escreva um código que encontre todos
         * os números primos entre 0 e n e coloque-os num array chamado
         * `numerosPrimos`(você deve criar esse array)
         */
            
            var numerosPrimos = [0];
            for(cont = 0; cont < n; cont++){
                var controle = 0;
                console.log("entrou no for");
                if (n % 1 === 0 && n % n === 0){
                    for (cont2 = 2; cont2 = n-1; cont2++){
                        console.log("entrou no for 2");
                        if(n % cont2 === 0){
                            console.log("entrou no if 2");
                            break;
                        }
                    }
                    console.log("entrou no if 1");   
                    numerosPrimos[controle] = n;
                    controle++;
                }
            }
            
            
        
        //não altere as linhas abaixo
          return numerosPrimos;
    }