class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  saludar() {
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido}, mi edad es ${this.edad} ${this.edad == 1 ? "año" : "años"}`
    );
  }
}

const juan = new Persona("Juan", "Perez", 30);
juan.saludar();
const maria = new Persona("Maria", "Perez", 35);
maria.saludar();
const miguel = new Persona("Miguel", "Gomez", 1);
miguel.saludar();
