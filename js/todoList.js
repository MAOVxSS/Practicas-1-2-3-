// !Sacando la informacion de la fecha

// !Informacion de las tares 

const tasksContainer = document.getElementById('taskContainer');
// ?Con la siguiente funcion establecemos el dia en las respectivas etiquetas

const addNewTask = event => {
    event.preventDefault();
    const {value} = event.target.taskText;
    if(!value) return; //?Si no se recibe ningun valor no hace nada
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset(); //?Se limpia el output
}

const changeTaskState = event => {
    event.target.classList.toggle('done');
}

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el);
    })
    return [...toDo, ...done];
}

const renderOrderedTask = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

/*Funcion para el modo oscuro */
const ibdark = document.getElementById('ibdark');
let bdark = ibdark.checked;
const body = document.querySelector('body');

ibdark.addEventListener('click', e => {
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));
});

function load() {
    const darkmode = localStorage.getItem('darkmode');

    if (!darkmode) {
        store('false');

    } else if (darkmode == 'true') {
        body.classList.add('darkmode');
    }
}

function store(value) {
    localStorage.setItem('darkmode', value);
}
