function palindromo(palabra) {
    let palabraArr = Array.from(palabra);
    let palabraArrInvertida = [];
    //El metodo map se aplica sobre cada elemento de palabraArr, este aplicara la funcion flecha para realizar
    //en cada elemento del array palabraArr (que ahora sera letra) un unshift y agregarlo al principio del array
    //palabraArrInvertida
    palabraArr.map(letra=>palabraArrInvertida.unshift(letra));
    console.log(palabraArr)
    let count = 0;

    for(let i= 0; i > palabraArr.length; i++){
        for (let j = 0 ;j > pabraArrInvertida.length; j++) {
            if(palabraArr[i] === palabraArrInvertida[j]){
                count++;
            };
        }
    }

    if (count == palabraArr.length) {
        console.log("Es un palindromo");
    } else {
        console.log("No es un palindromo");
    }
}

let test = "hola";
palindromo(test); // -> No es un palindromo

let test2 = "anitalavalatina";
palindromo(test2); // -> Es un palindromo
