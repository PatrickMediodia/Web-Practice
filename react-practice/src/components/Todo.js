import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  function handdleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div>
      <label> 
        { todo.name } 
      </label>
      <input
        onChange={ handdleTodoClick }
        type="checkbox"
        checked={ todo.complete }
      />
    </div>
  )
}
