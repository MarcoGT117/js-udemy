/* Esta API permite saber cuando un elemento es visible o no */

const boxes = document.querySelectorAll('.box');

const cb = entries => {
    entries.forEach(entry => {
        //Determina si el elemento esta siendo visto 
        if(entry.isIntersecting){
            console.log(entry.target.id, 'Is intersecting');
        }
    })
}

const options = {
    //root: ,
    //Como el margin de CSS
    //rootMargin: '200px',
    threshold: 0
}

const observer = new IntersectionObserver(cb, options);
boxes.forEach(element => observer.observe(element))