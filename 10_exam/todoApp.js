import React, { useState, useEffect } from "react";
  
  const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [hoverIndex,setHoverIndex] = useState(null);
  
    const handleAddTodo = () => {
      //입력창이 빈칸일때 할일추가 불가
      if(!input || todos.includes(input)) return;
      const now = new Date();
      const newTodo = {
        text: input,
        time: now.toLocaleTimeString()
      };
      setTodos([...todos,newTodo]);
      setInput("");
    };
  
    const handleDeleteTodo = (index) => {
      setTodos(todos.filter((_, i) => i !== index))
    };
    const cut = (str, n) => {
      return str.length > 10 ? str.substr(0, n - 1) + "..." : str;
    };

    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>추가</button>
        {todos.length === 0 ? (
          <p>할 일이 없습니다</p>
        ) : (
          <ul>
            {todos.map((todo, index) => (
              <li key={index} 
                onMouseOver={() => setHoverIndex(index)} 
                onMouseLeave={() => setHoverIndex(null)}
              >
                 {hoverIndex != index ? cut(todo.text, 10) : todo.text} {todo.time}
                <button onClick={() => {
                  return handleDeleteTodo(index)
                  }}>삭제</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default TodoApp;