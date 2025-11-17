/* 
    Fetch API
        Para hacer peticiones POST, fetch admite un segundo parametro.
        fetch(url, {
            method: 'POST',
            body: Los datos que enviemos (Si es un objeto hay que convertirlo con JSON.stringify(datos)),
            headers:{
                cabeceras de informacion sobre lo que estamos enviando
                https://developer.mozillar.org/es/docs/Web/HTTP/Headers
            }
        })
*/

const button = document.getElementById('button');
button.addEventListener('click', () => {
    const newPost = {
        title: 'A new post',
        body: 'loremipsum',
        userId: 1
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers:{
            'Content-type': 'application/json'
        }
    }).then(res => res.json()) //Recibiendo la respuesta y trnasformandola a json
    .then(data => console.log(data))
})