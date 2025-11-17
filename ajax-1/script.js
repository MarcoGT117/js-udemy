//Usando Jsonplaceholder para tener informacion para las peticiones
const button = document.getElementById('button');

button.addEventListener('click', ()=>{
    //peticion ajax
    let xhr;
    if(window.XMLHttpRequest){ //Para asegurarse de que el navegador soporte esta tecnologia
        xhr = new XMLHttpRequest();

    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); //Haciendo una peticion get a la direccion especificada | Abriendo la conexion

    xhr.addEventListener('load', data => { //load se dispara cuando todos los datos han llegado
        const userJson = JSON.parse(data.target.response);  //data contiene los datos que solicitamos, por lo tanto se puede acceder a todas sus 
                                                            //propiedades con la nomenclatura de punto
                                                            //Sin embargo, lo que regresa esta funcion es un string, usamos JSON.parse para hacer que el string se convierta en un objeto
        
                                                            
        const list = document.getElementById('list');
        for (const userInfo of userJson) {
            const listItem = document.createElement('li');
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            
            list.appendChild(listItem);
        }

    }); 
                                                                                        

    xhr.send(); //Enviar los datos
});