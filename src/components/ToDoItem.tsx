import { useContext } from "react"
import { ActionTypes, ITodo } from "../lib/types"
import { TodoContext } from "../lib/context"

interface Props {
    todo: ITodo
}
export const ToDoItem: React.FC<Props> = ({ todo }) => {
    const context = useContext(TodoContext)
    if (!context) {
        throw new Error("Out of Provider...")
    }
    const { dispatch } = context

    return <div className={todo.completed ? "item completed" : "item"}>
        <p>{todo.text}</p>
        <div>
            <button onClick={() => dispatch({ type: ActionTypes.update, payload: todo.id })}>done</button>
            <button onClick={() => dispatch({ type: ActionTypes.remove, payload: todo.id })}>delete</button>
        </div>
    </div>
}