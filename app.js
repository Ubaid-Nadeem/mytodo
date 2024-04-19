let name = document.getElementById('name');
let user_name = document.getElementById('user_name');
let todo_value = document.getElementById('todo_value');
let todo_ul = document.getElementById('todo_ul');
let content_view = document.getElementById('content_view');
let todo_view = document.getElementById('todo-view');
let user_info = document.getElementById('user_info');
let delete_all = document.getElementById('delete_all')



let get_user_name = JSON.parse(localStorage.getItem("mytodo_user"));
let todos = JSON.parse(localStorage.getItem("mytodos")) || []
console.log(get_user_name, todos)


if (get_user_name) {

    user_name.innerText = get_user_name

    todos.forEach((value, key) => {
        todo_ul.innerHTML += `  <li ><p>${value}</p> <i onClick='removeItem(event)' id =  ${key} class="fa-solid fa-trash delete"></i></li>`
    })

    todo_view.style.display = 'block'
    content_view.style.display = 'none'
    user_info.style.display = 'inline'

    if (todos.length >= 1) {
        delete_all.style.display = 'block'
    }

}
else {
    todo_view.style.display = 'none'
    content_view.style.display = 'block'
    user_info.style.display = 'none'

}

function getName() {
    console.log(name.value);
    user_name.innerText = name.value

    localStorage.setItem("mytodo_user", JSON.stringify(name.value));
    window.location.reload()
}

function getTodoValue() {

    if (todo_value.value === '' || todo_value.value === ' ') {
    }
    else {
        console.log(todos.length)
        todos.push(todo_value.value)
        todo_ul.innerHTML += `  <li ><p>${todo_value.value}</p> <i id = ${todos.length + 1} onClick='removeItem(event)' class="fa-solid fa-trash delete"></i></li>`
        localStorage.setItem("mytodos", JSON.stringify(todos));
        todo_value.value = ''
        delete_all.style.display = 'block'
    }

}

function Delete() {
    let isDelete = confirm('If you logout, all item will be deleted');
    if (isDelete) {
        localStorage.removeItem('mytodos');
        localStorage.removeItem('mytodo_user');
        window.location.reload()
    }
}

function removeItem(event) {
    todos.splice(event.target.id, 1);
    localStorage.setItem("mytodos", JSON.stringify(todos));
    todo_ul.innerHTML = ''
    todos.forEach((value, key) => {
        todo_ul.innerHTML += `<li ><p>${value}</p> <i onClick='removeItem(event)' id =  ${key} class="fa-solid fa-trash delete"></i></li>`
    })
}

function deleteAll(){
    todos.splice(0)
    localStorage.setItem("mytodos", JSON.stringify(todos));
    console.log(todos);
    todo_ul.innerHTML = ''

}