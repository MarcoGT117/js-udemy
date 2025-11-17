//Validacion de formularios
const form = document.getElementById('form');
const button = document.getElementById('submitButton');

const name = document.getElementById('name');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
const terms = document.getElementById('terms');

const validForm = {
    name: false,
    email: false,
    gender: false,
    terms: false
};

form.addEventListener('submit', e => {
    e.preventDefault();
    validateForm();
});

name.addEventListener('change', e =>{
    if(e.target.value.trim().length > 0){
        validForm.name = true;
    }

}); 

email.addEventListener('change', e =>{
    if(e.target.value.trim().length > 0){
        validForm.email = true;
    }
}); 

gender.addEventListener('change', e =>{
    if(e.target.checked == true){
        validForm.gender = true;
    }
}); 

terms.addEventListener('change', e =>{
    validForm.terms = e.target.checked;
    e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true)

}); 

const validateForm =  () => {
    const formValues = Object.values(validForm); //Crea un array a partir de los valores de un objeto
    const validation = formValues.findIndex(value => value == false); //Busca en el array un valor falso, si lo encuentra devuelve el indice, de lo contrario devuelve -1

    if (validation == -1) {
        form.submit();
        alert('Form submittted succesfully')
    }else{
        alert('The form is invalid')
    }

}