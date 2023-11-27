

//empieza por 0 + del 1 al 9 o 1 + del 0 al - o 3 + del 0 al 1.Que tenga -. Que empiece por 0 + del 1 l 9 o 1 + empiece por 1 + del 0 ak 2 
// +-. que tenga cualquier numero del 0 al 9 4 veces
var exrpesionRegext1 = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\-(0[1-9]|1[0-2])\-[0-9]{4}$/;
//lo mismo que arriba sumando o lo mismo pero con / pero para poner / hay que ponerle \ para caracter especial y encerrarlo todo en() para que no se pueda añadir mas números en el año que 4
var exrpesionRegext2 = /^((0[1-9]|1[0-9]|2[0-9]|3[0-1])-(0[1-9]|1[0-2])-[0-9]{4}|(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4})$/;



/*Empieza por 977 y 6 números random o 977 + espacio + 3 números random + 3 números random o empieza por 97  + espacio + 3 números random + 2 números random + 2 números random*/
//var exrpesionRegext3 = /(^977)\d{6}|(977)\ \d{3}\ \d{3}|(97)\ \d{3}\ \d{2}\ \d{2}$/;
var exrpesionRegext3 = /^((977)\d{6}|(977) \d{3} \d{3}|(97) \d{3} \d{2} \d{2}|(6)\d{8}|(6)\d{2} \d{3} \d{3}|(6)\d{1} \d{3} \d{2} \d{2})$/;

//Añadir la opción de que empiece por +003497.. o +0034 97... opcionalidad es (algo)?
var exrpesionRegext4 = /^((\+034 )|(\+034)?)((977)\d{6}|(977) \d{3} \d{3}|(97) \d{3} \d{2} \d{2}|(6)\d{8}|(6)\d{2} \d{3} \d{3}|(6)\d{1} \d{3} \d{2} \d{2})$/;


//contraseña en format letras latinas (también tenga ñ y ç)y números que tenga mas de 8 caracteres 
//Que empiece por cualquier tipo de carácter del teclado con ñ y ç incluido ^(?=.*\d)(?=.*[a-zçñ]).$ 
//Ademas le quito los espacios y un mínimo de 8 caracteres
var exrpesionRegext5 = /^(?=.*\d)(?=.*[a-zçñ]).[^ 	]{8,}$/;


// web para verificar https://regexr.com         

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


  //VERIFICO CADA INPUT DONDE LLAMO A LA FUNCIÓN DONDE LE PASO LOS PARÁMETROS QUE NECESITA LA MISMA
  //verificar el primer input de tipo fecha en DD-MM-AAAA
  inputValue1.addEventListener("input", function () {
    verificarInputValue(inputValue1, icono1, exrpesionRegext1);//llamo a la función
  });
 //verificar el segundo input de tipo fecha en  DD-MM-AAAA o DD/MM/AAAA
  inputValue2.addEventListener("input", function () {
    verificarInputValue(inputValue2, icono2, exrpesionRegext2);
  });
   //verificar el tercer input de tipo teléfono en(977123456, 977 123 456, 97 712 34 56) o lo mismo pero que empiece por 6
  inputValue3.addEventListener("input", function () {
    verificarInputValue(inputValue3, icono3, exrpesionRegext3);
  });
 //verificar el cuarto input de tipo teléfono en format +034  +034 977 123 456, +034 977123456, +034977123456, etc.
  inputValue4.addEventListener("input", function () {
    verificarInputValue(inputValue4, icono4, exrpesionRegext4);
  });
  //verificar el quinto input de tipo contraseña en format letras latinas y números que tenga mas de 8 caracteres 
  //Las letras que están presentes en castellano pero no en Latin son  j, k, w, y, z
  inputValue5.addEventListener("input", function () {
    verificarInputValue(inputValue5, icono5, exrpesionRegext5);
  });

});