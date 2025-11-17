/* 
    Evento que ayuda a detectar si estas en linea o desconectado    
*/

const alert = document.getElementById('alert');

addEventListener('online', e => {
    setAlert(1);
})

addEventListener('offline', e => {
    setAlert(0);
})

const setAlert = status =>{
    alert.classList.remove('alert--online');
    alert.classList.remove('alert--offline');
    
    status === 0 ? setTimeout(()=>{
        alert.textContent = 'Ups, seems like you are offline';
        alert.classList.add('alert--offline')
    }, 100) : setTimeout(()=> {
        alert.textContent = 'Great! you are back online';
        alert.classList.add('alert--online')
    }, 100);
}