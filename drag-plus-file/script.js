const fileInput = document.getElementById('file');
const dropZone = document.getElementById('drop-zone');

//Lanza un evento en el que al hacer click en la zona de drop se simula que el usuario haya hecho click en el input de subir archivo
dropZone.addEventListener('click', ()=> fileInput.click());

dropZone.addEventListener('dragover', e => {
    e.preventDefault();
    dropZone.classList.add('drop-zone--active');
    dropZone.classList.remove()
})

dropZone.addEventListener('dragleave', e => {
    e.preventDefault();
    dropZone.classList.remove('drop-zone--active');
})

dropZone.addEventListener('drop', e => {
    e.preventDefault();
    fileInput.files = e.dataTransfer.files;
    console.log(fileInput.files);    
})

fileInput.addEventListener('change', e =>{
    console.log(fileInput.files);
})