function limpiarRut(rut){  // 16.067.173

    var rutLimpio = "";

    for (let x = rut.length - 1; x >= 0; x--) {
        
        if(rut[x] != ".") 
        {
            rutLimpio = rut[x] + rutLimpio;
        }

    }

    return rutLimpio; // 16067173
}

function calcularDigitoVerificador(rut) {

    rut = limpiarRut(rut);

    console.log("VALIDANDO EL RUT: " + rut);

    let factor = 2;
    let sumatoria = 0;

    for (let x = rut.length - 1; x >= 0; x--) {

        let multiplicacion = rut[x] * factor;

        sumatoria += multiplicacion;

        //console.log(rut[x] + " * " + factor + " = " + multiplicacion);

        factor++;
        if (factor == 8) {
            factor = 2;
        }

    }

    //console.log("LO SUMADO ES: " + sumatoria);
    let sobrante = sumatoria % 11; // %  devuelve el resto de una division. 
    //console.log("EL RESTO DIVIDIDO POR 11 ES: " + sobrante);

    let digitoVerificador = 11 - sobrante;

    if (digitoVerificador == 11) {
        digitoVerificador = 0;
    } else if (digitoVerificador == 10) {
        digitoVerificador = "K";
    }

    console.log("EL DIGITO VERIFICADOR ES: " + digitoVerificador)



    return digitoVerificador;
}





// let rut2 = "19140730"; // DEBE DAR K
// let rut = "15020990"; // DEBE DAR 0

// console.log("TU RUT COMPLETO ES: " + rut + "-" + calcularDigitoVerificador(rut));
// console.log("TU RUT COMPLETO ES: " + rut2 + "-" + calcularDigitoVerificador(rut2));

// console.log("TU RUT COMPLETO ES: " + "16067173" + "-" + calcularDigitoVerificador("16067173"));

