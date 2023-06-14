
import './App.css';

function App() {
  let msg = "Hello World";
  let _style = {
    color: 'red',
    fontSize: '33px'
  };
  let arr = [
    (<p>p1 element</p>),
    (<p style={_style}>p2 element</p>),
    (<p>p3 element</p>),
  ];
  let ele = (
    <div className="App">
      <div>
        <h1>{msg}</h1>
      </div>
      <p className="summary">
        你可以在这里了解我的想法。
        <br /><br />
        <b>还有科学家们的<i>照片</i></b>！
      </p>
      {arr}
    </div>
  );
  console.log(arr)
  return ele
}

export default App;
