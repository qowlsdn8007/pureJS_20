
function TodoItem({$target, initialState}) {
    this.state = initialState;

    const $todoItem = document.createElement("div");
    $target.appendChild($todoItem);

    this.setState = nextState => {


        this.render();
    }

    this.render = () => {
        $todoItem.
    }

    this.render();
}