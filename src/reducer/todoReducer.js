
//recibe el estado, acction , la accion a la vez se compone de 2 valores : action.type ADD_TODO, REMOVE_TODO, UPDATE_TODO

import { actions } from "../constants/actions"

//payload: valores que se requieren para ejecutar la accion, new Todo, id todo , id todo, newTodo
export const todoReducer = (initialState, action) => {
    switch(action.type){
      case actions.ADD_TODO:
        //retorna el estado actual, mas el nuevo todo
      return [...initialState, action.payload] //siempre tenemos que retornar un NUEVO estado initialState.push(action.payload)
      //siempre deben tener un default return
      default: initialState
    }
}
