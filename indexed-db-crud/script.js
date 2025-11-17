/* 
IndexedDB
    -Es una manerea de añmeacenar datos de manera persistente en el navegador.
    -Almacena pares llave-valor. Los valores pueden ser objetos con estructuras complejas.
    -Esta API es mayormente asincrona.
    -Usa eventos DOM para notificar cuando los resultados estan disponibles.
    -Es orientada a objetos.
*/

/* Creacion de DB y sus metodos
        -Se crea a traves del objeto indexedDB y el metodo open()
        -Se puede comprobar si la DB existe o si debe ser creada mediante onupgradeneeded()
        -Crea el almacen de objetos mediante createObjectStore()
        -Los eventos de exito y error se escuchan mediante onsuccess() y onerror()

Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup
*/

const indexedDB = window.indexedDB;
const form = document.getElementById("form");
const tasks = document.getElementById("tasks");

if (indexedDB && form) {
  let db;
  //.open(NombreDeLaDB, version)
  const request = indexedDB.open("tasksList", 1);

  request.onsuccess = () => {
    db = request.result;
    console.log("OPEN", db);
    //Muestra los datos en cuanto haya conexiin con indexedDB
    readData();
  };

  request.onupgradeneeded = (e) => {
    db = e.target.result;
    console.log("Create", db);
    const objectStore = db.createObjectStore("tasks", {
      keyPath: "taskTitle",
    });
  };

  request.onerror = (error) => {
    console.log("Error", error);
  };

  //Create
  const addData = (data) => {
    const transaction = db.transaction(["tasks"], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.add(data);
    //Hay que lanzar de nuevo readData para borrar la lista gnenerada previamente en el HTML y volver a imprimirla con los datos actualizados
    readData();
  };

    //Read
    const readData = () => {
        const transaction = db.transaction(["tasks"], "readonly"); //Readonly se puede omitir puesto que es el comportamiento por default de transaction
        const objectStore = transaction.objectStore("tasks");
        const request = objectStore.openCursor();
        const fragment = document.createDocumentFragment();
    
        request.onsuccess = (e) => {
          const cursor = e.target.result;
    
          if (cursor) {
            //Crear un elemento <p>
            const taskTitle = document.createElement("p");
            //Asignando el contenido dependiendo de la posicion en que se encentr el cursor en la db
            taskTitle.textContent = cursor.value.taskTitle;
            //Usar el fragmento de codigo para incrustar lo deseado en el html
            fragment.appendChild(taskTitle);
    
            //Mismo procedimiento
            const taskPriority = document.createElement("p");
            taskPriority.textContent = cursor.value.taskPriority;
            fragment.appendChild(taskPriority);
    
            //Añadir botones update y delete
            const taskUpdate = document.createElement("button");
            taskUpdate.dataset.type = "update";
            taskUpdate.dataset.key = cursor.key;
            taskUpdate.textContent = "Update";
            fragment.appendChild(taskUpdate);
            //Delete
            const taskDelete = document.createElement("button");
            taskDelete.textContent = "Delete";
            taskDelete.dataset.type = "delete"
            taskDelete.dataset.key = cursor.key;
            fragment.appendChild(taskDelete);
    
            //Usado para hacer que se recorra toda la db, como si fuerra un bucle
            cursor.continue();
          } else {
            tasks.textContent = "";
            tasks.appendChild(fragment);
          }
        };
      };

  //Update
  const updateData = (data) => {
    const transaction = db.transaction(["tasks"], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.put(data);
    request.onsuccess = () => {
      form.button.dataset.action = "add";
      form.button.textContent = "Add task";
      readData();
    };

    //Funcion para obtener la info del elemento que queremos actualizar
    const getData = (key) => {
      const transaction = db.transaction(["tasks"], "readwrite");
      const objectStore = transaction.objectStore("tasks");
      const request = objectStore.get(key);

      request.onsuccess = (e) => {
        form.task.value = request.result.taskTitle;
        form.priority.value = request.result.taskPriority;
        form.button.dataset.action = "update";
        form.button.textContent = "Update Task";
      };
    };
    //Se lanza la funcion para refrescar el documento con los datos actualizados
    readData();
  };

  const deleteData = key =>{
    const transaction = db.transaction(["tasks"], "readwrite");
    const objectStore = transaction.objectStore("tasks");
    const request = objectStore.dlelete(key);
    request.onsuccess = () => {
      form.button.dataset.action = "add";
      form.button.textContent = "Add task";
    };

    //Funcion para obtener la info del elemento que queremos actualizar
    const getData = (key) => {
        const transaction = db.transaction(["tasks"], "readwrite");
        const objectStore = transaction.objectStore("tasks");
        const request = objectStore.put(data);
        request.onsuccess = () => {


      };
    };
    //Se lanza la funcion para refrescar el documento con los datos actualizados
    readData();
  }

  //Evento lanzado al presionar botones del form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      taskTitle: e.target.task.value,
      taskPriority: e.target.priority.value,
    };

    if (e.target.button.dataset.action == "add") {
      addData(data);
    } else if (e.target.button.dataset.action == "update") {
      updateData(data);
    }
  });

  tasks.addEventListener("click", (e) => {
    if (e.target.dataset.type == "update") {
      getData(e.target.dataset.key);
    }else if (e.target.dataset.type == "delete") {
      deleteData(e.target.dataset.key);
    }
  });
}
