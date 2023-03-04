import TodoList from "./components/TodoList";
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [ todos, setTodos ] = useState([]);
  const todoNameRef = useRef();

  //call once when component loads
  useEffect(() => {
      const storedTodos = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_KEY)
      );

      if (storedTodos) {
        setTodos(prevTodos => [
            ...prevTodos,
            ...storedTodos
        ])
      }
    }, []);

  //everytime todos array changes, save todo
  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(todos)
    )
  }, [todos]);

  function toggleTodo(id) {
    //never directly modify a state variable
    //create a copy, modify the copy, then set the new state
    const newTodos = [...todos]

    //find todo to modify
    const todo = newTodos.find(todo => todo.id === id)

    //toggle complete value
    todo.complete = ! todo.complete;

    //set state to new modified list
    setTodos(newTodos)
  }

  function handdleAddTodo(e) {
    const name = todoNameRef.current.value

    if (name === '') {
      return;
    }

    setTodos(prevTodos => {
      return [
        ...prevTodos, {
          id: uuidv4(),
          name: name,
          complete: false,
        }
      ]
    })

    //clear value after adding
    todoNameRef.current.value = null
  }

  function handleclearTodos(e) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={ todos } toggleTodo= { toggleTodo } />
      <input ref={ todoNameRef } type="text"/>
      <button onClick={ handdleAddTodo }>Add Todo</button>
      <button onClick={ handleclearTodos }>Clear Completed Todos</button>
      <div>{ todos.filter(todo => !todo.complete).length } left to do</div>
    </>
  );
}

export default App;
