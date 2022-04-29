import TodoItem from './TodoItem.js';

function Todos({$target, initialState}) {
    this.state = initialState;

    const $TodoList = document.createElement("div");
    $TodoList.className = "todos";
    $target.appendChild($TodoList);

    this.setState = nextState => {
        
    }

    this.render = () => {
        const items = this.state.map(item => new TodoItem({$target, initialState: item}));
        items.forEach(item => item.render());
    };
    
    this.render();
}

export default Todos;