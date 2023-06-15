import { useState } from 'react';
import { useImmer } from "use-immer"

function List(params) {
    let _style = {
        color: 'red'
    };
    let [data, setInfo] = useImmer([
        { msg: "mainstream", active: 0 },
        { msg: "format", active: 1 },
        { msg: "equality", active: 0 },
    ]);

    function handleClick(item, index) {
        // let temp = data;
        // temp.forEach((_item, i) => { _item.active = i == index ? 1 : 0 })
        // setInfo(
        //     [...temp]
        // )
        setInfo(draft =>
            draft.forEach(
                (_item, i) => { _item.active = i == index ? 1 : 0 })
        )
    }
    const ele = (
        <ul>
            {
                data.map((item, index) => (
                    <li key={item.msg} style={item.active ? _style : {}} onClick={handleClick.bind(this, item, index)}>{item.msg}</li>
                ))
            }
        </ul>
    );
    return ele;
}

export default List;