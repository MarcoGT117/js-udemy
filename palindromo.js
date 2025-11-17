function palindromo(palabra) {
    
    let palabraArr = Array.from(palabra);
    let palabraArrInvertida = [];
    //El metodo map se aplica sobre cada elemento de palabraArr, este aplicara la funcion flecha para realizar
    //en cada elemento del array palabraArr (que ahora sera letra) un unshift y agregarlo al principio del array
    //palabraArrInvertida
    palabraArr.map(letra=>palabraArrInvertida.push(letra));
    console.log(palabraArr.length);
    console.log(palabraArrInvertida)
    let count = 0;

    for(let i= 0; i >= palabraArr.length; i++){
        for (let j = 0 ;j >= palabraArrInvertida.length; j++) {
            if(palabraArr[i] === palabraArrInvertida[j]){
                count= count + 1;
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

let test2 = "anilina";
palindromo(test2); // -> Es un palindromo
