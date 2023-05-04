let nombre = document.querySelector("#firstname");
let email = document.querySelector("#email");
let tel = document.querySelector("#tel");
let consulta= document.querySelector("#content");
let botonEnviar = document.querySelector("#boton-enviar");

function validarDatos() {
    if (nombre.value != "" && email.value !="" && tel.value!="" && consulta.value!="") {

        alert("Mensaje enviado");

    }else{
        alert("Debe completar todos los datos");
    }
}

botonEnviar.onclick = validarDatos;
