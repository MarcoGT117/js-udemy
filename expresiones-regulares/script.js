/* 
    Expresiones regulares:
        Son una secuencia de caracteres que forma un patron de busqueda, principalemente utilizada para la busqueda de patrones de cadenas de caracteres u operaciones de sustituciones.

    Sintaxis:
        /patron/
    Banderas:
        i: ignore case. No diferencia entre mayusculas y minusculas
        g: global. Busca de forma global, es decir, no se detiene despues de la primera coincidencia

    pruebas:
    https://regex101.com/

    Comodines:
        -Sustitucion: Define un comodin dentro del patron. El simbolo es el  "."

        -Listado de caracteres validos: Entre corchetes se pone una lista de los caracteres validos [aeiou] con esto tomariamos todas las vocales

        -Rangos: Entre corchestes si ponemos un guion entre dos caracteres establecemos un rango. Con [a-z] tomariamos todas las letras del abecedario en minusculas.

        -Mezcla entre rangos y listas: Podemos unira los dos anteriores en una sola expresion. [0-5ou] seria los numeros del 0 al 5 y las letras "o" y "u"

        -Cadenas complññetas: para establecer una cadena completa debe ir entre parentesism su queremos mas palabras iran separadas por un pipe. (lorem|amet) es valida para las palabras "lorem" y "amet"

    Delimitadores: 
        ^, Antes de este simbolo no hay nada
        $, despues de este simbolo no puede haber nada

    Cantidad:
        -llaves: Lo que esta antes tiene que aparecer una cierta cantidad exacta de veces, Hay tres combinaciones posibles.
            {n} Se tiene que repetir n veces
            {n, m} Se tiene que repetir entre n y m veces, incluyendo n y m
            {n, } Se tiene que repetir al menos n veces sin ningun limite maximo
            
        ^[a-zA-Z]{1,3}@{1}$
        -Asterisco: Lo que esta antes del asterisoco puede estarm puede no estar y se puede repetir.    .*@.*\..*
        -Interrogacion: Lo que esta antes de la interrogacion puede no estar, pero si esta, solo se puede repetir una vez.  [ae]?$
        -Operador +: lo que esta antes del + tiene que estar al menos una vez   A-[0-9]+

    Caracteres Especiales:
        \s: Coincide con un caracter de espacio, ya sea de spacebar, salto de pagina, tab, retorno
        \S: Coincide con todo excepto caracteres de espacio
        \d: Coincide con un caractert de numero, equivalente a [0-9]
        \D: Coincide con cualquier caracter no numerico
        \w: Coincide con cualquier caracter alfanumerico, incluyendo guion bajo, equivalente a [A-Zaa-z0-9_]
        \W: Coincide con todoi menos con caracteres de palabra.

*/

const text = document.getElementById('text').textContent;

const regEx1 = /lorem/gi;
//Usando constructores, tienen el mismo output que si se usara la forma de regEx1
const regEx2 = new RegExp('lorem', 'gi');
const regEx3 = new RegExp('/lorem/', 'gi');

console.log(regEx1.test(text));