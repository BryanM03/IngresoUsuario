
function validarFormulario() {
    validarNombre();
    validarNacionalidad();
    validarApellido();
    validarCorreo();
    validarEdad();
    validarSexo();
    validarTelefono();
}
function validarNombre() {
    var elemento = document.getElementById("nombre");
    if (elemento.value == "") {
        alert("El campo no pude ser vacio");
        return false;
    }
    return true;
}
function validarApellido() {
    var elemento = document.getElementById("apellido");
    if (elemento.value == "") {
        alert("El campo no pude ser vacio");
        return false;
    }
    return true;
}
function validarNacionalidad() {
    var elemento = document.getElementById("nacion");
    if (elemento.value == "") {
        alert("El campo no pude ser vacio");
        return false;
    }
    return true;
}
function validarCorreo() {
    var elemento = document.getElementById("correo");
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))) {
        alert('[ERROR] Este campo no esta completo');
        return false;
    }
}
function validarTelefono() {
    var elemento = document.getElementById("celular");
    if (isNaN(elemento.value)) {
        alert("El campo telefono tiene que ser numerico");
        return false;
    }
    return true;
}

function validarSexo() {
    var Sexo =document.getElementById("selectorsexo").selectedIndex;
    if (Sexo == null || Sexo == 0) {
        alert("ERROR: Debe seleccionar una opcion ");
        return false;
    }
}
function validarEdad() {
    var Edad = document.getElementById("selectoredad").selectedIndex;
    if (Edad.length == null || Edad.length == 0 || Edad.length == "") {
        alert("Campo vacio ");
        return false;
    }
}
function validar(e) {
    if (validarNombre() && validarApellido() && validarNacionalidad() && validarCorreo() && validarTelefono() && validarSexo() && validarEdad() && confirm("pulsa aceptar si deseas enviar el formulario")) {
    }
    else {
        e.preventDefault();
        return false;
    }
}    