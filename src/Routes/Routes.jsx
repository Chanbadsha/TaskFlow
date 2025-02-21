import { createBrowserRouter } from "react-router"
import MainLayout from "../Layout/MainLayout/MainLayout"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Register from "../Pages/Auth/Register"
import Login from "../Pages/Auth/Login"
import PrivatRoute from "../PrivateRoute/PrivatRoute"
import HomePage from "../Pages/HomePage/HomePage"

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:'register',
        element:<PrivatRoute><Register/></PrivatRoute>
      },
      {
        path:"login",
        element: <Login/>
      }
    ]
  }
])
export default router