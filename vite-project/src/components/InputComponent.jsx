import React, {useState} from "react"; 

  function InputComponent({text, writeText, writeTodos}) {
    return (
        <div className="input_button">
          <input onChange={writeText} type="text" value={text}/>
          <button onClick={writeTodos}>+</button>
        </div>
    )
}

export default InputComponent;
