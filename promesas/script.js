//Una promesa es un objeto con dos callbacks internos

const users = [
  {
    id: 1,
    name: "Marco",
  },
  {
    id: 2,
    name: "Laura",
  },
  {
    id: 3,
    name: "Juan",
  },
];

const emails = [
  {
    id: 1,
    email: "marco@email.com",
  },
  {
    id: 2,
    email: "laura@email.com",
  },
];

//Modificando esta funcion para hacerla funcionar con promesas en vez de callbacks
const getUser = (id) => {
  //resolve y reject ya viene preprogramado en el objeto Promise, ambos son callbacks
    const user = users.find(user => user.id == id);
    return promise = new Promise((resolve, reject) => {
    if (!user) {//Es igual a user == undefined
      reject(`There is no user with the id: ${id}` );
    } else {
      resolve(user);
    }
  });
}

const getEmail = (user) => {
  const email = emails.find(email => email.id == user.id);
  //Retornamos directamente la promesa para ahorrar una linea de codigo
  return (promise = new Promise((resolve, reject) => {
    if (!email) {
      reject(`User ${user.name} has no email`);
    } else {
      resolve({
        id: user.id,
        name: user.name,
        email: email,
      });
    }
  }));
}


/* Vamos a mezclar ambas promesas para obtener la informacion completa
  getUser(1)
  .then((user) => {
    //.then accede a la propiedad encapsulada en el objeto de la promesa cumplida
    console.log(user);
  })
  .catch((e) => console.log(e)); // .catch se ejecutara si la promesa fue erronea, es decir, si el callback fue reject
*/

getUser(1)
.then(user => getEmail(user))
.then(res => console.log(res))
.catch(e => console.log(e)); //Este catch maneja todos los errores que pudieran ocurrir


