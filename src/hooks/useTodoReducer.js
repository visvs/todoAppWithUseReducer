import { useReducer } from "react"
import { todoReducer } from "../reducer/todoReducer"
import { initialState } from "../state"
import { actions } from "../constants/actions"

export function useTodoReducer(){

    //TODO: cuando el estado inicial viene de una api externa, requiere consulta asincrona y es donde entra en funcion la funcion init
    const [todos, dispatch] = useReducer(todoReducer, initialState) //reducer funcion reductora, initialState, init
//retorna el estado, dispatch es una funcion que nos permitira ejecurtar cualquier accion que definamos en el reducer/funcion reductora

const addTodo = (todo)=> {
  const action = {
    type: actions.ADD_TODO,
    payload: todo
  }

  //el dispatch recibe el action, {type, payload}
  dispatch(action)
}


    return {
        todos,
        addTodo
    }
}