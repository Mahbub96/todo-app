import React from "react";
import Todos from "./Todos";
import { useState, useEffect } from "react";
import Todo from "./Todo";
import app from "../firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function Layout() {
  const db = getFirestore(app);
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

  return (
    <div>
      <div className="container">
        <Todos
          todosCollectionRef={todosCollectionRef}
          setTodos={setAllTodos}
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
          />
        )}
      </div>
    </div>
  );
}

export default Layout;
