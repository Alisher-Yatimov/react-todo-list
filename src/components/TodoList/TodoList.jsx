import React from 'react'
import {connect} from 'react-redux'
import Todo from '../Todo/Todo'
import './style.css'

function TodoList({todos}) {
  if(!todos.length){
    return <h5>Список дел пуст</h5>
  }
  return todos.map(todo => {
    const classList = todo.done ? 'todo-element done' : 'todo-element'
    return <Todo todoText={todo.text} classes={classList} key={todo._id} todoId={todo._id}/>
  })
}
const mapStateToProps = state => {
  return {
    todos: state
  }
}
export default connect(mapStateToProps, null)(TodoList)