//Recorrer el DOM

/*
Padre - parent (Nodo del que desciende)
- parentNode - Devuelve el nodo elemento padre

NOTA
Los nodos del tipo document y DocumentFragment nunca van a tener un elementio pàdre, parentNode devolvera siempre null

Hijos - child (Nodo que desciende de un padre)
    -childNodes - Devuelve todos los nodos hijos
    -children - Devuelve Todos los nodos elementos hijos
    -firstChild - Devuelve el primer nodo hijo
    -firstElementChild - Devuelve el primer nodo elemento hijo
    -lastChild - Devuelve el ultimo nodo hijo
    -hasChildNodes() - Devuelve true si el nodo tiene hijos y false si no los tiene

Hermanos - siblings (Nodo al mismo nivel)
    -nextSibling - Devuelve el siguiente nodo hermano
    -nextElementSibling
    -previousSibling
    previousElementSibling

Cercano (experimental)
    -closest(selector) - Selecciona el nodo mas cercano que cumpla con el selector
*/

const PARENT = document.getElementById('parent');


//Tiene salto de linea
console.log(PARENT.childNodes);
//Sin salto de linea
console.log(PARENT.children); //.children[2] devuelve solo el tercer

console.log(PARENT.firstElementChild);

console.log(PARENT.lastElementChild);

console.log(PARENT.lastElementChild.hasChildNodes()); //false

console.log(PARENT.firstChild.hasChildNodes());//true

console.log(PARENT.nextSibling)// \n
console.log(PARENT.nextElementSibling); //null

console.log(PARENT.parentElement.previousSibling); //\n
console.log(PARENT.parentElement.previousElementSibling); //h1

