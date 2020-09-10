import React from 'react'
import logo from '../../assets/notepad.svg'
import './style.css'

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo"/>
          <span>todo list</span>
        </div>
      </div>
    </div>
  )
}
