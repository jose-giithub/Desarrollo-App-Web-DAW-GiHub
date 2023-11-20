//cargar el html
document.addEventListener('DOMContentLoaded', function () {


    //capturo evento
    document.getElementById("verificar").addEventListener("click", function (event) {




        if (validar()) {  // si la función da true la todo es correcto
            console.log('Formulario correcto');
            fraseCorrecta();


        } else {//si es false incorrecto
            console.log('Formulario no correcto');
            fraseIncorrecta();

        }
    });
});

