import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO } from "./actionTypes";

export function addTodo(text){
  return {
    type: ADD_TODO,
    text
  }
}

export function removeTodo(id){
  return {
    type: REMOVE_TODO,
    id
  }
}

export function toggleTodo(id){
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function editTodo(text, id){
  return {
    type: EDIT_TODO,
    id,
    text
  }
}