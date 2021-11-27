import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

export default function rootReducer(state = {}, action) {
    return  {
        todos: todosReducer(state.todos, aciton),
        filters: filtersReducer(state.filters, action)
    }
}