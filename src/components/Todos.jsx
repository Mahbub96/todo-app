import React, { useState } from "react";
import { addDoc } from "firebase/firestore";
function Todos({ setTodos, allTodos, handleEdit, todosCollectionRef }) {
  const [todo, setTodo] = useState("");
  const [todoDisc, setTodoDisc] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(todosCollectionRef, {
      id: new Date(),
      todo,
      todoDisc,
      date,
      time,
    });

    setTodos([...allTodos, { id: new Date(), todo, todoDisc, date, time }]);
    console.log(allTodos);
  };

  /*
  function handleEdit(id) {
    let newArray = allTodos.filter((todo) => id !== todo.id);
    setTodo(newArray.todo);
    setTodoDisc(newArray.todoDisc);
    setDate(newArray.date);
    setTime(newArray.time);
  }
*/
  return (
    <div className="container">
      <h1>React Todo App</h1>
      <form onSubmit={handleSubmit} className="my-5">
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Todo Header"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          required
        />
        <textarea
          className="form-control mb-2"
          type="text"
          placeholder="Task Discriptions"
          onChange={(e) => setTodoDisc(e.target.value)}
          value={todoDisc}
        />
        <input
          className="form-control mb-2"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <input
          className="form-control mb-2"
          type="time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Todos;
