import { readLocalStorage } from "../components/middleware/localStorage";

const { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO } = require("./actionTypes");
const initialState = readLocalStorage('todos') ?? []

export const TodoApp = (state = initialState, action) => {
  switch(action.type){
    case ADD_TODO:
      return [...state, {_id: Date.now(), text: action.text, done: false}]
    case REMOVE_TODO: 
      const todos = state.filter(todo => todo._id !== action.id)
      return [...todos]
    case TOGGLE_TODO:
      return state.map(todo => {
        return todo._id === action.id ? {...todo, done: !todo.done} : todo
      })
    case EDIT_TODO:
      return state.map(todo => {
        return todo._id === action.id ? {...todo, text: action.text}: todo
      })
    default: return state
  }
}