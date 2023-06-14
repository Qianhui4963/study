import { useState } from 'react';

function Hello(params) {
    let msg = "Hello World";
    let [num, setNum] = useState(0);


    function handleClick(a1, a2, e) {
        setNum(num + 1)
        console.log("Hello::handleClick", num)

        // console.log("arg", [a1, a2], e)
    }
    const ele = (
        <>
            <h1 onClick={handleClick.bind(this, 'bind', '1122')}>{msg}</h1>
            <p>num：{num}</p>
        </>
    );
    return ele;
}

export default Hello;