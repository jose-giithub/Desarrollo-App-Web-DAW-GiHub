

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

    enviar.addEventListener('click', function () {//capturo el evento click de enviar y le paso todo a la función

        let eleccionRespuesta = selectElement.value;//guardo el valor del select --> screen o screen
      
        calco(num1, num2, operador, eleccionRespuesta);
      
        
      

    });
});

function calco(num1, num2, operador, eleccion) {
    var mostrar = document.getElementById('resultado');
    var valorNum1 = parseInt(num1.value);
    var valorNum2 = parseInt(num2.value);
    var resultado = 0;
    

    if (!isNaN(valorNum1) && !isNaN(valorNum2)) {
   
        if (operador === 'sumar') {
            console.log('entro en sumar ');
            resultado = valorNum1 + valorNum2;  
            //mostrar.innerHTML = 'El resultado es ' + resultado;           
        } else if (operador === 'restar') {
            console.log('entro en restar ');
            resultado = valorNum1 - valorNum2;
            //mostrar.innerHTML = 'El resultado es ' + resultado;
        }else if (operador === 'dividir') {
            console.log('entro en dividir');
            resultado = valorNum1 / valorNum2;
           // mostrar.innerHTML = 'El resultado es ' + resultado;
        }else if (operador === 'multiplicar') {
            console.log('entro en multiplicar ');
            resultado = valorNum1 * valorNum2;
           // mostrar.innerHTML = 'El resultado es ' + resultado;
        }
        if (eleccion === 'screen') {
            console.log('entro  screen');
            mostrar.innerHTML = 'El resultado es ' + resultado;
        }else{
            alert('El resultado es ' + resultado);
        }

    } else {
        return 'Por favor ingresa números en las intuts';
    }
}