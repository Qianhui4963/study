import { useEffect } from "react"
import { useImmer } from "use-immer"

/*
useEffect 调用时机：

与渲染的先后关系：React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect
调用次数：在不传 deps 依赖项情况下，useEffect 会在每次渲染后都执行
useEffect会返回一个函数，该函数会在下一次渲染之后，执行副作用函数之前调用
*/

function RForm(props) {
    let [FormData, setFormInfo] = useImmer({
        u_name: 'invate',
        selectValue: 'react'
    })
    function handleUNameChange(e) {
        setFormInfo(draft => { draft.u_name = e.target.value })
    }
    function handleSelectChange(e) {
        setFormInfo(draft => { draft.selectValue = e.target.value })
    }
    function handleClickSubmit(e) {
        e.preventDefault()
        console.log(FormData)
    }

    useEffect(() => {
        console.log("useEffect", FormData.selectValue)
        return () => { console.log("useEffect::CallBack") }
    }, [FormData.selectValue]);
    const ele = (
        <>
            <form action="">
                <label htmlFor="u_name">u_name: </label>
                <input type="text" name="u_name" value={FormData.u_name} onChange={handleUNameChange} />
                <br />
                <label htmlFor="Form-select">Form-select:</label>
                <select name="Form-select" value={FormData.selectValue} onChange={handleSelectChange}>
                    <option value="html">html</option>
                    <option value="css">css</option>
                    <option value="js">js</option>
                    <option value="vue">vue</option>
                    <option value="react">react</option>
                </select><br />
                <button type="submit" onClick={handleClickSubmit}>submit</button>
            </form>
            <p>input value: {FormData.u_name}</p>
        </>
    );
    return ele;
}

export default RForm;