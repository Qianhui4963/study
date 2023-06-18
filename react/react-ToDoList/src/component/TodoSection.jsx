import store from "../store";
import { addList } from "../store";

let { data } = store.getState()

setTimeout(() => {
    store.dispatch(addList({ id: 'addList', title: 'addList', completed: false }))
    console.log("setTimeout:data::", store.getState())
    data = store.getState().data
    data.slice()
    console.log(data)
}
    , 5000)
console.log(data)
function ToDoSection(props) {
    const ele = (
        <section className="todo-section">
            <div className="new-todo">
                <input className="new-todo-box" type="text" placeholder="What needs to be done?" />
                <input className="switch-all" type="checkbox" id="switch-all" />
                <label className="switch-all" htmlFor="switch-all"></label>
            </div>
            <ul className="todo-list">
                {
                    data.map((item, index) => (
                        <li className={item.completed ? 'todo completed' : 'todo'} key={item.id}>
                            <input className="switch" type="checkbox" />
                            <label>{item.title}</label>
                            <button className="destroy"></button>
                        </li>
                    ))
                }
                <li className="todo">
                    <input className="switch" type="checkbox" />
                    <label htmlFor="">asdasdas</label>
                    <button className="destroy"></button>
                </li>
            </ul>
            <div className="todo-tools">
                <div className="todo-count">
                    <span>To do total：</span>
                    <span className="total">2</span>
                </div>
                <ul className="tools-container">
                    <li><a href="#/all" className="selected">All</a></li>
                    <li><a href="#/active">active</a></li>
                    <li><a href="#/completed">Completed</a></li>
                    <li><button className="clear-completed"> Clear completed </button></li>
                </ul>
            </div>
        </section>
    );
    return ele;
}

export default ToDoSection;