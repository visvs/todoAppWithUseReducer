import './App.css'

export function TodoItem({todo}) {

  return (
    <>
      <div>
          <p>{todo.task}</p>
      </div>
    </>
  )
}
