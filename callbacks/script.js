//Un callback es una funcion que se ejecuta por medio de otra funcion
//No son asincronos (Se ejecutan por orden)
/*
// const getUser = (id, cb) => {
//     const user = {
//         name : 'Marc0',
//         id : id //Valor del objeto : valor del parametro
//     }
//     if(id ==2){
//         cb('User does not exist')
//     } else{
//         cb(null. user)
//     }
// }

// getUser(1, (e, user) => {
//     if(e) {
//         return console.log(e) }
//         else
//         {console.log(`User name is ${user.name}`);
//     }
// })
*/

const users = [
    {
        id : 1,
        name : 'Marco'
    },
    {
        id : 2,
        name : 'Laura'
    },
    {
        id : 3,
        name : 'Juan' 
    }
];

const emails = [
    {
        id : 1,
        email : 'marco@email.com'
    },
    {
        id : 2,
        email : 'laura@email.com'
    }
];

const getUser = (id, cb) =>{
    const user = users.find(user => user.id == id);

    if (!user){//Es igual a user == undefined
        cb('There is no user with such id');
    } else{
        cb(null, user);
    }
    console.log(user);
}

const getEmail = (user, cb) =>{
    const email = email.find(email => email.id == user.id);

    if (!email){//Es igual a user == undefined
        cb(`User ${user.name} has no email`);
    } else{
        cb(null, {
            id : user.id,
            name : user.name,
            email : user.email
        });
    }
    console.log(user);
}

getUser(1, (e, user) => {
    if (e) {
        return console.log(e);
    } else {
        getEmail(user, (e, res) => {
            if(e){
                return console.log(e);;
            } else{
                console.log(res);
            }
        })
    }
});