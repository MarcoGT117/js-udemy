// primero
/*

let nombre = prompt("Introduce tu nombre", "");
let edad = prompt("Introduce tu edad", "");

console.log(`Hola ${nombre}, tu edad es ${edad} y el proximo año tendras ${ edad++ }`);
*/

//Segundo
/*
let figura = prompt(
  "Introduce el tipo de figura de la que deseas calcular el area",
  ""
);

switch (figura) {
  case "traingulo":
    let alturaT = Number(prompt("Introduce la altura", ""));
    let baseT = Number(prompt("Introduce la base", ""));
    console.log(`El area es ${(baseT * alturaT) / 2}`);
    break;
  case "rectangulo":
    let alturaR = Number(prompt("Introduce la altura", ""));
    let baseR = Number(prompt("Introduce la base", ""));
    console.log(`El area es ${baseR * alturaR}`);
    break;
  case "circulo":
    let radio = Number(prompt("Introduce el valor del radio", ""));
    console.log(`El area es ${Math.PI * Math.pow(radio, 2)}`);
    break;
  default:
    console.log();
    break;
}
*/

//Tercero
/*
let final = Number(prompt("Introduce el numero hasta cual mostrar pares e impares", ""));

for (let i = 0; i <= final; i++) {
    if (i%2 == 0) {
        console.log(`${i} es par`);
    } else {
        console.log(`${i} es impar`);
    }    
}
*/
//Cuarto
/*
let num = Number(prompt("Introduce un numero entero mayor a cero", ""));

for (let i = 0; i <= num; i++) {
    num *= i;
}
console.log(num);
*/

//Sexto
/*
let sum = 0;
let count;

while(sum < 50){
    let num = Number(prompt("Introduce un numero", ""));
    count++;
    sum = sum + num;
}

console.log(`Se hicieron ${count} sumas`);
console.log(`La suma total de los numeros fue: ${sum}`);
*/

//Septimo
/*


let numeros = [ 3, 8 , 9 , 7, 4 ];
let pares = [];
let impares = [];

for (let numero of numeros) {
  let rnd = Math.ceil(Math.random() * 10);
  let mult = numero * rnd;
  if (mult%2 == 0) {
    console.log(`La multiplicacion fue ${numero}*${rnd} y se ira al array pares`)
    pares.push(numero);
  }else{
    console.log(`La multiplicacion fue ${numero}*${rnd} y se ira al array impares`)
    impares.push(numero);
  }
}

console.log(pares);
console.log(impares);
*/