import { createBrowserRouter } from "react-router"
import MainLayout from "../Layout/MainLayout/MainLayout"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Register from "../Pages/Auth/Register"
import Login from "../Pages/Auth/Login"

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<h2>Hello</h2>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:"login",
        element: <Login/>
      }
    ]
  }
])
export default router