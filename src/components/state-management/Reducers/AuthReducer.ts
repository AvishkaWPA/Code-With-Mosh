import { User } from "../User";

export interface userAcion {
  type: "LOGIN" | "LOGOUT";
}
const AuthReducer = (state: User, action: userAcion): User => {
  if (action.type === "LOGIN")
    return { id: 1, name: "avishka", email: "avishka@gmail.com" };
  if (action.type === "LOGOUT") return {} as User;
  return state;
};

export default AuthReducer;
