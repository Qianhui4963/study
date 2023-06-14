import { useState } from 'react';

function List(params) {
    let _style = {
        color: 'red'
    };
    let [data, setInfo] = useState([
        { msg: "mainstream", active: 0 },
        { msg: "format", active: 1 },
        { msg: "equality", active: 0 },
    ]);

    function handleClick(d, index) {
        let temp = data;
        temp.forEach((_d, i) => { _d.active = i == index ? 1 : 0 })
        setInfo(
            [...temp]
        )
        console.log("List::handleClick", d)
    }
    const ele = (
        <ul>
            {
                data.map((d, index) => (
                    <li key={d.msg} style={d.active ? _style : {}} onClick={handleClick.bind(this, d, index)}>{d.msg}</li>
                ))
            }
        </ul>
    );
    return ele;
}

export default List;