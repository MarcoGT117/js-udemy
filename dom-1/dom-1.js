/*
document.getElementById('id'); Accede a un elemento a traves de su id

document.querySelector('selectorCSS'); Accede al primer elemento que coincida con el selector CSS

document.querySelectorAll('selectorCSS'); Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

const title  = document.getElementById('title');

console.log(title);

title.textContent = "DOM - modificando titulo";

const paragraph = document.querySelector('.paragraph'); //Es importante que al seleccionar el atributo
                                                        //class del html usar "." antes del string con el 
                                                        //que pretendemos seleccionar la class deseada

const paragraph2 = document.querySelector('.paragraph:nth-child(2)'); //Añadiendo al string "nth-child(n) permite seleccionar el nodo (n) a traves de su atributo class

const span = paragraph.querySelector('span'); //Aqui no hace falta el "." ya que estamos entrando a el desde paragraph
/*
const span2 = document.getElementById('id').querySelector('span').querySelector('a'); //A traves de los nodos padres podemos ir entrando en los nodos hijos encadenando los metodos del dom
*/
const paragraphs = document.querySelectorAll('.paragraph');

paragraphs[0].style.color = 'red';