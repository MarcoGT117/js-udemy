const pendingTasks = document.getElementById('pending-tasks');
const finishedTasks = document.getElementById('finished-tasks');

pendingTasks.addEventListener('dragstart', e =>{
    //Para firefox, dataTransfer
        //setData: establece la informacion que queremos compartir
        //getData: Obtiene la informacion que deseamos
        
        e.dataTransfer.setData('text/plain', e.target.id);
        // e.dataTransfer.getData('text');
});

pendingTasks.addEventListener('drag', e =>{
    e.target.classList.add('active');
});

pendingTasks.addEventListener('dragend', e =>{
    e.target.classList.remove('active');
});

finishedTasks.addEventListener('dragover', e => {
    e.preventDefault();
});

finishedTasks.addEventListener('drop', e => {
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text'))//id del elemento arrastrado
    finishedTasks.appendChild(pendingTasks.removeChild(element));
    element.classList.remove('active');
});

//Codigo para regresar elementos de finished a pending
finishedTasks.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

finishedTasks.addEventListener('drag', e => {
    e.target.classList.add('active');
});

finishedTasks.addEventListener('dragend', e =>{
    e.target.classList.remove('active');
});

pendingTasks.addEventListener('dragover', e => {
    e.preventDefault();
});

pendingTasks.addEventListener('drop', e => {
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text'))//id del elemento arrastrado
    pendingTasks.appendChild(finishedTasks.removeChild(element));
    element.classList.remove('active');
});