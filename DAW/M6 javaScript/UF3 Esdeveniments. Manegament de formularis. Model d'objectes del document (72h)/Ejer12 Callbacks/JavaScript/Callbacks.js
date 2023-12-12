


document.addEventListener('DOMContentLoaded', function () {

    //capturamos eventos
        var num1 = document.getElementById('num1');
        var num2 = document.getElementById('num2');
        var selectElement = document.getElementById('select');
        var sumar = document.getElementById('sumar');
        var restar = document.getElementById('restar');
        var dividir = document.getElementById('dividir');
        var multiplicar = document.getElementById('multiplicar');
        var enviar = document.getElementById('enviar');
     
        let operador = '';//donde guardamos un str con sumar o restar etc para pasárselo a la función
    
        sumar.addEventListener('click', function () {//capturo todos los eventos click de los operadores matemáticos
            operador = 'sumar';
        });
    
        restar.addEventListener('click', function () {
            operador = 'restar';
        });
        dividir.addEventListener('click', function () {
            operador = 'dividir';
        });
        multiplicar.addEventListener('click', function () {
            operador = 'multiplicar';
        });
    
        enviar.addEventListener('click', function () {//Capturar el evento cuando se hace click en el botón de enviar
            let eleccionRespuesta = selectElement.value;//guardo que han seleccionado en el select
            
        
            /**llamo a la función resultado que calcula los dos valores con el operador matemático, el resultado se lo paso al collbacs
             * que en la llamada será crear una  función callbacks con un valor dentro 'he puesto resultadoFinal pero podría ser perroVerde
             * ' luego dentro de esta función le pasamos la función que muestra el resultado
             */
            resultado(num1, num2, operador,
            function callbacks(resultadoFinal) {
                mostrarResultado(resultadoFinal, eleccionRespuesta);
            });
        });
              
});
 
/**
 * Función que le pasas los valores 1 y 2, el operador matemático y un callbacks.
 * Captura el valor que le pasas desde el input num1 y num2 luego verifica que no estén vacíos
 * Si no esta vacío se verifica cual es el  operador que nos mandaron y calcula el resultado según su operador.
 * El resultado se le pasa a un callbacks
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} operador 
 * @param {*} callbacks 
 * @returns 
 */   
function resultado(num1,num2,operador,callbacks){
    var valorNum1 = parseInt(num1.value);
     var valorNum2 = parseInt(num2.value);
     var campoVacio = document.getElementById('capoVacio');//capturo
     var menaje = '';
     if (!isNaN(valorNum1) && !isNaN(valorNum2)) {// si esta vacío input 1 o 2
       
   if (operador === 'sumar') {
                    console.log('entro en sumar ');
                    callbacks(valorNum1+valorNum2);          
 } else if (operador === 'restar') {
                    console.log('entro en restar ');
                    callbacks(valorNum1-valorNum2);     
 }else if (operador === 'dividir') {
                    console.log('entro en dividir');
                    callbacks(valorNum1/valorNum2);     
 }else if (operador === 'multiplicar') {
                    console.log('entro en multiplicar ');
                    callbacks(valorNum1*valorNum2);
  }      
     } else {//si esta vacío muestro un menaje de error 2 segundos
        document.getElementById('capoVacio').innerHTML = 'Por favor ingresa números en las inputs';
        //uso un callbacks para que a los dos segundos el menaje desaparezca
        setTimeout(function(){ 
        document.getElementById('capoVacio').innerHTML = '';
    },2000);
       
       
    }
}

/**
 * Función que recíbe el resultado de function resultado() y la elección para mostrar el resultado
 * Dentro captura donde tiene que inyectar el html y verifica cual es la election y muestra el resultado 
 * @param {*} resultado 
 * @param {*} eleccion 
 */
function mostrarResultado(resultado,eleccion){
    var mostrar = document.getElementById('resultado');//capturo
    if (eleccion === 'screen') {
        console.log('entro  screen');
        mostrar.innerHTML = 'El resultado es ' + resultado;
    }else{
        alert('El resultado es ' + resultado);
    }
}





/**
 * Función sin callBacks
 * @param {*} num1 valores numéricos de los dos input
 * @param {*} num2 
 * @param {*} operador el botón que se presiono que representa los valores matemáticos
 * @param {*} eleccion la elección de la respuesta
 * @returns 
 */
// function calco(num1, num2, operador, eleccion) {
//     var mostrar = document.getElementById('resultado');
//     var valorNum1 = parseInt(num1.value);
//     var valorNum2 = parseInt(num2.value);
//     var resultado = 0;
    

//     if (!isNaN(valorNum1) && !isNaN(valorNum2)) {
   
//         if (operador === 'sumar') {
//             console.log('entro en sumar ');
//             resultado = valorNum1 + valorNum2;              
//         } else if (operador === 'restar') {
//             console.log('entro en restar ');
//             resultado = valorNum1 - valorNum2;      
//         }else if (operador === 'dividir') {
//             console.log('entro en dividir');
//             resultado = valorNum1 / valorNum2;      
//         }else if (operador === 'multiplicar') {
//             console.log('entro en multiplicar ');
//             resultado = valorNum1 * valorNum2;
//         }
//         if (eleccion === 'screen') {
//             console.log('entro  screen');
//             mostrar.innerHTML = 'El resultado es ' + resultado;
//         }else{
//             alert('El resultado es ' + resultado);
//         }

//     } else {
//         return 'Por favor ingresa números en las inputs';
//     }
//}