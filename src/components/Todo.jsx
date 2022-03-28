import React from "react";

function Todo({ todos }) {
  return (
    <>
      {todos.map((todo, index) => (
        <div key={index} className="mainTodo">
          <h2 className="todo">{todo.todo}</h2>
          <p className="disc">
            <span className="date">{todo.date}</span>
            <span className="time">{todo.time} </span>
            <br />
            <br />
            {todo.todoDisc}
          </p>
        </div>
      ))}
    </>
  );
}

export default Todo;
