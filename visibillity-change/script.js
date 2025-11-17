/* 
Esta API funciona para conocer el estado de la reproduccion del audio o video en respuesta a si se esta viendo la pagina donde se esta reproduciendo el arhivo multimedia */

const video = document.getElementById('video');

window.addEventListener('visibilitychange', () =>{
    document.visibilityState === "visible" ? video.play() : video.pause();
})