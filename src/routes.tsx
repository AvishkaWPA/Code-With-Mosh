import { createBrowserRouter } from "react-router-dom";
import Test from "./components/test";
import Student from "./components/Student";

const router = createBrowserRouter([
  { path: "/student", Component: Student },
  { path: "/test", Component: Test },
]);

export default router;
