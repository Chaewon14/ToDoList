const inputBox = document.getElementById("input-todo");
const Btn_addToDo = document.getElementById("button-addToDo");
const toDoList = document.getElementById("todo-list");
const emptyMessage = document.getElementById("empty-message");

function updateTodoList(){
    if (toDoList.children.length == 0){
        emptyMessage.style.display = 'flex';
    } else {
        emptyMessage.style.display = 'none';
    }
}

function handleAddToDo(){
    if (!inputBox.value.trim()){
        alert('내용을 입력해주세요.');
        inputBox.value=""; 
    }else{
        /*할일 추가*/
        var single_item_todo = document.createElement('div');
        var text_div = document.createElement('div');
        var btn_delete = document.createElement('button');
        var checkbox = document.createElement('input')
        
        single_item_todo.className = "single-item-todo";        
        text_div.innerText = inputBox.value;
        btn_delete.innerText = "X";
        checkbox.type='checkbox'

        single_item_todo.appendChild(checkbox);
        single_item_todo.appendChild(text_div);
        single_item_todo.appendChild(btn_delete);
        toDoList.appendChild(single_item_todo);
        inputBox.value="";

        /*할일 삭제*/
        btn_delete.addEventListener('click', function(){
            toDoList.removeChild(single_item_todo)
            updateTodoList();
        })

        checkbox.addEventListener('change', function(){
            if (checkbox.checked){
                text_div.style.textDecoration='line-through';
                text_div.style.color='white';
                single_item_todo.style.backgroundColor='gray';
            }else {
                text_div.style.textDecoration='';
                text_div.style.color='';
                single_item_todo.style.backgroundColor='';
                
            }
        })

        updateTodoList();
    }

}

Btn_addToDo.addEventListener("click", handleAddToDo);

/*초기 메시지 업데이트*/
updateTodoList();