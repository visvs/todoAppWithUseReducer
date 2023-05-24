import { useReducer } from 'react'
import './App.css'
import { TodoForm } from './FormTodo'
import { TodoList } from './TodoList'

export function App() {

const initialState = [
    {
        id: new Date().getTime(),
        task: 'Limpiar la casa',
        done: false,
    }
]

const todoReducer = (initialState, action) => {
    switch(action.type){
      case "ADD_TODO":
      return [...initialState, action.payload]

      default: initialState
    }
}



  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const addTodoAction = (todo)=> {
    const action = {
      type: 'ADD_TODO',
      payload: todo
    }

    dispatch(action)
  }

  return (
    <>
      <div className='row'>
        <section>
          <h1>{'Todos'}</h1>
          <TodoList todos={todos} />
        </section>
        <section>
          <TodoForm onAddTodo={addTodoAction}/>
        </section>
      </div>
    </>
  )
}

