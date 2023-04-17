/* 
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

    La destructuracion es una expresion de JavaScrript que hace posible la extraccion de datos de arreglos u objetos
*/

//Objetos
const persona = {
    name: 'Marco',
    age: 26,
    email: 'marco@email.com'
}
//Metodo tradicional
// const name = person.name;
// const age = person.age;
// const email = person.email;

//Con destructuracion
const { name, age, email } = persona;

console.log(name, age, email);

//Destructuracion con alias
const { name: nombre, age : edad, email : correo} = persona;

console.log(nombre, edad, correo);

//Arrays
const numbers = [ 1, 2, 3, 4 ];

//Metodo tradicional
// console.log(numbers[0]);

//Con destructuracion
// const [primeraPosicion] = numbers;

// console.log(primeraPosicion);

//La destructuracion sigue el orden del array, de modo que si se quisiera recuperar uno de los valores que no sea el primero hay que rellenar los huecos con otros valores

// const [a, b, c, cuartaPosicion] = numbers;
// console.log(cuartaPosicion);

// const printPerson = ({name}) => {
    //     console.log(name);
    // }
    
    // printPerson(persona)
    
// Ejercicio
const getUsers = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(data);
}

getUsers();