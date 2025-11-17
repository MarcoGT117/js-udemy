/* 
API drag & drop

Existen dos partes principaels de esta API, el objeto a arrastrar y la zona donde lo vamos a dejar.

Para controlar estas acciones tenemos varios eventos de cada una de las partes
    Objeto a arrastrar:
        dragstart: Se dispara al comenzar a arrastrar
        drag: se dispara mientras arrastramos 
        dragend: Se dispara cuando soltamos el objeto

    Zona de destino:
        dragcenter: Se dispara cuando el objeto se mueve sobre la zona de destino
        dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
        drop: Se dispara cuando soltamos el objeto en la zona de destino
        dragleave: Se dispara cuando el objeto sale de la zona de destino
*/

const smile = document.getElementById('smile');
const dropzone = document.getElementById('drop-zone');

smile.addEventListener('dragstart', ()=> console.log('drag started'));

smile.addEventListener('drag', ()=> console.log('drag in course'));

smile.addEventListener('dragend', ()=> console.log('drag finished'));

dropzone.addEventListener('dragenter', ()=> console.log('Entered drag zone'));

dropzone.addEventListener('dragover', (e)=>{ e.preventDefault(); console.log('Into drag zone')});

dropzone.addEventListener('drop',(e)=>{ e.preventDefault(); console.log('Smile dropped into drag zone')});

dropzone.addEventListener('dragleave', ()=> console.log('Left drop zone without dropping the object'));