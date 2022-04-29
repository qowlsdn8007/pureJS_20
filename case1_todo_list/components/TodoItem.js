function TodoItem({$target, initialState}) {
    this.state = initialState;
    const { id, content, completed } = this.state;
    const isChecked = completed ? 'checked' : '';
    const editButton = "todo_edit_button";
    const editIcon = "far fa-edit";

    const removeButton = "todo_remove_button";
    const removeIcon = "far fa-trash-alt";

    const editConfirmButton = "todo_edit_confirm_button";
    const editConfirmIcon = "fas fa-check";

    const editCancelButton = "todo_edit_cancel_button";
    const editCancelIcon = "fas fa-times";
    

    const $todoItem = document.createElement("div");
    $todoItem.className = "item";
    $target.appendChild($todoItem);
    this.setState = nextState => {


        this.render();
    }

    this.render = () => {
        const checkbox = `<input type="checkbox" class="todo_checkbox" ${isChecked} />`;
        const label = `<label>${content}</label>`;
        const text = `<input type="text" value=${content} />`;
        const contentBox = `<div class="content">${checkbox + label + text}</div>`;


        const button1 = `<button class=${btn1}> <i class=${icon1}></i></button>`;
        const button2 = `<button class=${btn2}> <i class=${btn2}></i></button>`;
        const buttonGroup = `<div class="item_buttons content_buttons">${button1 + button2}</div>`;

        const htmlString =`<div class="item">${contentBox}</div>`;
        $todoItem.innerHTML = htmlString;
    }

    this.render();
}

export default TodoItem;