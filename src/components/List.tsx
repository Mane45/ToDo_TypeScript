import { useContext } from "react"
import { TodoContext } from "../lib/context"
import { ToDoItem } from "./ToDoItem"

export const List: React.FC = () => {
    const context = useContext(TodoContext)
    if (!context) {
        throw new Error("Outside of Provider...")
    }
    const { state } = context
    return <div className="list">
        {
            state.todos.map(todo => <ToDoItem key={todo.id} todo={todo} />)
        }
    </div>
}