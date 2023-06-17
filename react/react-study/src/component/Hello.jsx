import { useState } from 'react';

function Hello(props) {
    let [num, setNum] = useState(0);
    console.log("props::", props)

    function handleClick(a1, a2, e) {
        setNum(num + 1)
        console.log("Hello::handleClick", num)
        // console.log("arg", [a1, a2], e)
    }
    function handleClickBtn() {
        setNum(n => n + 3);
    }
    const ele = (
        <>
            <h1 onClick={handleClick.bind(this, 'bind', '1122')}>{props.msg}</h1>
            <p>num：{num}</p>
            <button onClick={handleClickBtn}>+3</button>
        </>
    );
    return ele;
}

export default Hello;