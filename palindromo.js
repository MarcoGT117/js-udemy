function palindromo(palabra) {
    let palabraArr = Array.from(palabra); //Transforma el string dado en un string
    let palabraArrInvertida = [...palabraArr].reverse(); //Invierte el array
    let palabraInvertida = palabraArrInvertida.join(""); //Crea un string a partir del array invertido, join() elimina las comas que se generarian si solo se usara el metodo toString()
        
    if (palabra === palabraInvertida) {
        console.log("Es un palindromo");
    } else {
        console.log("No es un palindromo");
    }
}

let test = "hola";
palindromo(test); // -> No es un palindromo

let test2 = "anitalavalatina";
palindromo(test2); // -> Es un palindromo
