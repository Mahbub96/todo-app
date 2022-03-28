import "./App.css";
import Todos from "./components/Todos";
import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [allTodos, setAllTodos] = useState([
    {
      todo: "First Todo",
      todoDisc: "This is short Discription",
      date: "22,12,97",
      time: "12:21pm",
    },
    {
      todo: "second",
      todoDisc: "This is short Discription",
      date: "22,12,97",
      time: "12:21pm",
    },
  ]);
  return (
    <>
      <Todos setTodos={setAllTodos} allTodos={allTodos} />
      <Todo todos={allTodos} />
    </>
  );
}

export default App;
