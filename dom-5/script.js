//DOM - Crear e insertar elementos

/*
Crear un elemento: document.createElement(element);
escribir texto en un elemento - element.textContext = texto;
escrbir HTML en un elemento: element.innerHTML = codifigo HTML;

Añadir  un elemento al DOM: parent.appendchild(element)

Fragmentos de codigo: document.createDocumentFragment();
*/
const TITLE = document.getElementById('title');
const DAYS_LIST = document.getElementById('daysList');
const SELECT_DAYS = document.getElementById('daysSelect');

const DAYS = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

//Crear elemento de lista
/*
const itemList = document.createElement('li'); //Crea el elemento lli
itemList.textContent = DAYS[0]; //Añade el texto al elemento recien creado
DAYS_LIST.appendChild(itemList); //Pone el elemento al nodo padre (ul)
*/


TITLE.innerHTML = "<span>DOM - crear e insertar elementos I</span>";

const CODE_FRAG = document.createDocumentFragment();
const CODE_FRAG_2 = document.createDocumentFragment();


for(const day of DAYS) {
    const ITEM_LIST = document.createElement('li');
    ITEM_LIST.textContent = day;
    CODE_FRAG.appendChild(ITEM_LIST);//Aqui es donde se modifica el valor de CODE_FRAG
};

DAYS_LIST.appendChild(CODE_FRAG);//Aqui es donde se añade el valor al elemento padre del HTML


//Rellenar el select

//Crea el elemento option

for(const day of DAYS) {
    let val = 1;
    const OPTION = document.createElement('option');
    OPTION.setAttribute('value', day.toLowerCase())
    OPTION.textContent = day;
    CODE_FRAG_2.appendChild(OPTION);//Aqui es donde se modifica el valor de CODE_FRAG
};

SELECT_DAYS.appendChild(CODE_FRAG_2);