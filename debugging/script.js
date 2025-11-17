const form = document.getElementById('form');
const pResult = document.getElementById('result');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (e.target.number1.value != '' && e.target.number2.value != '') {
        const n1 = Number(e.target.number1.value);
        const n2 = Number(e.target.number2.value);
        const result = n1 + n2;

        pResult.textContent = `${n1} + ${n2} = ${result}`;
        e.target.reset();
    } else {
        pResult.textContent = 'Please fill all the fields';
    }
})