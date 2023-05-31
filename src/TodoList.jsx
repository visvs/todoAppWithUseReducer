import './App.css'
import { TodoItem } from './TodoItem'

export function TodoList({todos = []}) {

  return (
    <>
     {todos.map((todo)=> <TodoItem key={todo.id} todo={todo} />)}
    </>
  )
}