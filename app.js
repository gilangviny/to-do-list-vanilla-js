// Kumpulkan semua element UI
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearList = document.querySelector("#clear-todos");

// End Kumpulan element UI
todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);

// function add todo list
function addTodo(e) {
    e.preventDefault();

    // membuat li element
    const li = document.createElement("li");

    // menambahkan class pada li element
    li.className = "list-group-item bg-warning text-white d-flex justify-content-between align-items-center mb-1";

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

}
// end function add


// function delete todo list
function deleteTodo (e){
    e.preventDefault();

    if (e.target.classList.contains("delete-todo")){
        const parent = e.target.parentElement;

        parent.remove();
    }
}

