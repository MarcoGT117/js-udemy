/* 
API Loadbar
*/

const fileInput = document.getElementById('file');
const progress = document.getElementById('progress')
/* 
    fileInput.addEventListener('change', e =>{
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    //Para controlar la barra de progreso
    fileReader.addEventListener('progress', e =>{
        //Controla el atributo width del css para que se meodifique conforme el progreso de la subida
        progress.style.width = Number.parseInt((e.loaded/e.total)*100) + '%';
    })

    fileReader.addEventListener('loadend', () =>{
        progress.style.width = '100%';
    })
})  */

//Acceso a varaibles del css
const root = document.documentElement;

fileInput.addEventListener('change', e =>{
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    //Para controlar la barra de progreso
    fileReader.addEventListener('progress', e =>{
        //Controla el atributo width del css para que se meodifique conforme el progreso de la subida
        root.style.setProperty('--bar-width', Number.parseInt((e.loaded/e.total)*100) + '%');
    })

    fileReader.addEventListener('loadend', () =>{
        progress.style.setProperty('--bar-width', '100%');
    })
}) 