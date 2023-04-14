/* 
API File
    Esta API nos permite leer archivos que el usuario cargue en la web. Se pùeden cargar archivos desde un input de tipo file o desde el objeto DataTransfer de la PAI Dag&Drop

    La interfaz mas utilizada para interactuar con ella es FileReader
    https://developer.mozilla.org/es/docs/Web/API/FileReader
*/

const fileInput = document.getElementById('file');
const img = document.getElementById('img');
const text = document.getElementById('text');

/* Para cargar texto
    fileInput.addEventListener('change', e =>{
    //Para acceder al contenido del texto del archivo
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    //Añadir el contenido del archivo al html
    file.addEventListener('load', e=> {
        text.textContent = e.target.result;
    })
}) */

/* Para cargar UNA imagen
    fileInput.addEventListener('change', e =>{
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    //Añadir la imagen al html
    file.addEventListener('load', e=> {
        img.setAttribute('src', e.target.result)
    })
}) */
/* Para cargar VARIAS imagenes */
const images = document.getElementById('images')

fileInput.addEventListener('change', e =>{
    const files = e.target.files;
    const fragment = document.createDocumentFragment();
    for (const file of files) {
        const fileReader = new FileReader();
        const img = document.createElement('img');
        fileReader.readAsDataURL(file);
        //Añadir la imagen al html
        fileReader.addEventListener('load', e=> {
            img.setAttribute('src', e.target.result)
    })
    fragment.appendChild(img);
    }
    images.appendChild(fragment);
})
