import { ActionTypes, ITodo, type IAction, type IState } from "./types";

export const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case ActionTypes.put:
            return {
                ...state,
                todos: action.payload as ITodo[]
            }
        case ActionTypes.add:
            return {
                ...state,
                todos: [...state.todos, action.payload as ITodo]
            }
        case ActionTypes.update:
            let found = state.todos.filter(x => x.id == action.payload)
            found[0].completed = !found[0].completed
            return {
                ...state
            }
        case ActionTypes.remove:
            state.todos = state.todos.filter(x => x.id != action.payload)
            return {
                ...state
            }
        default:
            return state
    }
}