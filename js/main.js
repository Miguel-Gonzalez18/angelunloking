window.addEventListener('scroll', function() {
    let header = document.querySelector('nav');
    let nav = document.querySelector('.menu-movil');
    header.classList.toggle('sticky', window.scrollY > 0);
    nav.classList.toggle('sticky2', window.scrollY > 0);
});
ScrollReveal().reveal('.headline', { delay: 500 });
ScrollReveal().reveal('.headline2', { delay: 500 });
ScrollReveal().reveal('.card-precio1', { delay: 500 });
ScrollReveal().reveal('.card-precio2', { delay: 600 });
ScrollReveal().reveal('.card-precio3', { delay: 800 });
ScrollReveal().reveal('.nombre-text', { delay: 500 });z
ScrollReveal().reveal('.correo-text', { delay: 800 });
ScrollReveal().reveal('.grupo2', { delay: 1100 });
function toggleMenu() {
    let menuToggle = document.querySelector('.menu-movil');
    menuToggle.classList.toggle('active');
    let menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const formulario = document.getElementById('formulario-contacto');
const inputs = document.querySelectorAll('#formulario-contacto input');
const campos={
    nombre: false,
    correo: false,
    mensaje: false
};

const validarFormulario = (e) =>{
    switch(e.target.name){
        case 'nombre':
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('text-nombre').classList.remove('text-incorrecto');
                document.getElementById('label-text-nombre').innerHTML = '<i class="fad fa-user"></i> Nombre* <i class="fas fa-badge-check"></i>';
                campos['nombre']=true;

            } else{
                document.getElementById('text-nombre').classList.add('text-incorrecto');
                document.getElementById('label-text-nombre').innerHTML = '<i class="fad fa-user"></i> Nombre* <i class="fad fa-times-circle" style="color: red;" title="Esto no es un nombre correcto"></i>';
                campos['nombre']=false;
            }
        break;

        case 'correo':
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('text-correo').classList.remove('text-incorrecto');
                document.getElementById('label-text-correo').innerHTML = '<i class="fad fa-at"></i> Correo* <i class="fas fa-badge-check"></i>'
                campos['correo']=true;
                
            }else{
                document.getElementById('text-correo').classList.add('text-incorrecto');
                document.getElementById('label-text-correo').innerHTML = '<i class="fad fa-at"></i> Correo* <i class="fad fa-times-circle" style="color: red;" title="Esto no es un correo real"></i>'
                campos['correo']=false;
            }
        break;
    }
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', function(e){
    if (document.getElementById('text-mensaje').value === "") {
        document.getElementById('label-text-textarea').innerHTML = '<i class="fad fa-envelope"></i> Mensaje* <i class="fad fa-times-circle" style="color: red;"></i>';
        campos['mensaje']=false;
        
    }
    else{
        document.getElementById('label-text-textarea').innerHTML = '<i class="fad fa-envelope"></i>Mensaje* <i class="fas fa-badge-check"></i>';
        campos['mensaje']=true;
        
    }
    if (campos.nombre === true && campos.correo === true && campos.mensaje === true){
        
    }
    else{
        e.preventDefault();
    }
});