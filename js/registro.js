//Declaración de variables de referencia a objetos 
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formRegistro');

formulario.addEventListener('click', registro);

function registro(e){
    e.preventDefault();

    let nombreVal = nombre.value;
    let emailVal = email.value;
    let userVal = user.value;
    let passValue = pass.value;

    if(nombreVal == '' || emailVal == '' || userVal == '' || passValue == ''){
        
        crearMensaje('Verifica tus campos','danger');
        return;
    }

    const usario = {
        nombre: nombreVal,
        email: emailVal,
        user: userVal,
        pass: passValue
    }

    localStorage.setItem('usuario', JSON.stringify(usario));

    nombre.value = '';
    email.value = '';
    user.value = '';
    pass.value = '';

    crearMensaje('Usuario Registrado','success');
}


