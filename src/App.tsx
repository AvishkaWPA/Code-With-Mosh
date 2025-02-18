import React, { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Student from "./components/Student";
import Posts from "./components/Posts";
import Counter from "./components/state-management/Counter";
import AuthReducer from "./components/state-management/Reducers/AuthReducer";
import { User } from "./components/state-management/User";
import UserContext from "./components/state-management/context/UserContext";
import Test from "./components/test";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

//export const ThemeContext = React.createContext<{ theme: string }>();

function App() {
  let items = ["Kottawa", "Maharagama", "Nugegoda", "Borella", "Hambanthota"];
  const [user, dispatch] = useReducer(AuthReducer, {} as User);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [theme, setTheme] = useState("light");

  return (
    <RouterProvider router={router}/>
    // <ThemeContext.Provider value={theme}>
    //   <UserContext.Provider value={{ user, dispatch }}>
    //     <Counter />
    //   </UserContext.Provider>
    // </ThemeContext.Provider>
    // <Posts />
    // <div>
    //   <Alert>Warning! be carefull...</Alert>
    //   <Student />
    //   <ListGroup
    //     items={items}
    //     heading={"Cities"}
    //     onSelectItem={handleSelectItem}
    //   />
    //   <div style={{ marginLeft: 25 }}>
    //     <Button onClick={() => console.log("btn clicked")} color="danger">
    //       click me
    //     </Button>
    //   </div>
    // </div>
  );
}

export default App;
