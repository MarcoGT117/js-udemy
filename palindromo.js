let palabra = "hola";

function palindromo(palabra) {
    let palabraArr = Array.from(palabra);
    let palabraArrInvertida = [];
    palabraArr.map(letra=>palabraArrInvertida.unshift(letra));

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
    } else{
        console.log("No es un palindromo");
    }

};

palindromo(palabra);