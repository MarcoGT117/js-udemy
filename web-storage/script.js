/* 
API WebStorage
    Los dos mecanismos en el alamcenaminto web son los sigiuiwentes:

        sessionStorage que mantiene un area de almacenamiento separada para cada origen que esta disponible mientras dure la sesion de la pagina (mientras el navegador este abierto, incluyendo las recargas de la pagina y reestablecimientos).

        localstorage que hace lo mismo, pero persiste incluso si el navegador se cierra y se vuelve a abrir

    Ambos funcionan de modo clave:valor y tienen dos metodos fundamentales, setItem() para asignar una clave:valor y getItem() que recibe como parametro la clave de la que queremeos obtener el valor
*/

const form = document.getElementById('form');
const keys = document.getElementById('keys');
const resetButton = document.getElementById('reset');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    sessionStorage.setItem(form.key.value, form.value.value);

    keys.innerHTML += `<option>${form.key.value}</option>`;

    form.reset;
});

keys.addEventListener('change', () =>{
    
    document.getElementById('infovalue').textContent = sessionStorage.getItem(keys[keys.selectedIndex].textContent);
});

resetButton.addEventListener('click', () => sessionStorage.clear());

//Para guardar en localStorage es exactamente el mismo procedimiento, solo sustituye sessionStarage por localStorage