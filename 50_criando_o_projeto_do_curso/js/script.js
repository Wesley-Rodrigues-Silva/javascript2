// função que adiciona tarefa
function addTask(){
    
// titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value;

if (taskTitle.length == 0){
    window.alert('Adicione uma tarefa para prosseguir!')

}

if(taskTitle){
// clonar o templete
    const templete = document.querySelector('.templete');

    const newTask = templete.cloneNode(true);

// adiciona titulo
    newTask.querySelector('.task-title').textContent = taskTitle;

// remover as classes
    newTask.classList.remove('templete');
    newTask.classList.remove('hide');

// adiciona tarefa na lista
    const list = document.querySelector('#task-list');

    list.appendChild(newTask);

// adicionar o evento de remover
const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(){
    removeTask(this);
});

// adicioanr o evento de completar tarefa
const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
    completeTask(this);
})

// limpar texto
document.querySelector('#task-title').value = '';

    }


}

// função de remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}


// função de completar tarefa
function completeTask(task){

    const taskComplete = task.parentNode;

    taskComplete.classList.toggle('done');
}


// evento de adicionar tarefa

    const addBtn = document.querySelector('#add-btn')

    addBtn.addEventListener('click', function(e){
    
    e.preventDefault();
  
    addTask();
})