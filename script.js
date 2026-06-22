let tasks = [];

function addTask(){

const taskInput =
document.getElementById(
"taskInput"
);

const priority =
document.getElementById(
"priority"
).value;

const dueDate =
document.getElementById(
"dueDate"
).value;

if(taskInput.value === ""){

alert(
"Please enter a task"
);

return;

}

const task = {

title:
taskInput.value,

priority,

dueDate,

completed:false

};

tasks.push(task);

renderTasks();

taskInput.value = "";

}

function renderTasks(){

const taskList =
document.getElementById(
"taskList"
);

taskList.innerHTML = "";

tasks.forEach(
(task,index)=>{

const li =
document.createElement(
"li"
);

li.className =
"task";

li.innerHTML =

`
<div>

<h3>
${task.title}
</h3>

<p>
Priority:
${task.priority}
</p>

<p>
Due:
${task.dueDate}
</p>

</div>

<div>

<button
onclick=
"toggleTask(${index})">

✓

</button>

<button
onclick=
"deleteTask(${index})">

🗑

</button>

</div>
`;

taskList.appendChild(li);

});

updateStats();

}

function toggleTask(index){

tasks[index].completed =
!tasks[index].completed;

updateStats();

}

function deleteTask(index){

tasks.splice(index,1);

renderTasks();

}

function updateStats(){

    const completed =
    tasks.filter(
        task => task.completed
    ).length;

    document.getElementById(
        "totalTasks"
    ).textContent =
    tasks.length;

    document.getElementById(
        "completedTasks"
    ).textContent =
    completed;

    document.getElementById(
        "pendingTasks"
    ).textContent =
    tasks.length - completed;
}
function searchTask(){

    const searchValue =
    document
    .getElementById(
        "searchTask"
    )
    .value
    .toLowerCase();

    const taskElements =
    document.querySelectorAll(
        ".task"
    );

    taskElements.forEach(task => {

        if(
            task.innerText
            .toLowerCase()
            .includes(searchValue)
        ){

            task.style.display =
            "flex";

        }

        else{

            task.style.display =
            "none";

        }

    });

}
function toggleTheme(){

    document.body
    .classList.toggle(
        "light"
    );

}
