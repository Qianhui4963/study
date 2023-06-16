
import { useImmer } from "use-immer"

function RForm(props) {
    let [FormData, setFormInfo] = useImmer({
        u_name: 'invate'
    })
    function handleUNameChange(e) {
        setFormInfo(draft => { draft.u_name = e.target.value })
    }
    function handleClickSubmit(e) {
        e.preventDefault()
        console.log(FormData)
    }
    const ele = (
        <>
            <form action="">
                <label htmlFor="u_name">u_name: </label>
                <input type="text" name="u_name" value={FormData.u_name} onChange={handleUNameChange} />
                <button type="submit" onClick={handleClickSubmit}>submit</button>
            </form>
            <p>input value: {FormData.u_name}</p>
        </>
    );
    return ele;
}

export default RForm;