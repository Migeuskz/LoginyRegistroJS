//declarar variables para vincular los objetos de formulario
const usario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('subir');

//leyendo eventos 
formulario.addEventListener('click',login);

//funciones a ejecutar
function login(e){
    e.preventDefault();
    console.log('Se ejecuta evento de formulario');

    let usarioVal = usario.value;
    let passwordVal = password.value;

    if(usarioVal == '' || passwordVal == ''){
        return;
    }

    console.log('el valor para user es: ' + usarioVal);
    console.log('el valor para pass es:' + passwordVal);
}