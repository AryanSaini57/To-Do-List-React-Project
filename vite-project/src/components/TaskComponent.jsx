import React from "react";
import InnerTask from "./InnerTask";

function TaskComponent({todos, delTodos}) {
  return (
    <div className="container">
        {todos.map((todo, index)=>{
        return( 
        <InnerTask todo={todo} index={index} delTodos={delTodos}/>
        )   
      })}
    </div>
  );
}

export default TaskComponent;
