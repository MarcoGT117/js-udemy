/*
Atributos
    element.getAttribute('attribute') -> devuelve el atributo
    element.setAttribute('attribute', value) -> modifica el atributo

Clases
    element.classList.add('class', 'class', ...)
    element.classList.remove('class', 'class', ...)
    element.classList.toggle('class', [, force])
    element.classList.add('class')
    element.classList.add('oldClass', 'newwClass')

Atributos direcetos
    id
    value
*/

const title = document.getElementById('title');
const name = document.getElementById('name');

console.log(title);
console.log(name);

//console.log(name.getAttribute('type'));
//name.setAttribute('type', 'number');

title.classList.add('main-title', 'another-title');
title.classList.remove('main-title', 'another-title');

if (title.classList.contains('title')) {
    console.log("Title tiene la clase 'title'");
}else{
    console.log("Title no contierne la clase 'title'");
}

title.classList.replace('title', 'main-title');

console.log(name.value);
