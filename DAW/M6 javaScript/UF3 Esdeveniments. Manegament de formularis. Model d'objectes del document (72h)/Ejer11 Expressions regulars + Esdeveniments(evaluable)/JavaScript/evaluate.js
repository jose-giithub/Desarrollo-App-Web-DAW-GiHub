
var exrpesionRegext1 = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])(?!00)$/;//empieza por 0 + del 1 al 9 o 1 + del 0 al - o 3 + del 0 al 1 pero no 00

// web para verificar https://regexr.com/

document.addEventListener('DOMContentLoaded', function () {
  console.log('Entro');

  //**********CAPTURAR TODOS LOS EVENTOS
  //CAPTURA DE ICONOS
  var icono1 = document.getElementById('checkEx1');
  var icono2 = document.getElementById('checkEx2');
  var icono3 = document.getElementById('checkEx3');
  var icono4 = document.getElementById('checkEx4');
  var icono5 = document.getElementById('checkEx5');
  //CAPTURA DE INPUTS
  var inputValue1 = document.getElementById('inputEx1');
  var inputValue2 = document.getElementById('inputEx2');
  var inputValue3 = document.getElementById('inputEx3');
  var inputValue4 = document.getElementById('inputEx4');
  var inputValue5 = document.getElementById('inputEx5');

  inputValue1.addEventListener("input", function() {
    var texto = inputValue1.value;
    console.log(texto);
    if (exrpesionRegext1.test(texto)) {
      console.log('Si es valida');
      icono1.style.display = 'block';
    }
  //  verificarData(texto, icono1, exrpesionRegext1)
});

     //  


    // verificarData(event.key , icono1, exrpesionRegext);
  

});

/**
 * Función que verifica si es correcto lo que ingresan en un 'formulario'
 * @param {*} teclas lo que se escribio dentro del input
 * @param {*} icono Si es correcto lo que se escribe pasara de none a block
 * @param {*} exresionRegular para verificar que lo que se escribe es correcto 
 */
function verificarData( texto ,icono, exresionRegular) {

  if (exresionRegular.test(texto)) {
    console.log('Si es valida');
    icono.style.display = 'block';

  }

}