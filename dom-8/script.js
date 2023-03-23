/*
Objeto window - es el objeto global, de el descienden todos los objetos
    alert()
    prompt()
    confirm()
*/

/*
Objeto console - es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    .log()
    .dir()
    .error()
    .table()
    */

    const button = document.getElementById('button');

    const person = {
        name: 'Marco',
        age: 26,
        email:'marco@gmail.com'
    }

    console.table(person);
    console.log(person);
    console.dir(person);

/*
Objeto location - es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href
    location.protocol - php, ftp, etc.
    location.host
    location.pathname
    location.hash
    location.reload()
*/

console.log(`${location.host}${location.pathname}`);

/*
Objeto history
    https://developer.mozilla.org/es/docs/DOM/Manipulandop_el_historial_del_navegador
    back() - regresa una pagina hacia atras
    forward() - regresa a una pagina de la que se venia 
    go(n|-n) - regresa un n numero de paginas, postivo hacia adelante, negativo hacia atras

    length - regresa el numero de paginas visitadas en la sesion
*/


/*
Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/date

    https://www.w3cschool.com/jsref/jsref_obj_date.asp
*/

//Para poder usar el objeto date se debe instanciar antes
const date = new Date();

console.log(date.getDay); // los dias empiezan desde 0, siendo 0 domingo y 6 sabado

/*
Timers

    Timeout:
    https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScopre/setTimeout

    setTimeout(()=>{codigo}, ms) - Ejecuta la funcion pasada como primer argumento despues de los milisegundos especificados en el segundo argumento. Si lo referenciamos mediante una varaible/constante podemos pararlo con clearTimeout(referencia)

    Interval:
    https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScopre/setInterval
    
    setInterval(()=>{codigo}, ms) - Ejecuta la funcion del primer argumento cada tantos milisegundos como los indicados en el segundo argumento de la funcion. Si lo referenciamos mediante una varaible/constante podemos pararlo con clearTimeout(referencia)
*/

const saludar = ()=> console.log('Hola');

//button.addEventListener('click', ()=>setTimeout(saludar, 2000));

let count = 0;
const interval = setInterval(()=> {
    console.log(count);
    count++;
}, 2000);

button.addEventListener('click', ()=> clearInterval(interval));