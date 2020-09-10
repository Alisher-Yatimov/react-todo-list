import React, {useState} from 'react'
import './style.css'

export default function EditForm({editTodo, todoText}) {
  const [todo, setTodo] = useState(todoText)
  return (
    <form onSubmit={editTodo} className="editForm">
      <input type="text" name="todo" onChange={e => setTodo(e.target.value  )} value={todo}/>
      <button type="submit">&#10004;</button>
    </form>
  )
}
