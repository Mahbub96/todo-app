import React, { useState } from "react";

function Todos({ setTodos, allTodos }) {
  const [todo, setTodo] = useState("");
  const [todoDisc, setTodoDisc] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoDisc, date, time);
    setTodos([{ todo, todoDisc, date, time }, ...allTodos]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo Header"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <input
          type="text"
          placeholder="Task Discriptions"
          onChange={(e) => setTodoDisc(e.target.value)}
          value={todoDisc}
        />
        <input
          type="date"
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <input
          type="time"
          placeholder="time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Todos;
