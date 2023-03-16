let palabra = "hola";

function palindromo(palabra) {
    let palabraArr = Array.from(palabra);
    let palabraArrInvertida = [];
    palabraArr.map(letra=>palabraArrInvertida.unshift(letra));

    let count = 0;
    for(let letra of palabraArr){
        for (let letraI of palabraArrInvertida) {
            if(letra === letraI){
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