/* 
    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeoLocation/geolocation
*/

const button = document.getElementById('button');

button.addEventListener('click', () =>{
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(getPosition, error, options)

});

const getPosition = position =>{
    console.log(position);
};

const error = error => {
    console.log(error);
}

const options = {
    enableHighAccuracy : true,  //Booleano quie pòr default es false, activa otras caracteristicas para obtener la geolocalizacion, como el acelerometro, gps, etc.
    timeout : 5000, //El tiempo maximo (en ms) que le establecemos para retornar la localizacion
    maximunAge: 0   //Establece de cuanta antiguedad podemos tomar la posicion almacenada en cache (en ms, 0 siempre solicita informacion en tiempo real, "Infinity" retornara simpre la posicion almacenada en cache)
}