import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import HomePage from "../Pages/HomePage/HomePage";
import AddNewTask from "../Pages/AddTask/AddNewTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "/addtask",
            element: <AddNewTask />,
          },
        ],
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
