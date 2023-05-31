
import { useState } from 'react'
import './App.css'

export function TodoForm({onAddTodo}) {

    const [newTask, setNewTask] = useState("")


    const onHandleChange = (e) => {

        e.preventDefault()

        setNewTask({
            id: new Date().getTime(),
            task: e.target.value,
        })

    }



  return (
    <>
      <div>
          <input type="text" placeholder='Que más tienes que hacer?' name='task' onChange={onHandleChange} />
            <button onClick={()=>onAddTodo(newTask)}>Add Todo</button>
      </div>
    </>
  )
}