
import './App.css';
import Hello from './component/Hello';
import List from './component/List';
import RForm from './component/RForm';

function App() {
  let msg = "React App";
  let ele = (
    <div className="App">
      <div>
        <Hello msg={msg} />
      </div>
      <p className="summary">
        你可以在这里了解我的想法。
        <br /><br />
        <b>还有科学家们的<i>照片</i></b>！
      </p>
      <List />
      <RForm />
    </div>
  );
  return ele
}

export default App;
