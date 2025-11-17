/* const getName = async(name) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name)
        }, 1500);
    })
};

const sayHello = ()=>{
    const name = getName();
    return `Hello ${name}`;
}

console.log(sayHello('Marco')); //Imprimira en consola "Hello [Object Promise]" */

/*Modificando con los metodos necesarios para esperar a que se cumplan las promesas
const getName = async() =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Marco')
        }, 1500);
    })
};

const sayHello = async()=>{
    const name = await getName();
    return `Hello ${name}`;
}

sayHello().then(res => console.log(res));
*/

//Mismas funciones quelas vistas en "Promesas"
const users = [{ id: 1, name: "Marco" },{ id: 2, name: "Laura"},{ id: 3, name: "Juan"},];
  
const emails = [{ id: 1, email: "marco@email.com"},{ id: 2, email: "laura@email.com"}];
  
  const getUser = async(id) => {
      const user = users.find(user => user.id == id);
      if (!user) {
        throw new Error(`There is no user with the id: ${id}`); //Constructor de un objeto Error
      } else {
       return user;
      };
  }
  
  const getEmail = async (user) => {
    const email = emails.find(email => email.id == user.id);
      if (!email) {
        throw new Error(`User ${user.name} has no email`);
      } else {
        return({
          id: user.id,
          name: user.name,
          email: email.email
        });
      };
  }
  
const getInfo = async(id) => {
    try {
        const user =  await getUser(id);
        const res = await getEmail(user);
        return `${user.name}'s email is ${res.email}`
    } catch (error) {
        console.log(error);
    }

}

getInfo(3).then(res =>  console.log(res))