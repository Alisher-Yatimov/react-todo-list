import React from 'react';
import Header from './components/Header';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodoForm />
      <div className="container">
        <ul className="todo-list">
          <TodoList />
        </ul>
      </div>
    </div>
  );
}

export default App;
