import TodoTitle from "./component/TodoTitle"
import ToDoSection from "./component/TodoSection";

import './App.css';

const title = "ToDoList";

function App() {





  const ele = (
    <div className="App">
      <TodoTitle title={title} />
      <ToDoSection />
    </div>
  );
  return ele
}

export default App;
