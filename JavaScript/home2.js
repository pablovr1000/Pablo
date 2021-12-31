function contarParesPequenos(a, b, k) {
    var pequeno = 0;
    var tamanhoArray = a.length-1;
    var numeroStr = "";
    var numero2Str = "";
    var numero = "";
    for(var cont = 0; cont < a.length; cont++) {
        numeroStr = a[cont].toString();
        numero2Str = b[tamanhoArray].toString();
        numero = numero.concat(numeroStr, numero2Str);
        if (numero < k){
            pequeno++;
        } else {
            
        }
        tamanhoArray--;
        numero = "";
    }
    return pequeno;
}




contarParesPequenos([1, 2, 3], [1, 2 ,3], 31);