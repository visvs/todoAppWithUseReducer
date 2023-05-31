import './App.css'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { Grid } from '@mui/material'
import { useTodoReducer } from './hooks/useTodoReducer'

export function App() {

  const { todos, addTodo } = useTodoReducer()

  return (
      <Grid container spacing={2} className=''>
        <Grid item xs={12} md={6}>
        <h1>{'Todos'}</h1>
          <TodoList todos={todos} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TodoForm onAddTodo={addTodo}/>
        </Grid>
      </Grid>
  )
}

