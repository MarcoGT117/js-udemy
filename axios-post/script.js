//Una de las ventajas de axios al usarlo en POST es que internamente transforma el objeto que enviemos en un string valido para usarse en JSON

const button = document.getElementById('button');


button.addEventListener('click', ()=>{
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data:{
            title: 'A new post',
            body: 'loremipsum',
            userId: 1
        }
    }).then(res => {
        console.log(res.data);
    })
    .catch(error => console.log(error)); 
});