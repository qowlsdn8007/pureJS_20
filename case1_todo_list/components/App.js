import Header from './Header.js';
import Todos from './Todos.js';


function App({$target}) {
    this.state = {
        item: [
            {
                id: 1,
                content: "test",
                completed: "false"
            }
        ]
    }
    const header = new Header({$target});

    const todos = new Todos({$target, initialState: this.state.item});

    
};

export default App;