import Axios from "axios";
import { useEffect, useState } from "react";
import Alert from "./Alert";
import { Link, useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
}

const Student = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     setUsers(res.data);
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //   });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Something went wrong");
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <Alert>{error}</Alert>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Link to="/test">Go to test</Link>
      <br />
      <button onClick={() => navigate("/test")} className="btn btn-primary">
        Submit
      </button>
    </>
  );
};

export default Student;
