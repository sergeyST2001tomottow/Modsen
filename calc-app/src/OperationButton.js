import { ACTIONS } from "./App"

export default function OperationButton ({dispatch, operation}) {
    return <button onClick={()=> dispatch({type: ACTIONS.PICK_OPERATION,
        payload: {operation}})}>{operation}</button>
}