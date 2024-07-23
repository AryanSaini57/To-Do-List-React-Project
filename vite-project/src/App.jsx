import { useState } from 'react';
import React from "react";
import './App.css'
import InputComponent from "./components/InputComponent";
import TaskComponent from "./components/TaskComponent";

function App() {

  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  function writeText(e){
    setText(e.target.value)
    console.log(e)
  }

  function writeTodos(){
    if(text!=''){
      setTodos((prevTodos)=>[...prevTodos, text])
      setText('')
    }
  }

  function delTodos(todoIndex){
    setTodos((prevTodos)=>prevTodos.filter((prevTodos, prevTodosIndex)=>{
      return prevTodosIndex!=todoIndex
    })
    )
  }

  console.log(todos)

  return (
    <main>
      <h1>To Do List</h1>
      <InputComponent text={text} writeText={writeText} writeTodos={writeTodos}/>
      <TaskComponent todos={todos} delTodos={delTodos}/>
    </main>
  );
}

export default App;
