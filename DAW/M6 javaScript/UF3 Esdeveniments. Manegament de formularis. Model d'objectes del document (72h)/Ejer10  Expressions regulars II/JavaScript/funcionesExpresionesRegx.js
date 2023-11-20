/**
 * Función que llama a la función validaRegExt y validaFrase. 
 * @returns True si los dos campos son correctos o false si uno de los dos son incorrectos
 */
function validar() {
    // Creo dos boleas con lo que nos devuelve las funciones
    var validoRegExt = validaRegExt();//valdrá true o false dependiendo de lo que retorne la función

    // Luego valida el campo Frase
    var validoFrase = validaFrase();

    if (validoRegExt && validoFrase) {//si las dos son true entra y retorna true si no retorna false 
        return true;
    } else {
        return false;
    }

}

/**
 * Función que verifica el campo regExt esta vacío 
 * @returns True si  regExt es correcto o false si no lo es
 */
function validaRegExt() {


    //capturar la expresion regext
    //defino las expresiones regulares RegExt
    var regexCampoVacio = /^\s*$/;//verificar compo vacío

    var regExt = document.getElementById("fraseRegExt").value;


    if (regexCampoVacio.test(regExt)) {//si esta vacío 
        console.log('validaRegExt retorna  false');
        return false;
    } else {
        console.log('validaRegExt retorna  true');
        return true;
    }


}
/**
 * Capturamos los inputs de frase Regext y frase a verificar
 * comparamos la frase con la expresión regular si es correcta retorna true si no false
 * @returns 
 */
function validaFrase() {

    //expresión regula para probar /^([0-9]+)([0-9]+)$/   solo números 656456

    //capturo
    var regExtEntrada = document.getElementById("fraseRegExt").value;
    var frase = document.getElementById("fraseVerificar").value;

    //new RegExp(); añade por defecto al inicio y al final /expresión/ Para que no se
    //dupliquen tenemos que quitarlas '/' de la expresión que nos pasan con la función slice();
    
    var regextSinBarras = regExtEntrada.slice(1, -1);

    //creamos la expresión regular con new RegExp();
    var regExp = new RegExp(regextSinBarras);

    //Pasamos frase y regex con la función .test();
    if (regExp.test(frase)) {//verificamos que la frase sea valida con la expresión

        console.log('validaFrase retorna  true');
        return true;

    } else {
        console.log('validaFrase retorna  false');
        return false;
    }
}


/**
 * Función que activa o desactiva los pop up  de bien o mal
 */
function fraseIncorrecta() {
    var logoError = document.getElementById("logoError");
    var textoError = document.getElementById("textoError");

    logoError.style.display = 'block';
    textoError.style.display = 'block';
    var logoCorrecto = document.getElementById("locoCorrecto");
    var textoCorrecto = document.getElementById("fraseCorrecta");
    logoCorrecto.style.display = 'none';
    textoCorrecto.style.display = 'none';

}
/**
 * Función que activa o desactiva los pop up  de bien o mal
 */
function fraseCorrecta() {
    var logoCorrecto = document.getElementById("locoCorrecto");
    var textoCorrecto = document.getElementById("fraseCorrecta");
    logoCorrecto.style.display = 'block';
    textoCorrecto.style.display = 'block';
    var logoError = document.getElementById("logoError");
    var textoError = document.getElementById("textoError");
    logoError.style.display = 'none';
    textoError.style.display = 'none';
}
