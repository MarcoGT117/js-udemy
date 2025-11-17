/*
Insertar y eliminar elementos II

    parent.insertBefore(newElement, referenceElement) - Inserta un elemento antes del elemento dado como segundo argumento

    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)

    parent.insertAdjacentHTML(position, HTML)
    parent.inmsertAdjacent(position, text)

    positions
        befrebegin - antes de que empiece (hermano anterior
            afterbegin -despues de que empiece (primer hijo)
            beforeend - antes de que acabe (ultimo hijo)
            afterened - despues de que acabe (hermano siguiente)

    parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/

const LIST = document.getElementById('list');
const NEW_ELEMENT = document.getElementById('li');
NEW_ELEMENT.textContent = "I'm a new element";

LIST.appendChild(NEW_ELEMENT); //Coloca el nuevo elemento en el ultimo lugar siempre

LIST.insertBefore(NEW_ELEMENT, LIST.children[0]); //Coloca el nuevo elemento antes del primer elemento ya existente

LIST.insertAdjacentElement('beforebegin', NEW_ELEMENT); // Lo enviara afuera del ul

LIST.children[0].insertAdjacentElement('afterbegin', NEW_ELEMENT);

LIST.insertAdjacentElement('beforeend', NEW_ELEMENT); // lo colocara al final de la lista

LIST.children[0].insertAdjacentElement('afterend', NEW_ELEMENT); //Lo coloca despues del primer li


//Reemplazar
LIST.replaceChild(NEW_ELEMENT, LIST.children[1]); //Reemplaza el segundo li por el elemento nuevo

/*
DOM manipulation convenience methods - Similares a JQuery
https://caniuse.com/#search=JQuery-like
    
    Positions:
        parent.before() - Antes de que empiece (Hermano anterior)
        parent.prepend() - despues de que empiece (Primer hijo)
        parent.append() - antes de que acabe (ultimo hijo)
        parent.after() - despues de que acabe (hermano siguiente)

        child.replacewith(newChild)

*/

LIST.before(NEW_ELEMENT); //Se sale de la lista
LIST.children[0].before(NEW_ELEMENT); //Dentro de la lista

LIST.prepend(NEW_ELEMENT); //Se coloca como primer hijo

LIST.append(NEW_ELEMENT); //Se coloca como ultimo hijo

LIST.after(NEW_ELEMENT); //Se coloca al final fuera de la lista

LIST.children[0].after(NEW_ELEMENT); //Se coloca al final de la lista

LIST.children[0].replaceWith(NEW_ELEMENT); //Reemplaza el primer elemento de la lista con el elemento nuevo


/*
Clonar y eliminar elementos
    element.cloneNode(true|false) - clona el nodo, si el argumento es true clona todo el elemento con suis hijos, si es false clona solo el elementos sin suhijos
    element.remove() - Elimina el nodo del DOM
    elementRremoveChild(child) - Elimina el nodo hijo del DOM
*/

LIST.after(LIST.cloneNode(true)); //Copia toda la lista con sus elementos hijos, recuerda que tambien copia los id y clases del html

LIST.remove(); //Elimina toda la lista del nodo

LIST.removeChild(LIST.children[0]); //Elimina el primer elemento de la lista