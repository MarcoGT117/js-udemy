/*
Eventos de raton:
    click - cuando pulsamos el boton izquierdoi del raton
    dbclick - cuando pulsamos dos veces seguidas el boton izquierdo del raton
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown . cuando oulsamos el botron izquierdo del raton
    mouseup - cuando soltamos el boton izqueirdo del raton
    mousemove - cuando movemos el raton

Eventos del teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/
const button = document.getElementById('button');

const box = document.getElementById('box');

const input = document.getElementById('input');

button.addEventListener('click', () => {
    console.log('Click');
})

button.addEventListener('dblclick', () => {
    console.log('Doble click');
})

/*
Cambia la clase css del div box para que cambie de color al colocar o retirar el puntero
box.addEventListener('mouseenter', () => box.classList.replace('red', 'green'));
box.addEventListener('mouseleave', () =>box.classList.replace('green', 'red'));
*/

/*
Detecta pulsaciones del mouse, util para drag&drop
box.addEventListener('mousedown', ()=>console.log("Has pulsado la caja"));

box.addEventListener('mouseup', ()=>console.log("Has soltado el boton izquierdo en la caja la caja"));
*/

box.addEventListener('mousemove', ()=>console.log("Estas moviendo el puntero en la caja"));

//Eventos de teclas
input.addEventListener('keydown', ()=>console.log("Has presionado una tecla"));

input.addEventListener('keyup', ()=>console.log("Has soltado una tecla"));

input.addEventListener('keypress', ()=>console.log("Estas pulsando una tecla"));