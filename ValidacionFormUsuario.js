function validacionForm() {
    
    //declaramos las variables, extraemos los datos del formulario y quitamos los espacios con trim
    var nom = document.querySelector("#nomb").value.trim();
    var apellido = document.querySelector("#apell").value.trim();
    var provincia = document.querySelector("#prov").value.trim();
    var localidad = document.querySelector("#localid").value.trim();
    var contrase = document.querySelector("#contras").value.trim();
    var repcontras = document.querySelector("#repcontras").value.trim();
    var repetirmail = document.querySelector("#repmail").value.trim()

     // creamos un alerta si el campo esta vacio
    if (nom === "") {
        alert("El campo Nombre es obligatorio");
        return false;
    }
     
    // controlamos que los caracteres de nombre sean mayusculas o minusculas
    for (var i = 0; i < nom.length; i++) {
        var nombr = nom.charCodeAt(i);
        if (!((nombr >= 65 && nombr <= 90) || (nombr >= 97 && nombr <= 122) || nombr === 32)); {
        alert("Ingrese un caracter valido. Mayusculas o minusculas");
        return false;
        }

    }

    // creamos un alerta si el campo esta vacio
    if (apellido === "") {
        alert("El campo Apellido es obligatorio");
        return false;
    }
    
    // controlamos que los caracteres de nombre sean mayusculas o minusculas
    for (var j = 0; j < apellido.length; j++) {
        var apelli = apellido.charCodeAt(j);
        if (!((apelli >= 65 && apelli <= 90) || (apelli >= 97 && apelli <= 122) || apelli === 32));{
        alert("Ingrese un caracter valido. Mayusculas o minusculas")
        return false;
        }
    }

     // creamos un alerta si el campo esta vacio
    if (provincia === "") {
        alert("El campo Provincia es obligatorio");
        return false;
    }

    // controlamos que los caracteres de nombre sean mayusculas o minusculas
    for (var k = 0; k < provincia.length; k++) {
        var pro = provincia.charCodeAt(k);
        if (!((pro >= 65 && pro <= 90) || (pro >= 97 && pro <= 122) || pro === 32)); {
        alert("Ingrese un caracter valido. Mayusculas o minusculas")
        return false;
        }
    }

    // creamos un alerta si el campo esta vacio
    if (localidad === "") {
        alert("El campo Localidad es obligatorio");
        return false;
    }

    // controlamos que los caracteres de nombre sean mayusculas o minusculas
    for (var h = 0; h < localidad.length; h++) {
        var loc = localidad.charCodeAt(h);
        if (!((loc => 65 && loc <= 90) || (loc => 97 && loc <= 122) || loc === 32)); {
        alert("Ingrese un caracter valido. Mayusculas o minusculas")
        return false;
        }
    }

    // creamos un alerta si el campo esta vacio o si tiene mao o menos de 8 caracteres
    if (contrase === "" || contrase.length < 8 || contrase.length > 8) {
        alert("Ingrese una contraseña de 8 caracteres")
        return false;
    }
     

    // creamos un alerta si la contraseña y repetircontraseña no coinciden
    if (repcontras !== contrase) {
        alert("Las contraseñas no coinciden")
        return false;

    }
}








