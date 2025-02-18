import { useContext, useReducer, useState } from "react";
import CounterReducer from "./Reducers/CounterReducer";
import UserContext from "./context/UserContext";
import { ThemeContext } from "../../App";

const Counter = () => {
  //const [value, setValue] = useState(0);
  //const [value, dispatch] = useReducer(CounterReducer, 0);
  const { user, dispatch } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {user.name}
      {user.email}
      {user.id}
      {theme}
      {/* Counter:{value} */}
      <br />
      <button
        onClick={() => dispatch({ type: "LOGIN" })}
        className="btn btn-primary  my-2"
      >
        Increment
      </button>
      <br />
      {/* <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="btn btn-primary  my-2"
      >
        Decrement
      </button> */}
    </div>
  );
};

export default Counter;
