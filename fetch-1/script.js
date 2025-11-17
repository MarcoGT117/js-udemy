/*
    Fetch API
    Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.
    Tambien provee un metodo global fetch() que proporciona una forma facil y logica de obtener recursos de forma asincrona de la red.
    Esta basado en propemesas, por lo cual tiene un response y un reject internos
        Response tiene varios metodos:
            arrayBuffer(): Archivos binarios en bruto (mp3, jpg, pef, etc.). Se utiliza cuando se necesita manipular el contenido del archivo.
            blob(): Archivos binarios en bruto (mp3, jpg, pef, etc.). Se utiliza cuadno no se necesita manipular el contenido y se quiere trabajar con el archivo directamente.
            clone(): Crea un clon de un objeto de respuesta, identico en todos los sentidos, pero almacenado en una variable diferente.
            formData(): Se utiliza para leer los objetos formData.
            json(): Convierte los archivos json en un objeto de JavaScript.
            text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8

*/
/*  Usar esto para comprobar si fetch es compatible con el navegador en que se esta probando   
    if (window.fetch != undefined) {
        console.log('Fetch works');
    } else{
        console.log("Fetch doesn't works");
    } */

    const button = document.getElementById('button');
//Se actualizara con fetch el jercicio realizado en Ajax 1
button.addEventListener('click', ()=>{
    //Si se usa solo la url, fetch por default lo tratara como una peticion GET
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            const list = document.getElementById('list');
            const fragment = document.createDocumentFragment();
            for (const user of res) {
                const listItem =  document.createElement('li');
                listItem.textContent = `${user.id} - ${user.name}`;
                fragment.appendChild(listItem);
            }
            list.appendChild(fragment);
        })
        .catch(e => console.log(e))

});