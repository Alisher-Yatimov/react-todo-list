import React, {useState} from 'react'
import { connect } from 'react-redux'
import {removeTodo, toggleTodo, editTodo} from '../../redux/actions'
import { writeToLocalStorage } from '../middleware/localStorage'
import EditForm from '../EditForm/EditForm'
import './style.css'

function Todo({todoText, removeTodo, todoId, toggleTodo, classes, editTodo}) {
  const [editMode, setEditMode] = useState(false)

  const editTodoFunc = (e) => {
    e.preventDefault()
    editTodo(e.target.todo.value, todoId)
    setEditMode(false)
  }

  return (
    <li className={classes}>
      {editMode ? <EditForm editTodo={editTodoFunc} todoText={todoText}/> : <p>{todoText}</p>}
      <div className={editMode ? "dis" : "btn-block"}>
        <button className="btn ed" onClick={() => setEditMode(true)}>edit</button>
        <button className="btn imp" onClick={() => {toggleTodo(todoId); writeToLocalStorage('todos')}}>&#33;</button>
        <button className="btn rm" onClick={() => {removeTodo(todoId); writeToLocalStorage('todos')}}>&times;</button>
      </div>
    </li>
  )
}
const mapStateToProps = state => {
  return {
    todos: state
  }
}
export default connect(mapStateToProps, {removeTodo, toggleTodo, editTodo})(Todo)
