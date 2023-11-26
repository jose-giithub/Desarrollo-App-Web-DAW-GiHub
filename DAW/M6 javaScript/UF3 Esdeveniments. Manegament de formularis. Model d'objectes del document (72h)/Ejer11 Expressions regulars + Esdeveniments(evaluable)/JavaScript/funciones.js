
/**
 * Función que verifica si es correcto lo que ingresan en un 'formulario'
 * Si es correcto muestra el icono de ok si no lo oculta
 * @param {*} inputValue valor del input que viene del html
 * @param {*} icono 
 * @param {*} exresionRegular definida previamente
 */ 
function verificarInputValue( inputValue ,icono, exresionRegular) {

    var texto = inputValue.value;
    console.log(texto);
    if (exresionRegular.test(texto)) {
      console.log('Si es valida');
      icono.style.display = 'block';
    }else{//se actualiza si el campo no es correcto
      icono.style.display = 'none';
    }
  
  }