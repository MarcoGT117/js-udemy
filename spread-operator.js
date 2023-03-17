//Expande el valor de un array (No funciona en objetos)
//sintaxis

const numbersA = [-12, 3, 5, 23, 2, 89];

console.log(numbersA); /* -> Array(6) [ -12, 3, 5, 23, 2, 89 ]
​
                            0: -12
​
                            1: 3
​
                            2: 5
​
                            3: 23
​
                            4: 2
​
                            5: 89
​
                            length: 6
                            
                            Imprime un array en su formate comun por separado
                            */

console.log(...numbersA); // -> -12 3 5 23 2 89    | Imprime los valores

//Ejemplos

//Enviar elementos a una funcion

let numbersB = [1, 2, 3];

let add = (a, b, c) => console.log(a + b + c);

add(1 , 2, 3); // -> 6

add(numbersB); // -> 1, 2, 3undefinedundefined

add(...numbersB); // ->  6

//Añadir un array a otro array

let onlineUsers = ['Javier', 'David', 'Rosa', 'Juan', 'Mercedes'];
let offlineUsers = ['Marta', 'Jaime', 'Laura'];

    //Quieres pasar los usuarios desconectados a la lista de conectados
    /*Con un loop
    for (let user = 0; user < offlineUsers.length; user++) {
        onlineUsers.push(offlineUsers[user]);
    };
    */

    /*Con spread operator
    */
   onlineUsers.push(...offlineUsers);

//Copiar arrays
let arrA = [1,2,3,4];
let arrB = [...arrA];

//Concatenar arrays

let arrC = [1, 2, 3, 4];
let arrD = [6, 7, 8];

let arrConcatA = arrC.concat(arrD);
let arrConcatB = [...arrC, ...arrD]; //Ambas opciones son validas

//Enviar un numero inefinido de argumentos a una funcion (parametros REST)

const restParams = (...n) => {
    console.log(n);
}

restParams(1,2,3,4,5,6,7);

//Libreria Math
let arrF = [78, 89, 45];
console.log(Math.max(4, 6, 9)); // -> 9

console.log(Math.max(arrF)); // -> NaN, no puede extraer los elementos
                            // del array, solo recibe un array el cual no es un numero

console.log(Math.max(...arrF)); // -> 89
console.log(Math.min(...arrF)); // -> 45

//Eliminar elementos duplicados

let arrG = [-12, 3, 5, 23, 2, 89];
console.log(new Set(arrG)); // -> Creara un objeto Set el cual no tendra elementos duplicados}

console.log([new Set(...arrG)]); // -> Creara un array a partir de los valores del array dado 
                                //pero al pasar por Set se eliminaran los duplicados
