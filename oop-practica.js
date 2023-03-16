class Libro{
    constructor(titulo, autor, año, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.genero = genero;
    }

    info(){
        return `${this.titulo} es un libro de ${this.autor}, escrito en ${this.año} y del genero ${this.genero}`;
    }
}
let libros = [];

while (libros.length <= 3) {

    let nuevoTitulo = prompt("Introduce el titulo del libro", "");
    let nuevoAutor = prompt("Introduce el autor del libro", "");
    let nuevoAño = prompt("Introduce el año del libro", "");
    let nuevoGenero = prompt("Introduce el genero del libro (aventuras, terror, fantasia)", "");

    if (nuevoTitulo === "" && nuevoAutor === ""  && nuevoAño === ""  && nuevoGenero == "") {
        alert("Por favor rellene todos los campos")
    }else if(isNaN(nuevoAño)){
        alert("Asegurese de poner un numero valido como año");
    }else if(nuevoAño.length < 4){
        alert("Asegurese de que el año introducido contenga cuatro digitos");
    }else if(nuevoGenero != "aventuras" || nuevoGenero != "terror" || nuevoGenero != "fantasia"){
        alert("Asegurese de que el genero sea valido");
    }else{
            let nuevoLibro = new Libro(nuevoTitulo, nuevoAutor, nuevoAño, nuevoGenero);
            libros.push(nuevoLibro);
        }
}

let mostrarTodo = () => {
    for(const libro of libros) {
        console.log(libro.info());
    }
}

let mismoGenero = buscado => {
    buscado = prompt("Introduzca un genero", "");
    if (buscado == "" || buscado != "aventuras" || buscado != "terror" || buscado != "fantasia"){
        alert("Introduzca  un genero valido")
    } else {
        for(const libro of libros) {
            if (buscado == libro.genero) {
                alert(libro.info());
            }
        }
    }
}