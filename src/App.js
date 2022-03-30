import "./App.css";
import Todos from "./components/Todos";
import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const App = () => {
  const todosCollectionRef = collection(db, "todos");
  const [allTodos, setAllTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    let newArray = allTodos.filter((todo) => id !== todo.id);
    setAllTodos(newArray);
  };

  const handleDone = (id) => {
    let newArray = allTodos.filter((todo) => id !== todo.id);

    setAllTodos(newArray);
  };
  useEffect(() => {
    const getTodos = async () => {
      const datas = await getDocs(todosCollectionRef);
      await setAllTodos(datas.docs.map((doc) => ({ ...doc.data() })));
      await setLoading(false);
    };
    getTodos();
  }, [todosCollectionRef]);

  const handleEdit = (id) => {};

  return (
    <div className="container">
      <Todos
        todosCollectionRef={todosCollectionRef}
        setTodos={setAllTodos}
        handleEdit={handleEdit}
        allTodos={allTodos}
      />
      {loading ? (
        "Loading..."
      ) : (
        <Todo
          todos={allTodos}
          className="todos"
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default App;
