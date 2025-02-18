import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Test = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data))
      .catch((error) => setError(error.message));
  }, []);

  const handleOnClick = () => {};

  return (
    <>
      <Link to="/student">Go to Students</Link>
      <div className="list-group">
        {todos.map((todo) => (
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            {todo.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default Test;
