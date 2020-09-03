// Kumpulkan semua element UI
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearList = document.querySelector("#clear-todos");

// End Kumpulan element UI

// todoForm.addEventListener("submit", addTodo);
// todoList.addEventListener("click", deleteTodo);
// clearList.addEventListener("click", clearTodos);
// filterInput.addEventListener("keyup", filterTodos);

immediateLoadEventListener();
// kumpulan eventListener
function immediateLoadEventListener() {

    // mendapatkan todos dari localstorage dan tampilkan dan render di browsor
    document.addEventListener("DOMContentLoaded", getTodoss);


    // ini adalah event untuk menambahkan todo
    todoForm.addEventListener("submit", addTodo);

    // event untuk menghapus 1 todo
    todoList.addEventListener("click", deleteTodo);

    // event untuk menghapus semua todo
    clearList.addEventListener("click", clearTodos);

    // event untuk memfiter todos
    filterInput.addEventListener("keyup", filterTodos);
}

function getTodoss() {
    let todos;

    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach((todo) => {
        // membuat li element
        const li = document.createElement("li");

        // menambahkan class pada li element
        li.className = "todo-item list-group-item bg-warning text-white d-flex justify-content-between align-items-center mb-1";

        // menambahkan children ke dalam element li
        li.appendChild(document.createTextNode(todo));

        // membuat delete button
        const a = document.createElement("a");

        // memberi properti untuk a element
        a.href = "#";
        a.className = "badge badge-danger delete-todo";
        a.innerHTML = "Delete";

        // menyelipkan element a ke dalam children li
        li.appendChild(a);

        // memasukan element li kedalam element todoList
        todoList.appendChild(li);
    })
}
// function add todo list
function addTodo(e) {
    e.preventDefault();

    if (todoInput.value) {

        // membuat li element
        const li = document.createElement("li");

        // menambahkan class pada li element
        li.className = "todo-item list-group-item bg-warning text-white d-flex justify-content-between align-items-center mb-1";

        // menambahkan children ke dalam element li
        li.appendChild(document.createTextNode(todoInput.value))

        // membuat delete button
        const a = document.createElement("a");

        // memberi properti untuk a element
        a.href = "#";
        a.className = "badge badge-danger delete-todo";
        a.innerHTML = "Delete";

        // menyelipkan element a ke dalam children li
        li.appendChild(a);

        // memasukan element li kedalam element todoList
        todoList.appendChild(li);

        addTodoLocalStorage(todoInput.value);

        todoInput.value = "";
    } else {
        alert("Masukkan Input anda..");
    }
}

function addTodoLocalStorage(todoInputValue) {
    let todos;

    if (localStorage.getItem("todos") == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todoInputValue)

    localStorage.setItem("todos", JSON.stringify(todos))
}
// end function add


// function delete todo list
function deleteTodo(e) {
    e.preventDefault();

    if (e.target.classList.contains("delete-todo")) {

        if (confirm("Anda Yakin akan menghapus ini?")) {
            const parent = e.target.parentElement;

            parent.remove();
        }
    }
}

// function clear list
function clearTodos() {
    todoList.innerHTML = "";
}

// function filter inputan
function filterTodos(e) {
    const filterText = e.target.value.toLowerCase();
    const todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach((item) => {
        const itemText = item.firstChild.textContent.toLowerCase();

        if (itemText.indexOf(filterText) !== -1) {
            item.setAttribute("style", "display: block;");
        } else {
            item.setAttribute("style", "display: none !important;")
        }
    })

    console.log(todoItems);
}