/* 
    Fetch API
    blob = binary long object
*/

const buttonImg = document.getElementById('button-img');
const buttonPDF = document.getElementById('button-pdf');


buttonImg.addEventListener('click', ()=>{
    fetch('image.png')
    .then(res => res.blob())
    .then(img => {
        document.getElementById('img').src = URL.createObjectURL(img)   //Crea un objeto a una url valida para ver el objeto
    })
})

buttonPDF.addEventListener('click', ()=>{
    fetch('pdf-demo.pdf')
    .then(res => res.blob())
    .then(pdf => {
        document.getElementById('download-pdf').href = URL.createObjectURL(pdf)   //A partir de un objeto crea una url valida para ver dicho objeto
    })
})