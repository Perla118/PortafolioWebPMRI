const header = document.querySelector("header");

window.addEventListener("scroll", function () {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icono');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.texto-ini', { delay: 350, origin: 'left' })

sr.reveal('.Aprendizaje,.sobremi,.Proyectos,.Contacto', { delay: 200, origin: 'bottom' })


const Mensaje = document.querySelector('#Mensaje');
const btnEnviar = document.querySelector('#btnEnviar');

var mensaje;

function Enviar (){
    mensaje = `https://api.whatsapp.com/send?phone=526444554210&text=${Mensaje.value}`;
    btnEnviar.href= mensaje;
}