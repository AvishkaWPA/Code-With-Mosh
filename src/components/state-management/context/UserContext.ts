import { Dispatch } from "react";
import { userAcion } from "../Reducers/AuthReducer";
import { User } from "../User"
import React from "react";

interface UserContextType {
  user: User;
  dispatch: Dispatch<userAcion>;
}

const UserContext = React.createContext<UserContextType>({} as UserContextType);

export default UserContext;