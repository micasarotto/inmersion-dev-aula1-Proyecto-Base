let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;  // Detiene la función si la cantidad es menor
    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password += caracterAleatorio;
    }
    contrasena.value = password;

    // Validar si la contraseña es fuerte o débil
    validarFortaleza(password);
}

function limpiar() {
    contrasena.value = '';  // Limpia el campo de la contraseña
    cantidad.value = '';  // Limpia el campo de cantidad
    document.getElementById('mensaje-fortaleza').textContent = '';  // Limpia el mensaje de fortaleza
}

function validarFortaleza(password) {
    const mensaje = document.getElementById('mensaje-fortaleza');

    // Verificar si contiene una mayúscula, minúscula, número y símbolo
    const contieneMayuscula = /[A-Z]/.test(password);
    const contieneMinuscula = /[a-z]/.test(password);
    const contieneNumero = /[0-9]/.test(password);
    const contieneSimbolo = /[!@#$%^&*()]/.test(password);

    // Comprobar si es fuerte o débil
    if (contieneMayuscula && contieneMinuscula && contieneNumero && contieneSimbolo) {
        mensaje.textContent = "La contraseña es fuerte.";
        mensaje.style.color = 'green';  // Color verde si es fuerte
    } else {
        mensaje.textContent = "La contraseña es débil. Debe contener al menos una letra mayúscula, una letra minúscula, un número y un símbolo.";
        mensaje.style.color = 'red';  // Color rojo si es débil
    }
}
