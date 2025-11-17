const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');
const gallery = document.getElementById('gallery');
const link = document.getElementById('link');

input.addEventListener('keyup', (event)=>{
    console.log(event.key)}); //Muestra en la consola que tecla se esta presionando

//window.addEventListener('click', (e)=>console.log(e));

button.addEventListener('click', (e)=>{
    console.log(e.target);
})


gallery.addEventListener('click', e => console.log(e.target.classList.add('red'))); //Al dar click se cambia la clase lo quie hace que se vea rojo

//Para evitar que al enviar un form se reinicie la pagina

form.addEventListener('submit', e => e.preventDefault());

//Para evitar que el link redirija a google
link.addEventListener('click', e => e.preventDefault());

//Cambia el valor del input cuando se hace click en el boton
button.addEventListener('click', () => {
    input.value = 'Has hecho click';
})