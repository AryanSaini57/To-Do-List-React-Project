import React from 'react'

function InnerTask({todo, delTodos, index}) {
  return (
      <div className="lists">
        <p>{todo}</p>
        <div className="action_buttons">
          <input type="checkbox" />
          <button onClick={()=>delTodos(index)}>Delete</button>
        </div>
      </div>
  )
}

export default InnerTask