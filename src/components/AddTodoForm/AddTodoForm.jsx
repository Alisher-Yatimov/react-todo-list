import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../../redux/actions'
import { writeToLocalStorage } from '../middleware/localStorage'
import './style.css'

function AddTodoForm({addTodo, todos}) {
  const [todo, setTodo] = useState('')
  useEffect(() => {
    writeToLocalStorage('todos', todos)
  })

  const submitHandler = e => {
    e.preventDefault()
    e.target.todo.value = ''
    addTodo(todo)
  }

  function formHandler(e) {
    setTodo(e.target.value)
  }

  return (
    <div className="add-todo-form">
      <div className="container">
        <form className="form" onSubmit={submitHandler}>
          <input type="text" name="todo" vaule={todo} onChange={formHandler}/>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  addTodo
}
const mapStateToProps = state => {
  return {
    todos: state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)