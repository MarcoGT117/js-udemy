//Axios es una liabreria basada en promesas, es util para proyectos donde se hacen peticiones a una API REST para traer datos

const button = document.getElementById('button');


button.addEventListener('click', ()=>{
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(res => {
        const list = document.getElementById('list');
        const fragment = document.createDocumentFragment();

        for (const user of res.data) { //Obtiene los datos que se encuentran en response del objeto res
            const listItem = document.createElement('li');
            listItem.textContent = `${user.id} - ${user.name}`;
            fragment.appendChild(listItem);
        }
        list.appendChild(fragment)
    })
    .catch(error => console.log(error)); 
});