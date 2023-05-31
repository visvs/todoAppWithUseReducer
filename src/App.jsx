import { useReducer } from 'react'
import './App.css'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { Grid } from '@mui/material'

export function App() {

const initialState = [
    {
        id: new Date().getTime(),
        task: 'Limpiar la casa',
        done: false,
    }
]

//recibe el estado, acction , la accion a la vez se compone de 2 valores : action.type ADD_TODO, REMOVE_TODO, UPDATE_TODO
//payload: valores que se requieren para ejecutar la accion, new Todo, id todo , id todo, newTodo
const todoReducer = (initialState, action) => {
    switch(action.type){
      case "ADD_TODO":
        //retorna el estado actual, mas el nuevo todo
      return [...initialState, action.payload] //siempre tenemos que retornar un NUEVO estado initialState.push(action.payload)

      //siempre deben tener un default return
      default: initialState
    }
}

//TODO: cuando el estado inicial viene de una api externa, requiere consulta asincrona y es donde entra en funcion la funcion init
  const [todos, dispatch] = useReducer(todoReducer, initialState) //reducer funcion reductora, initialState, init
  //retorna el estado, dispatch es una funcion que nos permitira ejecurtar cualquier accion que definamos en el reducer/funcion reductora

  const addTodoAction = (todo)=> {
    const action = {
      type: 'ADD_TODO',
      payload: todo
    }

    dispatch(action)
  }

  return (
      <Grid container spacing={2} className=''>
        <Grid item xs={12} md={6}>
        <h1>{'Todos'}</h1>
          <TodoList todos={todos} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TodoForm onAddTodo={addTodoAction}/>
        </Grid>
      </Grid>
  )
}

